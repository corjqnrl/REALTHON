import { IsString } from 'class-validator';

export class RecommendDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  course: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  grade: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  target_type: string; // 전공 or 교양
}
