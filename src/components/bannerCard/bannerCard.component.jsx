import React from "react";
import {
  BannerCardContainer,
  LeftSection,
  LogoWrapper,
  Logo,
  BannerInfo,
  BannerText,
  RightSection,
  CountDownSection,
  TimerTitle,
  StartFreeTrialButton,
} from "./bannerCard.styles";
import walmartLogo from "../../assets/images/Blacklogo.png";

import { Button } from "../button/button.component";
import Countdown from "react-countdown";
import { PiLineVerticalThin as VerticalDivider } from "react-icons/pi";

import { colors } from "../../infrastructure/theme/colors";

export const BannerCard = ({ bannerImage }) => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>Time's up!</span>;
    } else {
      // Render a countdown
      return (
        <span style={{ color: "#000", fontSize: "1.3rem",fontWeight:700 }}>
          {hours} : {minutes} : {seconds}
        </span>
      );
    }
  };

  return (
    <BannerCardContainer >
      <LeftSection>
        <LogoWrapper>
          <Logo src={walmartLogo} alt="Logo" />
        </LogoWrapper>
        <BannerInfo>
          <BannerText>
            Get ready for member offers & more during Walmart+ Week
          </BannerText>
        </BannerInfo>
      </LeftSection>
      <RightSection>
        <CountDownSection>
          <TimerTitle>Walmart+ Week starts in</TimerTitle>
          <Countdown
            date={Date.now() + 200000000} // 10 seconds from now
            renderer={renderer}
          />
        </CountDownSection>
        <VerticalDivider size="3rem" color={colors.black.strong} />
        <StartFreeTrialButton>
          <Button
            // fontWeight={fontWeights.semiBold}
            btnText={"Start free trial"}
            // background={colors.purple}
            // size="large"
            onClick={() => {
              // setShowModal(true);
            }}
          />
        </StartFreeTrialButton>
      </RightSection>
    </BannerCardContainer>
  );
};
