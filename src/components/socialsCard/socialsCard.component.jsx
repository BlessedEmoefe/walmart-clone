import React, { useContext } from "react";
import { PlayButtonIcon } from "../../assets/svg";

import { FaPlay as PlayIcon } from "react-icons/fa";
import { PiSpeakerSlash as VolumeIcon } from "react-icons/pi";
import { GrClosedCaption as CaptionIcon } from "react-icons/gr";
import Logo from "../../assets/svg/Logo.svg";
import TutorImage from "../../assets/images/defaultPic.jpg";
import { useNavigate } from "react-router-dom";
// import MainContext from "../../services/context";

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

export const SocialsCard = ({ cardImage,username,price,description }) => {
  const navigate = useNavigate();

  // const { setSelectedLesson } = useContext(MainContext);
  const CardVideoHandler = () => {
    // setSelectedLesson(item);
    navigate("/takeCourse");
  };

  return (
    <SocialsCardContainer onClick={CardVideoHandler}>
      <TopSection>
        <CardImage src={Logo} alt={`Recommended Video Card`} />

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
