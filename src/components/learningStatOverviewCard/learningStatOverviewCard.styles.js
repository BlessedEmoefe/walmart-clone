import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";

export const LearningStatOverviewCardContainer = styled(FlexibleDiv)`
  padding: 1rem;
  width: 22%;
  min-height: max-content;
  height: max-content;
  flex-direction: column;
  border-radius: 20px;
  background: #fff;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (max-width: 800px) {
  }
`;
export const CardNameSection = styled(FlexibleDiv)`
  padding: 0;
  width: 70%;
  min-height: 40px;
  height: max-content;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  @media only screen and (max-width: 800px) {
  }
`;
export const CardName = styled(Text)`
  padding: 0;
  width: max-content;
  height: max-content;
  color: #002069;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;

  @media only screen and (max-width: 800px) {
  }
`;
export const StatSection = styled(FlexibleDiv)`
  padding: 0;
  width: 100%;
  min-height: max-content;
  /* background: blue; */

  @media only screen and (max-width: 800px) {
  }
`;
export const CardStat = styled(Text)`
  padding: 0;
  width: max-content;
  color: #002069;
  font-size: 20px;
  font-weight: 400;

  @media only screen and (max-width: 800px) {
  }
`;

export const CardIconWrapper = styled(FlexibleDiv)`
  background: transparent;
  border: 0.5px solid
    ${({ borderColor }) => (borderColor ? borderColor : "#007DCB")};
  border-radius: 50%;
  padding: 0.5rem;
  width: max-content;
  height: max-content;

  @media only screen and (max-width: 800px) {
  }
`;
