import React from "react";
import { ArrowLeft } from "lucide-react";
import resultsSectionStyles from "../styles/resultsSection.styles";
import { AnalysisType } from "../types";

interface ResultsHeaderProps {
  type: AnalysisType;
  onReset: () => void;
  count: number;
}

const ResultsHeader: React.FC<ResultsHeaderProps> = ({
  type,
  onReset,
  count,
}) => (
  <div className={resultsSectionStyles.navHeader}>
    <button onClick={onReset} className={resultsSectionStyles.resetButton}>
      <div className={resultsSectionStyles.resetButtonIcon}>
        <ArrowLeft size={18} />
      </div>
      <span className={resultsSectionStyles.resetButtonText}>
        다시 선택하기
      </span>
    </button>

    <div className={resultsSectionStyles.headerContainer}>
      <div>
        <h2 className={resultsSectionStyles.title}>추천 과목 결과</h2>
        <p className={resultsSectionStyles.subtitle}>
          분석된{" "}
          <span className={resultsSectionStyles.highlight}>{count}개</span>의
          과목으로 A+를 노려보세요.
        </p>
      </div>
      <div
        className={`${resultsSectionStyles.analysisTypeLabel} ${
          type === AnalysisType.GENERAL
            ? resultsSectionStyles.analysisTypeGeneral
            : resultsSectionStyles.analysisTypeMajor
        }`}
      >
        {type === AnalysisType.GENERAL ? "🎨 교양" : "🎓 전공"} 분석 완료
      </div>
    </div>
  </div>
);

export default ResultsHeader;
