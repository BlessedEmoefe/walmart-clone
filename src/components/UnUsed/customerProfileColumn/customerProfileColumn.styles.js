import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";

export const CustomerProfileRowContainer = styled(FlexibleDiv)`
  // background: ${({ bg }) => (bg ? bg : colors.bg.white)};
  height: 70px;
  width: auto;
  justify-content: space-around;
  align-items: center;
`;
export const ImageWrapper = styled(FlexibleDiv)`
  justify-content: center;
  align-items: flex-start;
  width: auto;
  height: auto;
`;
export const Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

export const InfoSection = styled(FlexibleDiv)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: center;
  width: auto;
  margin-left: 0.6rem;
`;

export const Wrapper = styled(FlexibleDiv)`
  padding: 0;
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
export const IdText = styled(Text)`
  color: ${({ color }) => (color ? color : colors.black.strong)};
  font-size: ${fontSizes.smallBody};
`;
export const CustomerID = styled(Text)`
  color: ${({ color }) => (color ? color : colors.primary)};
  font-size: ${fontSizes.smallBody};
  font-weight: ${fontWeights.bold};
  display: inline;
  cursor: pointer;
  margin-left: 0.2rem;
`;
