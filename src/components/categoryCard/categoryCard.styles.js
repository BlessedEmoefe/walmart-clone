import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { colors } from "../../infrastructure/theme/colors";

export const CategoryCardContainer = styled(FlexibleDiv)`
  padding: 0;
  gap: 0.7rem;
  border-radius: 20px;
  background: #fff;
  height: max-content;
  min-width: 120px;
  /* height: 350px; */
  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 800px) {
  }
`;
export const ImageSection = styled(FlexibleDiv)`
  padding: 0;
  /* background: teal; */
  height: 120px;
  justify-content: center;
  align-items: center;
  /* height:70%; */

  @media only screen and (max-width: 800px) {
  }
`;
export const Image = styled.img`
  padding: 0;
  width: auto;
  height: 100%;
  object-fit: contain;


  @media only screen and (max-width: 800px) {
  }
`;

export const TextSection = styled(FlexibleDiv)`
  padding: 0;
  justify-content: center;
  height: max-content;
  /* background:red; */

  @media only screen and (max-width: 800px) {
  }
`;
export const CategoryName = styled(Text)`
  padding: 0;
  color:${colors.black.strong};
  font-size: ${fontSizes.caption};
  line-height: ${fontSizes.smallBody};
  font-weight: 600;
`;