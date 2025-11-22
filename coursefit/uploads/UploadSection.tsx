import React, { useState } from "react";
import FileUploadArea from "./FileUploadArea";
import MajorInput from "./MajorInput";
import AnalyzeButtons from "./AnalyzeButtons";
import { AnalysisType } from "../types";

interface UploadSectionProps {
  onAnalyze: (results: any, type: AnalysisType, major: string) => void;
  isAnalyzing: boolean;
}

const UploadSection: React.FC<UploadSectionProps> = ({
  onAnalyze,
  isAnalyzing,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [userMajor, setUserMajor] = useState("");
  const [inputError, setInputError] = useState(false);

  return (
    <div>
      <FileUploadArea file={file} setFile={setFile} isAnalyzing={isAnalyzing} />
      <MajorInput
        userMajor={userMajor}
        setUserMajor={setUserMajor}
        inputError={inputError}
        setInputError={setInputError}
      />
      <AnalyzeButtons
        file={file}
        userMajor={userMajor}
        inputError={inputError}
        setInputError={setInputError}
        onAnalyze={onAnalyze}
        isAnalyzing={isAnalyzing}
      />
    </div>
  );
};

export default UploadSection;
