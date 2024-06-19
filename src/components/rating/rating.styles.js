import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text, Title } from "../typography/text.component";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const RatingsContainer = styled(FlexibleDiv)`
  position: absolute;
  width: 100%;
  display:${({ showRating }) => (showRating ? "flex" : "none")};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  justify-content: center;
  padding: 2%;
  z-index: 2;
  background: rgba(0, 0, 0, 0.8);
  gap:2rem;
  /* opacity: 0; */
  /* background: red; */
  transition: 0.4s ease-in;
  :hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.8);
    opacity: 1;
  }
`;

export const RatingTitle = styled(Text)`
  color: white;
  font-size: ${fontSizes.title};
  line-height: ${fontSizes.title};
  margin: 0;
  text-align: center;
  font-weight: 600;
  /* background: indigo; */
`;