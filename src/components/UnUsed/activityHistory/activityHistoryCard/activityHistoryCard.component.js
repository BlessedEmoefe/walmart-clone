import React, { useState } from "react";
import {
  ActivityHistoryCardContainer,
  ImageWrapper,
  InfoSection,
  Wrapper,
  Image,
  InfoText,
  UserName,
  ViewNarrationText,
  TimeStamp,
} from "./activityHistoryCard.styles";
import { WithdrawArrowIcon, DepositArrowIcon } from "../../../assets/svg";
import { colors } from "../../../infrastructure/theme/colors";
import ActivityHistoryToolTip from "./activityHistoryToolTip.component";
import { useNavigate } from "react-router-dom";
import { LeftSection, RightSection } from "../activityHistory.styles";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";

export const ActivityHistoryCard = ({
  profileImage,
  userName,
  amount,
  deposite,
  withdraw,
  timestamp,
  index,
}) => {
  const [displayToolTip, setDisplayToolTip] = useState(false);

  return (
    <>
      <div style={{ width: "100%", position: "relative" }}>
        <ActivityHistoryCardContainer
          paddingVertical="0"
          containerheight={"auto"}
        >
          <FlexibleDiv alignItems={"flex-start"} resFlexDirection={"row"}>
            <LeftSection>
              <ImageWrapper paddingVertical="0" imageWrapperWidth={"30%"}>
                <Image src={profileImage} alt="profile picture" />
              </ImageWrapper>
              <InfoSection paddingVertical="0" InfoSectionWidth={"70%"}>
                <Wrapper>
                  <InfoText>
                    <UserName>{userName}</UserName>
                    {deposite
                      ? ` deposited`
                      : withdraw
                      ? "withdrew"
                      : "None"}{" "}
                    rate of {amount}NGA savings line
                  </InfoText>
                </Wrapper>
                <Wrapper>
                  <ViewNarrationText onClick={() => setDisplayToolTip(true)}>
                    View Narration
                  </ViewNarrationText>
                </Wrapper>
              </InfoSection>
            </LeftSection>

            <RightSection>
              <Wrapper paddingVertical="0" width="30%" justifyContent="center">
                {withdraw ? (
                  <WithdrawArrowIcon color={colors.red} />
                ) : deposite ? (
                  <DepositArrowIcon color={colors.green} />
                ) : (
                  <DepositArrowIcon color={colors.green} />
                )}
              </Wrapper>
              <Wrapper
                paddingVertical="0"
                width="16%"
                justifyContent="flex-end"
              >
                <TimeStamp>{timestamp}</TimeStamp>
              </Wrapper>
            </RightSection>
          </FlexibleDiv>
        </ActivityHistoryCardContainer>

        <ActivityHistoryToolTip
          show={displayToolTip}
          setDisplayToolTip={setDisplayToolTip}
        />
      </div>
    </>
  );
};

export const ActivityHistoryPageCard = ({
  profileImage,
  userName,
  amount,
  deposite,
  withdraw,
  timestamp,
  index,
  transaction,
  notification,
}) => {
  const navigate = useNavigate();
  const [displayToolTip, setDisplayToolTip] = useState(false);
  const ProfileRouteHandler = (e) => {
    e.stopPropagation();
    navigate("/profile");
  };

  const RouteHandler = (e, route) => {
    e.stopPropagation();

    if (route) {
      navigate(route);
    } else {
      alert("Function takes you to the specified route");
      return;
    }
  };
  return (
    <>
      <div style={{ width: "100%", position: "relative" }}>
        <ActivityHistoryCardContainer
          paddingVertical="0"
          containerAlign={"flex-start"}
          containerPadding={"1rem 0.6rem"}
          containerheight={"auto"}
          bradius={"5px"}
          boxShadow={" 0px 10px 15px -3px rgba(0, 0, 0, 0.05)"}
        >
          <ImageWrapper
            onClick={(e) => ProfileRouteHandler(e)}
            paddingVertical="0"
            imageWrapperWidth="auto"
            // imageWrapperAlign={"flex-start"}
            imageWrapperMargin={"3vw"}
            // background={"red"}
          >
            <Image
              src={profileImage}
              alt="profile picture"
              // imageSize={"60px"}
            />
          </ImageWrapper>
          <InfoSection
            paddingVertical="0"
            onClick={(e) => {
              RouteHandler(e);
            }}
          >
            {transaction ? (
              <Wrapper>
                <InfoText>
                  <UserName>{userName}</UserName>
                  {deposite
                    ? ` deposited`
                    : withdraw
                    ? "withdrew"
                    : "None"}{" "}
                  rate of {amount}NGA savings line
                </InfoText>
              </Wrapper>
            ) : null}

            {notification ? (
              <Wrapper>
                <InfoText>{notification}</InfoText>
              </Wrapper>
            ) : null}
          </InfoSection>
          <Wrapper paddingVertical="0" width="40%" justifyContent="center">
            <ViewNarrationText onClick={() => setDisplayToolTip(true)}>
              View Narration
            </ViewNarrationText>
          </Wrapper>
          <Wrapper
            paddingVertical="0"
            width="10%"
            justifyContent="flex-end"
            onClick={(e) => {
              RouteHandler(e);
            }}
          >
            <TimeStamp>{timestamp}</TimeStamp>
          </Wrapper>
        </ActivityHistoryCardContainer>

        <ActivityHistoryToolTip
          show={displayToolTip}
          setDisplayToolTip={setDisplayToolTip}
        />
      </div>
    </>
  );
};

// show={displayToolTip} setDisplay={setDisplayToolTip}
