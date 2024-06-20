import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const SocialsCardContainer = styled(FlexibleDiv)`
  padding: 0;
  /* background: blue; */
  height: max-content;
  overflow: hidden;
  border-radius: 0.4rem;
  border: 1px solid ${colors.iconColor};
  min-width: 320px;
  flex-direction: column;
  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 800px) {
  }
`;
export const TopSection = styled(FlexibleDiv)`
  padding: 0;
  /* gap: 2rem; */
  background: linear-gradient(40deg, #ff9922, #9733ee);
  position: relative;
  justify-content: center;
  overflow: hidden;
  height: 72.5vh;

  @media only screen and (max-width: 800px) {
  }
`;

export const InfoSection = styled(FlexibleDiv)`
  padding: 1rem;
  justify-content: space-between;
  /* background: green; */
  position: absolute;
  bottom: 0px;

  height: max-content;

  @media only screen and (max-width: 800px) {
  }
`;

export const UsernameWrapper = styled(FlexibleDiv)`
  padding: 0;
  /* background: teal; */

  height: max-content;
  width: max-content;

  @media only screen and (max-width: 800px) {
  }
`;
export const Username = styled(Text)`
  padding: 0;
  width: max-content;
  align-self: start;
  font-size: ${fontSizes.caption};
  line-height: ${fontSizes.button};
  font-weight: 600;
  color: ${colors.white};
  @media (max-width: 900px) {
  }
`;

export const IconSection = styled(FlexibleDiv)`
  padding: 0;
  gap: 0.5rem;
  justify-content: space-between;
  /* background: indigo; */
  height: max-content;
  width: max-content;

  @media only screen and (max-width: 800px) {
  }
`;
export const IconWrapper = styled(FlexibleDiv)`
  padding: 0.6rem;
  border-radius: 1.5rem;
  background: ${colors.iconColor};
  height: max-content;
  width: max-content;

  @media only screen and (max-width: 800px) {
  }
`;

export const BottomSection = styled(FlexibleDiv)`
  padding: 1rem;
  align-items: flex-start;
  justify-content: flex-start;
  height: max-content;
  overflow: hidden;
  gap: 1rem;
  width: 100%;
  cursor: pointer;

  @media only screen and (max-width: 800px) {
  }
`;

export const CardImage = styled.img`
  padding: 0;
  width: 60px;
  height: 60px;
  border-radius: 4px;
  min-width: 60px;
  min-height: 60px;
  object-fit: cover;

  @media only screen and (max-width: 800px) {
  }
`;

export const DetailWrapper = styled(FlexibleDiv)`
  padding: 0;
  flex: 1;
  /* background: blue; */
  gap: 0.3rem;
  /* align-items: flex-start;
  justify-content: flex-start; */
  /* height: 40%; */

  @media only screen and (max-width: 800px) {
  }
`;

export const Price = styled(Text)`
  padding: 0;
  width: max-content;
  align-self: start;
  font-size: ${fontSizes.body};
  line-height: ${fontSizes.smallTitle};
  font-weight: 700;
  color: ${colors.black.strong};
  @media (max-width: 900px) {
  }
`;

export const Description = styled(Text)`
  padding: 0;
  width: 100%;
  align-self: start;
  font-size: ${fontSizes.caption};
  line-height: ${fontSizes.button};
  word-wrap: wrap;
  font-weight: 500;
  color: ${colors.black.regular};
  @media (max-width: 900px) {
  }
`;
