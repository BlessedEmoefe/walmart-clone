import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";
import { Link } from "react-router-dom";

export const ActivityHistoryContainer = styled(FlexibleDiv)`
  flex-direction: column;
  width: auto;
  flex-basis: ${({ flexBasis }) => (flexBasis ? flexBasis : "48%")};
  padding: 1.5rem;
  background: ${({ bg }) => (bg ? bg : colors.bg.white)};
  // width: 300px;
  height: auto;
  @media only screen and (max-width: 1164px) {
    width: 100%;
    flex-basis: 100%;
    margin-top:30px;
  }
`;
export const HeaderSection = styled(FlexibleDiv)`
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  @media only screen and (max-width: 800px) {
    width: 93%;
    flex-direction: row;
    /* align-items: flex-end; */
  }
`;

export const BodySection = styled(FlexibleDiv)`
  padding: 0;
`;
export const Wrapper = styled(FlexibleDiv)`
  width: auto;
  padding: 0;
  display: flex;
  @media only screen and (max-width: 800px) {
    flex-direction: row;
    /* align-items: flex-end; */
  }
`;

export const Title = styled(Text)`
  color: ${({ color }) => (color ? color : colors.black.strong)};
  font-size: ${fontSizes.body};
  font-weight: ${fontWeights.bold};
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : "1rem")};
`;
export const SeeAllText = styled(Link)`
  color: ${({ color }) => (color ? color : colors.primary)};
  font-size: ${fontSizes.body};
  text-decoration: none;
  cursor: pointer;
`;


export const LeftSection = styled.section`
width:60%;
display: flex;
flex-wrap: wrap;
align-items: baseline;
@media only screen and (max-width:680px){
  flex-direction: column;
}
`

export const RightSection = styled.section`
width:40%;
display: flex;
justify-content: flex-end;
@media only screen and (max-width:680px){
  align-items: center;
}
`