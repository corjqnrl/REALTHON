import { Injectable } from '@nestjs/common';

@Injectable()
export class PromptService {
  buildRefineQueryPrompt(firstDocs: any[], grade: string) {
    let context = '';

    firstDocs.forEach((doc, i) => {
      context += `[Doc${i}] ${doc.pageContent.slice(0, 300)}\n`;
    });

    return `
학생 성적: ${grade}

아래 문서는 이 학생이 들은 과목의 특징입니다:

${context}

이 정보를 기반으로, 학생에게 적합한 강의를 찾기 위한
검색 쿼리를 한 문장으로 만들어줘.
    `;
  }

  buildFinalPrompt(finalDocs: any[], info: any) {
    let context = '';

    finalDocs.forEach((doc, i) => {
      context += `[Doc${i}] ${doc.metadata.course} / ${doc.metadata.type}\n${doc.pageContent.slice(0, 300)}\n\n`;
    });

    return `
너는 대학 강의 추천 AI이다.

학생 정보:
- 과목: ${info.course}
- 성적: ${info.grade}
- 요청: ${info.target_type}

참고 문서:
${context}

이 학생이 A를 받을 수 있는 강의 3개를 추천하고,
강의별 이유도 자세히 설명해줘.
    `;
  }
}
