import styled from "styled-components";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Title } from "../typography/text.component";
import { Link } from "react-router-dom";
import { colors } from "../../infrastructure/theme/colors";

export const HorizontalHeaderRowContainer = styled(FlexibleDiv)`
  /* background: teal; */
  padding: 0;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    flex-direction: row;
  }
`;

export const HeadingWrapper = styled(FlexibleDiv)`
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: max-content;
  gap:0.5rem;
  cursor: pointer;

  @media only screen and (max-width: 800px) {
  }
`;

export const Heading = styled(Title)`
  /* background: red; */
  font-size: ${({ biggerHeading }) =>
    biggerHeading ? fontSizes.title : fontSizes.smallTitle};
  line-height: ${fontSizes.title};
  color: ${colors.black.strong};
  font-weight: 800;
  width: max-content;

  @media only screen and (max-width: 800px) {
  }
`;

export const SubText = styled(Title)`
  /* background: red; */
  font-size: ${fontSizes.caption};
  line-height: ${fontSizes.caption};
  color: ${colors.black.soft};
  width: max-content;

  @media only screen and (max-width: 800px) {
  }
`;

export const Wrapper = styled(FlexibleDiv)`
  /* background: blue; */
  padding: 0;
  width: max-content;
  flex-direction: column;
  gap: 0.1rem;
  /* cursor: pointer; */

  @media only screen and (max-width: 800px) {
  }
`;

export const PageText = styled(Title)`
  /* background: red; */
  font-size: ${fontSizes.smallBody};
  line-height: 25px;
  width: max-content;

  color: ${({ active }) => (active ? "#002069" : "#0179C7")};
  /* font-size: 16px; */
  text-transform: capitalize;
  font-weight: ${({ active }) => (active ? "600" : "400")};

  @media only screen and (max-width: 800px) {
  }
`;

export const Links = styled(Link)`
  color: ${colors.text.strong};
  font-size: ${fontSizes.button};
  font-weight: ${fontWeights.medium};
  text-decoration: underline;
  cursor: pointer;
`;
