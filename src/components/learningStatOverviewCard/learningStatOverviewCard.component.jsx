import React from "react";
import {
  LearningStatOverviewCardContainer,
  CardNameSection,
  CardName,
  StatSection,
  CardStat,
  CardIconWrapper,
} from "./learningStatOverviewCard.styles";
import { ImVideoCamera as CameraIcon } from "react-icons/im";

export const LearningStatOverviewCard = ({
  cardName,
  cardStat,
  CardIcon = CameraIcon,
  iconColor,
}) => {
  return (
    <LearningStatOverviewCardContainer>
      <CardNameSection>
        <CardName>{cardName || "Live Classes Attended"}</CardName>
      </CardNameSection>

      <StatSection>
        <CardStat>{cardStat || 0}</CardStat>
        <CardIconWrapper borderColor={iconColor}>
          <CardIcon color={iconColor || "#007DCB"} fontSize={"1rem"} />
        </CardIconWrapper>
      </StatSection>
    </LearningStatOverviewCardContainer>
  );
};
