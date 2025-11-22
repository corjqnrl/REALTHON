import React from "react";
import { GraduationCap, Sparkles } from "lucide-react";
import sidebarStyles from "@/styles/sidebar.styles";

interface LogoSectionProps {
  onNewAnalysis: () => void;
}

const LogoSection: React.FC<LogoSectionProps> = ({ onNewAnalysis }) => {
  return (
    <div className={sidebarStyles.logoArea}>
      <div className={sidebarStyles.logoBtn} onClick={onNewAnalysis}>
        <div className={sidebarStyles.logoBox}>
          <GraduationCap
            size={28}
            strokeWidth={2.5}
            className={sidebarStyles.logoIcon}
          />
          <div className={sidebarStyles.logoEyes} style={{ left: 14 }}></div>
          <div className={sidebarStyles.logoEyes} style={{ right: 14 }}></div>
        </div>
        <div className="flex flex-col">
          <span className={sidebarStyles.logoLabel}>CourseFit</span>
          <span className={sidebarStyles.logoSub}>
            AI Advisor <Sparkles size={8} className="text-yellow-500" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
