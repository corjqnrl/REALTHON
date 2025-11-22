import React from "react";
import { History, BookOpen } from "lucide-react";
import headerStyles from "../styles/header.styles";

const Header: React.FC = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logoArea}>
        <div className={headerStyles.logoIconBox}>
          <BookOpen
            size={20}
            strokeWidth={2.5}
            className={headerStyles.logoIcon}
          />
        </div>
        <div className={headerStyles.logoTextArea}>
          <span className={headerStyles.logoTitle}>CourseFit</span>
          <span className={headerStyles.logoSubtitle}>AI Advisor</span>
        </div>
      </div>
      <button className={headerStyles.historyButton} type="button">
        <History className={headerStyles.historyIcon} />
        지난번 분석
      </button>
    </header>
  );
};

export default Header;
