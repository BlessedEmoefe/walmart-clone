import styled from "styled-components";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import { colors } from "../../infrastructure/theme/colors";
import DefaultImage from "../../assets/images/defaultPic.jpg";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { Title } from "../typography/text.component";
import { Link } from "react-router-dom";

export const CatalogueCardContainer = styled(FlexibleDiv)`
  padding: 1.5rem 1rem;
  border-radius: 1rem;
  background-repeat: round;
  background-size: cover;
  /* width: ${({ width }) => (width ? width : "20%")}; */
  height: auto;
  width: auto;
  grid-area: ${({ rowStart }) => (rowStart ? rowStart : 1)} /
    ${({ columnStart }) => (columnStart ? columnStart : 1)} /
    ${({ rowEnd }) => (rowEnd ? rowEnd : 3)} /
    ${({ columnEnd }) => (columnEnd ? columnEnd : 3)};
  background-image: url(${({ backgroundImage }) =>
    backgroundImage ? backgroundImage : DefaultImage});
  @media only screen and (max-width: 1000px) {
    grid-area: ${({ resRowStart }) => (resRowStart ? resRowStart : 1)} /
      ${({ resColumnStart }) => (resColumnStart ? resColumnStart : 1)} /
      ${({ resRowEnd }) => (resRowEnd ? resRowEnd : 3)} /
      ${({ resColumnEnd }) => (resColumnEnd ? resColumnEnd : 3)};
    /* width: */
  }
  @media only screen and (max-width: 800px) {
    align-items: flex-start;
  }
  @media only screen and (max-width: 450px) {
    /* width: 100%;
    height: max-content;
    align-items: flex-start;
    grid-area: ${({ smallResRowStart }) =>
      smallResRowStart ? smallResRowStart : 1} /
      ${({ smallResColumnStart }) =>
      smallResColumnStart ? smallResColumnStart : 1} /
      ${({ smallResRowEnd }) => (smallResRowEnd ? smallResRowEnd : 3)} /
      ${({ smallResColumnEnd }) =>
      smallResColumnEnd ? smallResColumnEnd : 3}; */
    /* padding: 1.5rem 1rem; */
  }
`;

export const InfoSection = styled(FlexibleDiv)`
  padding: 0;
  width: 70%;
  height: 100%;
  gap: 1rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  /* background: pink; */
`;
export const TextWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: 100%;
  @media only screen and (max-width: 500px) {
  }
`;

export const TitleText = styled(Title)`
  padding: 0;
  width: max-content;
  word-wrap: wrap;
  font-size: ${({ big }) => (big ? "2.5rem" : "1.5rem")};
  line-height: ${({ big }) => (big ? "3rem" : "2rem")};
  font-weight: 700;
  color: ${colors.text.strong};
  @media (max-width: 1600px) {
    width: 100%;
    font-size: ${({ big }) => (big ? "1.8rem" : "1.5rem")};
    line-height: ${({ big }) => (big ? "2rem" : "1.7rem")};
  }
  @media (max-width: 800px) {
    /* width: 100%; */
    /* font-size: ; */
  }
  @media (max-width: 500px) {
    font-size: ${({ big }) => (big ? "1.3rem" : "1.2rem")};
    line-height: ${({ big }) => (big ? "1.5rem" : "1.3rem")};
  }
`;

export const Links = styled(Link)`
  color: ${colors.text.strong};
  font-size: ${fontSizes.button};
  font-weight: ${fontWeights.medium};
  text-decoration: underline;
  cursor: pointer;
`;

export const Heading = styled(Title)`
  padding: 0;
  width: max-content;
  word-wrap: wrap;
  font-size: ${fontSizes.body};
  line-height: ${fontSizes.body};
  font-weight: 500;
  color: ${colors.white};
  @media (max-width: 900px) {
    width: 100%;
  }
`;
export const BigHeading = styled(Title)`
  padding: 0;
  width: max-content;
  word-wrap: wrap;
  font-size: 3rem;
  line-height: 2.9rem;
  font-weight: 500;
  color: ${colors.white};
  @media (max-width: 900px) {
    width: 100%;
    font-size: 2rem;
    line-height: 2.2rem;
  }
`;

export const ButtonWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
  @media only screen and (max-width: 800px) {
  }
`;
