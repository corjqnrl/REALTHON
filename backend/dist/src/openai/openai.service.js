"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var OpenAIService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = __importDefault(require("openai"));
let OpenAIService = OpenAIService_1 = class OpenAIService {
    logger = new common_1.Logger(OpenAIService_1.name);
    openai;
    constructor() {
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            this.logger.warn('OPENAI_API_KEY가 설정되지 않았습니다. OpenAI 기능을 사용할 수 없습니다.');
        }
        this.openai = new openai_1.default({
            apiKey: apiKey,
        });
    }
    async extractTimeTableInfo(imageBuffer, mimeType) {
        if (!process.env.OPENAI_API_KEY) {
            throw new Error('OPENAI_API_KEY가 설정되지 않았습니다.');
        }
        try {
            const base64Image = imageBuffer.toString('base64');
            const response = await this.openai.chat.completions.create({
                model: 'gpt-4o',
                messages: [
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'text',
                                text: `이 시간표 이미지를 분석해서 다음 정보를 JSON 형식으로 추출해주세요:
- 과목명 (name): 강의 과목 이름
- 강의실 (room): 강의실 번호 또는 위치
- 요일 (lectureDays): MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY 중 하나 또는 여러 개
- 시작 시간 (startTime): HH:MM 형식 (예: "09:00")
- 종료 시간 (endTime): HH:MM 형식 (예: "10:30")

중요 사항:
- 수업에 대한 시간표는 다음과 같아: 1교시 : 09:00 ~ 10:15, 2교시 : 10:30 ~ 11:45, 3교시 : 12:00 ~ 13:15, 4교시 : 13:30 ~ 14:45, 5교시 : 15:00 ~ 16:15, 암튼 이렇게 있음.
- 분석한 강의 시간대가 위의 시간표와 맞지 않을 시 위에 있는 시간을 기준으로 알려줘.
- 하나의 강의가 여러 요일에 걸쳐 있으면, 하나의 강의 객체에 lectureDays 배열에 모든 요일을 포함해주세요.
- 예를 들어 "데이터베이스" 강의가 월요일과 수요일에 있으면, lectureDays에 ["MONDAY", "WEDNESDAY"]를 포함해주세요.
- 같은 과목명, 같은 강의실, 같은 시간대인 경우 하나의 강의로 묶어주세요.
- 요일은 반드시 영어 대문자로 반환해주세요: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY

응답은 반드시 다음 형식의 JSON 객체로 반환해주세요 (lectures 키에 배열 포함):
{
  "lectures": [
    {
      "name": "과목명",
      "room": "강의실",
      "lectureDays": ["MONDAY"],
      "startTime": "09:00",
      "endTime": "10:30"
    },
    {
      "name": "과목명",
      "room": "강의실",
      "lectureDays": ["MONDAY", "WEDNESDAY"],
      "startTime": "09:00",
      "endTime": "10:30"
    }
  ]
}

lectureDays는 항상 문자열 배열로 반환해주세요 (단일 요일이어도 배열로).
시간표에 있는 모든 강의를 정확하게 추출해주세요.`,
                            },
                            {
                                type: 'image_url',
                                image_url: {
                                    url: `data:${mimeType};base64,${base64Image}`,
                                },
                            },
                        ],
                    },
                ],
                max_tokens: 2000,
                response_format: { type: 'json_object' },
            });
            const content = response.choices[0]?.message?.content;
            if (!content) {
                throw new Error('OpenAI API 응답이 비어있습니다.');
            }
            let parsed;
            try {
                parsed = JSON.parse(content);
            }
            catch {
                throw new Error('JSON 파싱 실패');
            }
            const isOpenAIResponse = (obj) => {
                return (typeof obj === 'object' &&
                    obj !== null &&
                    ('lectures' in obj || Array.isArray(obj)));
            };
            if (!isOpenAIResponse(parsed)) {
                throw new Error('응답 형식이 올바르지 않습니다.');
            }
            let lectures = [];
            if (Array.isArray(parsed.lectures)) {
                lectures = parsed.lectures;
            }
            else if (Array.isArray(parsed)) {
                lectures = parsed;
            }
            else {
                throw new Error('응답에 lectures 배열이 없습니다.');
            }
            const isValidLecture = (obj) => {
                return (typeof obj === 'object' &&
                    obj !== null &&
                    ('name' in obj || 'room' in obj));
            };
            return lectures
                .filter(isValidLecture)
                .map((lecture) => {
                let lectureDays;
                if (Array.isArray(lecture.lectureDays)) {
                    lectureDays = lecture.lectureDays.filter((day) => typeof day === 'string');
                }
                return {
                    name: typeof lecture.name === 'string' ? lecture.name : '',
                    room: typeof lecture.room === 'string' ? lecture.room : '',
                    lectureDays,
                    startTime: typeof lecture.startTime === 'string'
                        ? lecture.startTime
                        : undefined,
                    endTime: typeof lecture.endTime === 'string' ? lecture.endTime : undefined,
                };
            });
        }
        catch (error) {
            this.logger.error('OpenAI API 호출 실패:', error);
            throw new Error(`시간표 정보 추출 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`);
        }
    }
};
exports.OpenAIService = OpenAIService;
exports.OpenAIService = OpenAIService = OpenAIService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], OpenAIService);
//# sourceMappingURL=openai.service.js.map