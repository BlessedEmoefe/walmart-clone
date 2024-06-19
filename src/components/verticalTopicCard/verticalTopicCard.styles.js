import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";

export const VerticalTopicCardContainer = styled(FlexibleDiv)`
  padding: 0.7rem;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
  height: max-content;
  gap: 2rem;
  /* height: 350px; */
  width: 23%;
  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 800px) {
  }
`;
export const TopSection = styled(FlexibleDiv)`
  padding: 0;
  gap: 1rem;
  /* background: red; */
  height: 60%;

  @media only screen and (max-width: 800px) {
  }
`;
export const CardImage = styled.img`
  padding: 0;
  width: 30%;
  border-radius: 10px;
  min-width: 60px;
  min-height: 60px;
  height: 100%;
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

export const LessonNumber = styled(Text)`
  padding: 0;
  text-align: left;
  font-size: 14px;
  color: #0074da;
  width: 100%;

  @media only screen and (max-width: 800px) {
  }
`;

export const BottomSection = styled(FlexibleDiv)`
  padding: 0;
  align-items: flex-end;
  /* justify-content: flex-start; */
  /* background:teal; */
  height: 40%;

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

export const IconWrapper = styled(FlexibleDiv)`
  padding: 0;
  gap: 0.5rem;
  /* background:blue; */
  width: 50%;
  justify-content: flex-end;

  @media only screen and (max-width: 800px) {
  }
`;
