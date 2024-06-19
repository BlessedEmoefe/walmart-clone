import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontWeights } from "../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";

export const TableContainer = styled(FlexibleDiv)`
  background: transparent;
  padding: 0.2rem;
  /* Responsiveness */
  overflow-x: scroll;
`;
export const TableHeader = styled(FlexibleDiv)`
  background: ${colors.bg.lightBg};
  margin-bottom: 0.4rem;
  padding: 0.6rem 1rem;

  /* Responsiveness */
  @media only screen and (max-width: 1100px) {
    flex-direction: row;
    min-width: 800px;
  }
`;
export const HeaderTextWrapper = styled(FlexibleDiv)`
  width: ${({ colWidth }) => (colWidth ? colWidth : "auto")};
  justify-content: flex-start;
  align-items: flex-start;
`;
export const HeaderText = styled(Text)`
  color: ${({ dynamicColor }) =>
    dynamicColor ? dynamicColor : colors.primary};
  font-size: 14px;
  font-weight: ${fontWeights.bold};
`;
export const TableBody = styled(FlexibleDiv)`
  // background: teal;
  flex-direction: column;
  /* Responsiveness */
  min-width: 800px;
  overflow-x: scroll;
`;
export const TableBodyRow = styled(FlexibleDiv)`
  background: ${colors.white};
  justify-content: space-between;
  padding: 0.6rem 1rem;
  width: 100%;
  margin-bottom: 1rem;
  :hover {
    background: ${colors.bg.darkBg};
    cursor: pointer;
  }

  /* Responsiveness */
  @media only screen and (max-width: 1100px) {
    flex-direction: row;
  }
`;

export const OptionWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: ${({ colWidth }) => (colWidth ? colWidth : "auto")};
  justify-content: flex-start;
  position: relative;
  align-items: flex-start;
  // background:violet;
`;
export const Wrapper = styled(FlexibleDiv)`
  padding: 0;
  max-width: max-content;
  min-width: ${({ colWidth }) => (colWidth ? colWidth : "auto")};
  flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : "row")};
  justify-content: flex-start;
  align-items: flex-start;

  // background:teal;
`;

export const MemberSinceText = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.semiBold};
  font-size: 14px;
  width: 100%;
  // background: pink;
`;
export const SavingRateText = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.semiBold};
  font-size: 14px;
  width: 100%;
  // background: pink;
`;
export const TotalAmountSavedText = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.semiBold};
  font-size: 14px;
  width: 100%;
`;
export const DynamicTableText = styled(Text)`
  color: ${({ dynamicColor }) =>
    dynamicColor ? dynamicColor : colors.primary};
  font-weight: ${fontWeights.semiBold};
  font-size: 14px;
  text-align: left;
  width:100%;
  flex: 1;
`;

export const CompletedDays = styled(Text)`
  color: ${({ dynamicColor }) =>
    dynamicColor ? dynamicColor : colors.primary};
  opacity: 0.5;
  font-weight: ${fontWeights.semiBold};
  font-size: 14px;
  width: "max-content";
`;
export const MonthDays = styled(Text)`
  color: ${({ dynamicColor }) =>
    dynamicColor ? dynamicColor : colors.primary};
  opacity: 1;
  font-weight: ${fontWeights.semiBold};
  font-size: 14px;
  width: "max-content";
`;
export const TimeStamp = styled(Text)`
  color: ${colors.primary};
  font-weight: ${fontWeights.semiBold};
  font-size: 14px;
  width: 100%;
  // background: pink;
`;
// export const CustomTableMain = styled(FlexibleDiv)``;
// export const CustomTableMain = styled(FlexibleDiv)``;
