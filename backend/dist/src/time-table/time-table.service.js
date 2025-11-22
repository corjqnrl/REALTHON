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
var TimeTableService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTableService = void 0;
const common_1 = require("@nestjs/common");
const openai_service_1 = require("../openai/openai.service");
let TimeTableService = TimeTableService_1 = class TimeTableService {
    openaiService;
    logger = new common_1.Logger(TimeTableService_1.name);
    constructor(openaiService) {
        this.openaiService = openaiService;
    }
    async uploadTimeTableImage(file) {
        if (!file) {
            throw new common_1.BadRequestException('파일이 제공되지 않았습니다.');
        }
        if (!file.mimetype || !file.originalname || !file.buffer || !file.size) {
            throw new common_1.BadRequestException('파일 정보가 올바르지 않습니다.');
        }
        const allowedMimeTypes = [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/gif',
            'image/webp',
        ];
        if (!allowedMimeTypes.includes(file.mimetype)) {
            throw new common_1.BadRequestException('이미지 파일만 업로드 가능합니다.');
        }
        this.logger.log('OpenAI API를 사용하여 시간표 정보 추출 중...');
        const extractedLectures = await this.openaiService.extractTimeTableInfo(file.buffer, file.mimetype);
        const lectures = extractedLectures.map((lecture) => {
            const lectureDays = (lecture.lectureDays || []).map((day) => ({
                day: this.convertDayToEnum(day),
            }));
            return {
                name: lecture.name,
                room: lecture.room,
                startTime: lecture.startTime,
                endTime: lecture.endTime,
                lectureDays,
            };
        });
        this.logger.log(`${lectures.length}개의 강의 정보가 추출되었습니다.`);
        return { lectures };
    }
    convertDayToEnum(day) {
        const upperDay = day.toUpperCase();
        const validDays = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];
        const validDaysSet = new Set(validDays);
        if (validDaysSet.has(upperDay)) {
            return upperDay;
        }
        const dayMap = {
            월: 'MONDAY',
            화: 'TUESDAY',
            수: 'WEDNESDAY',
            목: 'THURSDAY',
            금: 'FRIDAY',
            Monday: 'MONDAY',
            Tuesday: 'TUESDAY',
            Wednesday: 'WEDNESDAY',
            Thursday: 'THURSDAY',
            Friday: 'FRIDAY',
        };
        return dayMap[day] || 'MONDAY';
    }
};
exports.TimeTableService = TimeTableService;
exports.TimeTableService = TimeTableService = TimeTableService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [openai_service_1.OpenAIService])
], TimeTableService);
//# sourceMappingURL=time-table.service.js.map