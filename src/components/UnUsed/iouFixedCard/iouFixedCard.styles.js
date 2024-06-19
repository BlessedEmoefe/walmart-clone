import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";
import { Link } from "react-router-dom";

export const IOUFixedCardContainer = styled(FlexibleDiv)`
  // padding: 1.5rem;
  padding: 12px 9px 12px 9px;
  background: ${({ bg }) => (bg ? bg : colors.bg.white)};
  width: ${({ width }) => (width ? width : "48%")};
  min-width: 170px;
  height: auto;
  align-items: flex-start;
  justify-content: space-between;
  border-radius:3px;
  @media only screen and (max-width:960px){
    width:100%;
    margin-bottom:20px
  }
  @media only screen and (max-width: 800px) {
    margin-bottom: 23px;
  }

  @media only screen and (max-width: 670px) {
    padding: 17px;
    flex-direction: row;
  }
  @media only screen and (max-width: 470px) {
    padding: 23px;
  }
  @media only screen and (max-width: 270px) {
  }
`;

export const InfoSection = styled(FlexibleDiv)`
  width: 50%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  @media only screen and (max-width:880px){
    align-items: flex-start;
  }
`;

export const IconSection = styled(FlexibleDiv)`
  width: 50%;
  align-items: flex-start;
  justify-content: flex-end;
  height: auto;
  @media only screen and (max-width:880px){
    align-items:flex-end;
  }
`;

export const Title = styled(Text)`
  color: ${({ color }) => (color ? color : colors.black.strong)};
  font-size: ${fontSizes.body};
  font-weight: ${fontWeights.bold};
  width: 100%;
  @media only screen and (max-width:680px){
    width:auto;
    align-self:flex-start !important;
  }
`;
export const SubTitle = styled(Text)`
  /* color: ${({ color }) => (color ? color : colors.black.strong)}; */
  font-size: ${fontSizes.smallBody};
  width: 100%;
  @media only screen and (max-width:680px){
    width:auto;
    align-self:flex-start !important;
  }
`;

export const ButtonWrapper = styled(Link)`
  width: 100%;
  height: auto;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
  @media only screen and (max-width:960px){
    width:80%;
    margin:auto 0;
  }
`;
