import React, { useState } from "react";
import { FileText, Pencil, Clock } from "lucide-react";
import sidebarStyles from "@/styles/sidebar.styles";
import { HistoryItem, AnalysisType } from "../types";

interface HistorySectionProps {
  historyItems: HistoryItem[];
  onHistorySelect: (item: HistoryItem) => void;
  onRenameHistoryItem: (id: number, newTitle: string) => void;
}

const HistorySection: React.FC<HistorySectionProps> = ({
  historyItems,
  onHistorySelect,
  onRenameHistoryItem,
}) => {
  const [editingId, setEditingId] = React.useState<number | null>(null);
  const [editValue, setEditValue] = React.useState("");

  const handleEditClick = (e: React.MouseEvent, item: HistoryItem) => {
    e.stopPropagation();
    setEditingId(item.id);
    setEditValue(item.title);
  };

  const handleSave = (
    e: React.MouseEvent | React.FocusEvent | React.KeyboardEvent,
    id: number
  ) => {
    e.stopPropagation();
    if (editValue.trim()) {
      onRenameHistoryItem(id, editValue.trim());
    }
    setEditingId(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: number) => {
    if (e.key === "Enter") {
      handleSave(e, id);
    } else if (e.key === "Escape") {
      setEditingId(null);
    }
  };

  return (
    <div className={sidebarStyles.historySection}>
      <div className={sidebarStyles.historyTitleBox}>
        <h3 className={sidebarStyles.historyTitle}>
          <Clock size={12} />
          지난번 분석
        </h3>
      </div>

      <div className={sidebarStyles.historyList}>
        {historyItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onHistorySelect(item)}
            className={sidebarStyles.historyItem}
          >
            <div
              className={`absolute left-0 top-0 h-full w-1 transition-colors ${
                item.type === AnalysisType.MAJOR
                  ? "bg-blue-200 group-hover:bg-blue-600"
                  : "bg-purple-200 group-hover:bg-purple-600"
              }`}
            ></div>
            <div className={sidebarStyles.historyItemContent}>
              <FileText size={16} className={sidebarStyles.fileTextIcon} />
              <div className={sidebarStyles.historyItemMain}>
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={(e) => handleSave(e, item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                    onClick={(e) => e.stopPropagation()}
                    autoFocus
                    className={sidebarStyles.historyInput}
                  />
                ) : (
                  <>
                    <p className={sidebarStyles.historyItemTitle}>
                      {item.title}
                    </p>
                    <button
                      onClick={(e) => handleEditClick(e, item)}
                      className={sidebarStyles.historyEditBtn}
                      title="이름 변경"
                    >
                      <Pencil size={12} />
                    </button>
                  </>
                )}
                <p className={sidebarStyles.historyDate}>{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistorySection;
