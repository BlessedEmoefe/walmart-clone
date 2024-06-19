import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";

export const CourseContentCardContainer = styled(FlexibleDiv)`
  padding: 0.7rem;
  justify-content: space-between;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.5);
  height: max-content;
  gap: 1rem;
  width: 100%;
  cursor:pointer;

  @media only screen and (max-width: 800px) {
  }
`;

export const CardImage = styled.img`
  padding: 0;
  width: 60px;
  height:60px;
  border-radius: 4px;
  min-width: 60px;
  min-height: 60px;
  object-fit: cover;

  @media only screen and (max-width: 800px) {
  }
`;

export const TopicDetailWrapper = styled(FlexibleDiv)`
  padding: 0;
  flex: 1;
  /* background: blue; */
  /* align-items: flex-start;
  justify-content: flex-start; */
  /* height: 40%; */

  @media only screen and (max-width: 800px) {
  }
`;

export const Topic = styled(Text)`
  padding: 0;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  color: #002069;
  text-align: left;
  @media only screen and (max-width: 800px) {
  }
`;

export const LessonDuration = styled(Text)`
  padding: 0;
  text-align: left;
  font-size: 14px;
  color: #0074da;
  width: 100%;

  @media only screen and (max-width: 800px) {
  }
`;

export const PlayIconWrapper = styled(FlexibleDiv)`
  padding: 0.4rem;
  justify-content: center;
  border-radius: 50%;
  background: #002069;
  width: max-content;
  height: max-content;

  @media only screen and (max-width: 800px) {
  }
`;
