import React from "react";
import { AnalysisType, CourseRecommendation } from "../types";
import ResultsHeader from "./ResultsHeader";
import CourseCard from "./CourseCard";
import { PlusCircle } from "lucide-react";
import resultsSectionStyles from "../styles/resultsSection.styles";

interface ResultsSectionProps {
  recommendations: CourseRecommendation[];
  type: AnalysisType;
  onReset: () => void;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({
  recommendations,
  type,
  onReset,
}) => (
  <div className={resultsSectionStyles.wrapper}>
    <ResultsHeader
      type={type}
      onReset={onReset}
      count={recommendations.length}
    />

    <div className={resultsSectionStyles.contentArea}>
      {recommendations.map((course, idx) => (
        <CourseCard key={idx} course={course} animationDelay={idx * 100} />
      ))}

      <div className={resultsSectionStyles.newAnalysisContainer}>
        <div className={resultsSectionStyles.separator}></div>
        <div className={resultsSectionStyles.newAnalysisButtonContainer}>
          <button
            onClick={onReset}
            className={resultsSectionStyles.newAnalysisButton}
          >
            <PlusCircle
              size={20}
              className={resultsSectionStyles.newAnalysisIcon}
            />
            새로운 분석 시작하기
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ResultsSection;
