import { MulterFile } from '../common/types/multer.types';
import { OpenAIService } from '../openai/openai.service';
export interface LectureResponse {
    name: string;
    room: string;
    startTime?: string;
    endTime?: string;
    lectureDays: Array<{
        day: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY';
    }>;
}
export declare class TimeTableService {
    private openaiService;
    private readonly logger;
    constructor(openaiService: OpenAIService);
    uploadTimeTableImage(file: MulterFile): Promise<{
        lectures: LectureResponse[];
    }>;
    private convertDayToEnum;
}
