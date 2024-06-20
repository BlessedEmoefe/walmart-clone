import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { colors } from "../../infrastructure/theme/colors";

export const Container = styled(FlexibleDiv)`
  border-radius: 20px;
  /* background-color: red; */
  min-width: 200px;
  /* height: 244px; */
  height: max-content;
  padding: 10px;
`;

export const ContainerWrapper = styled(FlexibleDiv)`
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  height: 100%;
`;

export const ImageSection = styled(FlexibleDiv)`
  padding: 0;
  height: 180px;
  /* background-color: blue; */
  border-radius: 10px;
  margin-bottom: 1rem;
  position: relative;
`;
export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const LoveIconWrapper = styled(FlexibleDiv)`
  background: #fff;
  padding: 0.3rem;
  width: max-content;
  border-radius: 1.5rem;
  position: absolute;
  right: 1rem;
  top: 4%;
`;

export const Wrapper = styled(FlexibleDiv)`
  padding: 0;
  height: max-content;
  /* background: pink; */
`;

export const PriceSection = styled(FlexibleDiv)`
  padding: 0;
  /* background: orange; */
`;
export const PriceWrapper = styled(FlexibleDiv)`
  padding: 0;
  /* background: paleturquoise; */
  margin-bottom: 0.5rem;
  gap: 0.7rem;
  justify-content: flex-start;
`;
export const NormalPrice = styled(Text)`
  padding: 0;
  color: ${({ color }) => (color ? 'green' : colors.black.strong)};
  font-size: ${fontSizes.smallBody};
  line-height: ${fontSizes.body};
  font-weight: ${fontWeights.bold};
  align-self: start;
`;
export const Discount = styled(Text)`
  padding: 0;
  color: ${colors.black.regular};
  font-size: ${fontSizes.caption};
  line-height: ${fontSizes.button};
  text-decoration: line-through;
  font-weight: ${fontWeights.regular};
`;
export const PriceInfoWrapper = styled(FlexibleDiv)`
  padding: 0;
  /* background: teal; */
  margin-bottom: 1rem;
`;
export const PriceInfoText = styled(Text)`
  color: ${colors.black.regular};
  font-size: ${fontSizes.button};
  line-height: ${fontSizes.smallBody};
  font-weight: 600;
  align-self: start;
`;
export const InfoSection = styled(FlexibleDiv)`
  padding: 0;
  /* background: yellow; */
  margin-bottom: 0.7rem;
`;
export const ProductInfoText = styled(Text)`
  color: ${colors.black.regular};
  font-size: ${fontSizes.smallBody};
  line-height: ${fontSizes.smallTitle};
  font-weight: ${fontWeights.regular};
  align-self: start;
`;




