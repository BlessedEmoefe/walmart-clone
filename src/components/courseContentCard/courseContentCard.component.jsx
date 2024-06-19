import React from "react";
import { PlayButtonIcon } from "../../assets/svg";
import { MdOutlineFavorite as FavouriteIcon } from "react-icons/md";
import TopicImage from "../../assets/images/avatar.jpg";
import { PlayIcon } from "../../assets/svg/index";

import {
  CourseContentCardContainer,
  CardImage,
  TopicDetailWrapper,
  Topic,
  LessonDuration,
} from "./courseContentCard.styles";

export const CourseContentCard = ({ cardImage, title, lessonDuration }) => {
  return (
    <CourseContentCardContainer>
      <CardImage
        src={cardImage ? cardImage : TopicImage}
        alt={`${cardImage}`}
      />
      <TopicDetailWrapper>
        <Topic>{title ? title : "Standard Form and Logorithm"}</Topic>
        <LessonDuration>
          {lessonDuration ? `${lessonDuration} Minutes` : "4 Lessons"}
        </LessonDuration>
      </TopicDetailWrapper>

      <PlayIcon color={"#002069"} width={"2rem"} height={"2rem"} />
    </CourseContentCardContainer>
  );
};
