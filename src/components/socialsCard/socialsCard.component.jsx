import React from "react";
import { FaPlay as PlayIcon } from "react-icons/fa";
import { PiSpeakerSlash as VolumeIcon } from "react-icons/pi";
import { GrClosedCaption as CaptionIcon } from "react-icons/gr";
import TutorImage from "../../assets/images/defaultPic.jpg";
import { useNavigate } from "react-router-dom";

import {
  SocialsCardContainer,
  TopSection,
  InfoSection,
  IconSection,
  IconWrapper,
  UsernameWrapper,
  Username,
  BottomSection,
  CardImage,
  DetailWrapper,
  Price,
  Description,
} from "./socialsCard.styles";
import { colors } from "../../infrastructure/theme/colors";
import { VideoPlayer } from "../VideoPlayer/videoPlayer.section";

export const SocialsCard = ({ cardImage,username,price,description }) => {
  const navigate = useNavigate();

  const CardVideoHandler = () => {
    navigate("/takeCourse");
  };

  return (
    <SocialsCardContainer onClick={CardVideoHandler}>
      <TopSection>
        <VideoPlayer/>

        <InfoSection>
          <UsernameWrapper>
            <Username>{username ? username : "@blessedonoriode"}</Username>
          </UsernameWrapper>

          <IconSection>
            <IconWrapper>
              <PlayIcon color={colors.black.regular} size={"0.8rem"} />
            </IconWrapper>
            <IconWrapper>
              <VolumeIcon color={colors.black.regular} size={"0.9rem"} />
            </IconWrapper>
            <IconWrapper>
              <CaptionIcon color={colors.black.regular} size={"0.9rem"} />
            </IconWrapper>
          </IconSection>
        </InfoSection>
      </TopSection>
      <BottomSection>
        <CardImage
          src={cardImage ? cardImage : TutorImage}
          alt={`${cardImage}`}
        />
        <DetailWrapper>
          <Price>{price ? price : "$76.00"}</Price>
          <Description>
            {description
              ? description
              : "Beautiful 6 Qt Air Fryer with TurboCrisp Technology and Touch"}
          </Description>
        </DetailWrapper>
      </BottomSection>
    </SocialsCardContainer>
  );
};
