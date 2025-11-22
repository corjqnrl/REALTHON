export interface ExtractedLecture {
    name: string;
    room: string;
    lectureDays?: string[];
    startTime?: string;
    endTime?: string;
}
export declare class OpenAIService {
    private readonly logger;
    private readonly openai;
    constructor();
    extractTimeTableInfo(imageBuffer: Buffer, mimeType: string): Promise<ExtractedLecture[]>;
}
