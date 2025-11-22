import React from "react";
import { AnalysisType } from "../types";
import uploadSectionStyles from "../styles/uploadSectionStyles";

interface AnalyzeButtonsProps {
  file: File | null;
  userMajor: string;
  inputError: boolean;
  setInputError: React.Dispatch<React.SetStateAction<boolean>>;
  onAnalyze: (results: any, type: AnalysisType, major: string) => void;
  isAnalyzing: boolean;
}

const AnalyzeButtons: React.FC<AnalyzeButtonsProps> = ({
  file,
  userMajor,
  inputError,
  setInputError,
  onAnalyze,
  isAnalyzing,
}) => {
  const handleClick = (type: AnalysisType) => {
    if (!file) return;

    if (type === AnalysisType.MAJOR && !userMajor.trim()) {
      setInputError(true);
      return;
    }
    setInputError(false);
    onAnalyze(file, type, userMajor);
  };

  return (
    <div className="grid grid-cols-2 gap-5 mt-1">
      <button
        onClick={() => handleClick(AnalysisType.GENERAL)}
        disabled={!file || isAnalyzing}
        className={`${uploadSectionStyles.analyzeBtn} ${
          !file || isAnalyzing
            ? uploadSectionStyles.analyzeBtnInactive
            : uploadSectionStyles.generalActive
        }`}
      >
        <div className="font-black text-slate-900">교양과목 분석</div>
      </button>
      <button
        onClick={() => handleClick(AnalysisType.MAJOR)}
        disabled={!file || isAnalyzing}
        className={`${uploadSectionStyles.analyzeBtn} ${
          !file || isAnalyzing
            ? uploadSectionStyles.analyzeBtnInactive
            : uploadSectionStyles.majorActive
        }`}
      >
        <div className="font-black text-slate-900">전공과목 분석</div>
      </button>
    </div>
  );
};

export default AnalyzeButtons;
