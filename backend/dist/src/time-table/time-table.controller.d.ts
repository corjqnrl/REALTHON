import { MulterFile } from '../common/types/multer.types';
import { TimeTableService } from './time-table.service';
export declare class TimeTableController {
    private readonly timeTableService;
    constructor(timeTableService: TimeTableService);
    uploadTimeTableImage(file: MulterFile | undefined): Promise<{
        lectures: Array<{
            name: string;
            room: string;
            startTime?: string;
            endTime?: string;
            lectureDays: Array<{
                day: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY';
            }>;
        }>;
    }>;
}
