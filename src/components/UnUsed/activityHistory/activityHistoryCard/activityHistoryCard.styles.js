import styled from "styled-components";
import { colors } from "../../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";
import { Text } from "../../typography/text.component";

export const ActivityHistoryCardContainer = styled(FlexibleDiv)`
  background: ${({ bg }) => (bg ? bg : colors.bg.white)};
  min-height: auto;
  height: ${({ containerheight }) =>
    containerheight ? containerheight : "70px"};
  justify-content: ${({ containerAlign }) =>
    containerAlign ? containerAlign : "space-around"};
  padding: ${({ containerPadding }) =>
    containerPadding ? containerPadding : "0"};
  box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : "0")};
  border-radius: ${({ bradius }) => (bradius ? bradius : "0")};
  @media only screen and (max-width: 850px) {
    justify-content: center;
  }
`;
export const ImageWrapper = styled(FlexibleDiv)`
  justify-content: center;
  align-items: ${({ imageWrapperAlign }) =>
    imageWrapperAlign ? imageWrapperAlign : "flex-start"};
  width: ${({ imageWrapperWidth }) =>
    imageWrapperWidth ? imageWrapperWidth : "13%"};
  height: 100%;
  margin-right: ${({ imageWrapperMargin }) =>
    imageWrapperMargin ? imageWrapperMargin : "0"};
`;
export const Image = styled.img`
  width: ${({ imageSize }) => (imageSize ? imageSize : "48px")};
  height: ${({ imageSize }) => (imageSize ? imageSize : "48px")};
  border-radius: 50%;
  cursor: pointer;
`;

export const InfoSection = styled(FlexibleDiv)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: center;
  width: ${({ InfoSectionWidth }) =>
    InfoSectionWidth ? InfoSectionWidth : "40%"};
  @media only screen and (max-width: 680px) {
    flex-direction: row;
    width: 100%;
    margin-top: 12px;
  }
  @media only screen and (max-width: 850px) {
    text-align: center;
  }
`;

export const Wrapper = styled(FlexibleDiv)`
  padding: 0;
  @media only screen and (max-width: 850px) {
    justify-content: center;
  }
`;

export const InfoText = styled(Text)`
  color: ${({ color }) => (color ? color : colors.black.strong)};
  font-size: ${fontSizes.caption};
  display: inline;
  line-height: 16px;
`;
export const UserName = styled(Text)`
  color: ${({ color }) => (color ? color : colors.black.strong)};
  font-size: ${fontSizes.smallBody};
  font-weight: ${fontWeights.bold};
  padding-right: 0.2rem;
  display: inline;
  cursor: pointer;
`;

export const ViewNarrationText = styled(Text)`
  color: ${({ color }) => (color ? color : colors.primary)};
  font-size: ${fontSizes.smallBody};
  font-weight: ${fontWeights.semiBold};
  line-height: 30px;
  cursor: pointer;
`;

export const TimeStamp = styled(Text)`
  color: ${({ color }) => (color ? color : colors.black.strong)};
  font-size: ${fontSizes.caption};
  width: auto;
  line-height: 16px;
`;
