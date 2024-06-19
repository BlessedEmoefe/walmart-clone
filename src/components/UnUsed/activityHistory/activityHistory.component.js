import React from "react";

import {
  ActivityHistoryContainer,
  HeaderSection,
  BodySection,
  Wrapper,
  Title,
  SeeAllText,
} from "./activityHistory.styles";
import { ActivityHistoryIcon } from "../../assets/svg";
import { colors } from "../../infrastructure/theme/colors";
import { ActivityHistoryCard } from "./activityHistoryCard/activityHistoryCard.component";
import { Spacer } from "../spacer/spacer.component";

import Image1 from "../../assets/images/image.png";

export const ActivityHistorySection = ({ flexBasis, activitiesPage }) => {
  const ActivityHistoryCardData = [
    {
      profileImage: Image1,
      userName: "Joe Gardner",
      amount: 200,
      deposite: true,
      timestamp: "10:00",
    },
    {
      profileImage: Image1,
      userName: "Joe Gardner",
      amount: 200,
      withdraw: true,
      timestamp: "10:00",
    },
    {
      profileImage: Image1,
      userName: "Joe Gardner",
      amount: 200,
      withdraw: true,
      timestamp: "10:00",
    },
    {
      profileImage: Image1,
      userName: "Joe Gardner",
      amount: 200,
      deposite: true,
      timestamp: "10:00",
    },
    {
      profileImage: Image1,
      userName: "Joe Gardner",
      amount: 200,
      deposite: true,
      timestamp: "10:00",
    },
    {
      profileImage: Image1,
      userName: "Joe Gardner",
      amount: 200,
      deposite: true,
      timestamp: "10:00",
    },
  ];

  return (
    <ActivityHistoryContainer flexBasis={flexBasis}>
      <HeaderSection paddingVertical="0">
        <Wrapper>
          <ActivityHistoryIcon color={colors.primary} />
          <Title>Activity History</Title>
        </Wrapper>
        <Wrapper resalignItems={"flex-end"}>
          <SeeAllText to={activitiesPage ? activitiesPage : "/activities"}>
            See All
          </SeeAllText>
        </Wrapper>
      </HeaderSection>
      <BodySection>
        {ActivityHistoryCardData.map(
          (
            { profileImage, userName, amount, deposite, withdraw, timestamp },
            index
          ) => (
            <React.Fragment key={index}>
              <Spacer size="small" />
              <ActivityHistoryCard
                userName={userName}
                index={index}
                amount={amount}
                profileImage={profileImage}
                deposite={deposite}
                withdraw={withdraw}
                timestamp={timestamp}
              />
            </React.Fragment>
          )
        )}
      </BodySection>
    </ActivityHistoryContainer>
  );
};
