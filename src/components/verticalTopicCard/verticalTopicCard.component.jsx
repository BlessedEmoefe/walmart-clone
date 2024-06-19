import React, { useContext } from "react";
import { PlayButtonIcon } from "../../assets/svg";
import { FaPlay as PlayIcon, FaBell as NotificationIcon } from "react-icons/fa";
import { MdOutlineFavorite as FavouriteIcon } from "react-icons/md";
import TopicImage from "../../assets/images/defaultPic.jpg";
import { useNavigate } from "react-router-dom";
// import MainContext from "../../services/context";

import {
  VerticalTopicCardContainer,
  TopSection,
  CardImage,
  TopicDetailWrapper,
  Topic,
  LessonNumber,
  BottomSection,
  PlayIconWrapper,
  IconWrapper,
} from "./verticalTopicCard.styles";

export const VerticalTopicCard = ({ item, cardImage = TopicImage, closeModal }) => {
  const navigate = useNavigate();
  // const { setSelectedLesson } = useContext(MainContext);
  const handleTopic = () => {
    // setSelectedLesson(item);
    closeModal && closeModal();
    navigate("/takeCourse");
    console.log("Lesson card", item);
  };

  return (
    <VerticalTopicCardContainer onClick={handleTopic}>
      <TopSection>
        <CardImage
          src={cardImage ? cardImage : TopicImage}
          alt={`${cardImage}`}
        />
        <TopicDetailWrapper>
          <Topic>
            {item?.title ? item.title : "Standard Form and Logorithm"}
          </Topic>
          <LessonNumber>
            {/* {item?.num ? `${item.num} Lessons` : "4 Lessons"} */}
          </LessonNumber>
        </TopicDetailWrapper>
      </TopSection>
      <BottomSection>
        <PlayIconWrapper>
          <PlayIcon color={"#fff"} fontSize={"0.7rem"} />
        </PlayIconWrapper>

        <IconWrapper>
          {/* <FavouriteIcon color={"#808080"} fontSize={"15px"} />
          <NotificationIcon color={"#808080"} fontSize={"15px"} /> */}
        </IconWrapper>
      </BottomSection>
    </VerticalTopicCardContainer>
  );
};
