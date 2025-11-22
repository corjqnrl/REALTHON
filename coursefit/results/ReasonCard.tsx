import React from "react";
import { ThumbsUp } from "lucide-react";
import resultsSectionStyles from "../styles/resultsSection.styles";

interface ReasonCardProps {
  reason: string;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ reason }) => (
  <div className={resultsSectionStyles.reasonCardContainer}>
    <div className={resultsSectionStyles.reasonCard}>
      <div className={resultsSectionStyles.reasonContent}>
        <div className={resultsSectionStyles.reasonIconContainer}>
          <ThumbsUp
            size={18}
            fill="currentColor"
            className="bg-white rounded-full"
          />
        </div>
        <p className={resultsSectionStyles.reasonText}>{reason}</p>
      </div>
    </div>
  </div>
);

export default ReasonCard;
