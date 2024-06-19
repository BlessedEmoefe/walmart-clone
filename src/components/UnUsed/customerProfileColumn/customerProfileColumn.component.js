import React from "react";
import {
  CustomerProfileRowContainer,
  ImageWrapper,
  InfoSection,
  Wrapper,
  Image,
  InfoText,
  UserName,
  IdText,
  CustomerID,
  // ViewNarrationText,
  // TimeStamp,
} from "./customerProfileColumn.styles";
// import { WithdrawArrowIcon, DepositArrowIcon } from "../../assets/svg";
// import { colors } from "../../infrastructure/theme/colors";
import defaultImage from "../../assets/images/blemo.jpg";

export const CustomerProfileRow = ({ profileImage, userName, ID }) => {
  return (
    <CustomerProfileRowContainer paddingVertical="0">
      <ImageWrapper paddingVertical="0">
        <Image src={profileImage} alt="profile picture" />
      </ImageWrapper>
      <InfoSection paddingVertical="0">
        <Wrapper>
          <InfoText>
            <UserName>{userName}</UserName>
            <IdText>
              Customer ID: <CustomerID>{ID}</CustomerID>
            </IdText>
          </InfoText>
        </Wrapper>
      </InfoSection>
    </CustomerProfileRowContainer>
  );
};

CustomerProfileRow.defaultProps = {
  profileImage: defaultImage,
  userName: "Ruddy Cororan",
  ID: "001B01C",
};
