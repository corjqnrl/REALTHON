import React from "react";
import LogoSection from "./LogoSection";
import HistorySection from "./HistorySection";
import NewAnalysisButton from "./NewAnalysisButton";
import sidebarStyles from "@/styles/sidebar.styles";
import { HistoryItem, AnalysisType } from "../types";

interface SidebarProps {
  historyItems: HistoryItem[];
  onNewAnalysis: () => void;
  onHistorySelect: (item: HistoryItem) => void;
  onRenameHistoryItem: (id: number, newTitle: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  historyItems,
  onNewAnalysis,
  onHistorySelect,
  onRenameHistoryItem,
}) => {
  return (
    <aside className={sidebarStyles.aside}>
      <LogoSection onNewAnalysis={onNewAnalysis} />
      <div className={sidebarStyles.divider}></div>
      <HistorySection
        historyItems={historyItems}
        onHistorySelect={onHistorySelect}
        onRenameHistoryItem={onRenameHistoryItem}
      />
      <NewAnalysisButton onNewAnalysis={onNewAnalysis} />
    </aside>
  );
};

export default Sidebar;
