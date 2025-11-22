import React from "react";
import { PlusCircle } from "lucide-react";
import sidebarStyles from "@/styles/sidebar.styles";

interface NewAnalysisButtonProps {
  onNewAnalysis: () => void;
}

const NewAnalysisButton: React.FC<NewAnalysisButtonProps> = ({
  onNewAnalysis,
}) => {
  return (
    <div className={sidebarStyles.newAnalysisBox}>
      <button onClick={onNewAnalysis} className={sidebarStyles.newAnalysisBtn}>
        <PlusCircle size={16} className={sidebarStyles.plusIcon} />
        새로운 분석 추가하기
      </button>
    </div>
  );
};

export default NewAnalysisButton;
