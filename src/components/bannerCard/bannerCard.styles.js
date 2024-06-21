import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const BannerCardContainer = styled(FlexibleDiv)`
  background: ${colors.yellow};
  border-radius: 10px;
  background-repeat: round;
  background-size: cover;
  padding: 1rem 5%;
  /* width: 45%; */
  box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.3);
  height: max-content;

  @media screen and (max-width: 800px) {
    width: 100%;
    gap: 1rem;
  }
`;

export const LeftSection = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
  /* background: green; */
  gap: 1rem;
  @media screen and (max-width: 800px) {
    width: 100%;
    /* gap:1rem; */
    /* flex-direction:row; */
  }
`;
export const LogoWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
`;
export const Logo = styled.img`
  padding: 0;
  height: 2rem;
  width: auto;
`;
export const BannerInfo = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
  @media (max-width: 900px) {
    width: 100%;

    /* background: red; */
  }
`;
export const BannerText = styled(Text)`
  padding: 0;
  width: max-content;
  align-self: start;
  font-size: ${fontSizes.smallTitle};
  line-height: ${fontSizes.smallTitle};
  font-weight: 500;
  /* color: ${colors.black.regular}; */
  @media (max-width: 900px) {
    width:100%;
    text-align: center;
    /* word-wrap: wrap; */
  }
`;

export const RightSection = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
  align-items: center;
  /* background: blue; */
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;
export const CountDownSection = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
  flex-direction: column;
  gap:0.3rem;
  align-items: center;
`;
export const TimerTitle = styled(Text)`
  padding: 0;
  width: max-content;
  /* align-self: start; */
  font-size: ${fontSizes.caption};
  line-height: ${fontSizes.caption};
  /* color: ${colors.black.regular}; */
  @media (max-width: 900px) {
  }
`;
export const StartFreeTrialButton = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
`;
