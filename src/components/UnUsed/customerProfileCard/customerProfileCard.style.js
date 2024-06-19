import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../typography/text.component";
export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({justifyContent})=>justifyContent ? justifyContent : "space-evenly"};
  flex-wrap: wrap;
  @media only screen and (max-width:${({breakpoint})=>breakpoint ? breakpoint : '780px'}){
    margin:${({resmargin})=>resmargin ? resmargin :''};
  }
`;

export const Col = styled.div`
  flex-basis: ${({ flexBasis }) => (flexBasis ? flexBasis : "50%")};
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({justifyContent})=>justifyContent ? justifyContent : "space-evenly"};
  flex-wrap: wrap;
  @media only screen and (max-width:${({breakpoint})=>breakpoint ? breakpoint : ''}){
    flex-basis: ${({ resflexBasis }) => (resflexBasis ? resflexBasis : "")};
    margin:${({resmargin})=>resmargin ? resmargin :''};
    justify-content: ${({resJustifyContent})=>resJustifyContent ? resJustifyContent : "space-evenly"};
    gap: ${({resGap})=>resGap ? resGap : ""};
  }
`;

export const Image = styled.img`
  width: ${({ width }) => (width ? width : "40px")};
  height: ${({ height }) => (height ? height : "40px")};
  border-radius: 50%;
  object-fit: cover;
`;

export const TextCol = styled.div`
  margin: ${({ margin }) => (margin ? margin : "")};
  display: flex;
  width: ${({ width }) => (width ? width : "")};
  flex-direction: column;
  justify-content: space-evenly;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "12px")};
  @media only screen and (max-width:${({breakpoint})=>breakpoint ? breakpoint : '780px'}){
    margin:${({resmargin})=>resmargin ? resmargin :''};
  }
`;

export const Span = styled(Text)`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "9px")};
  color: ${colors.primary};
`;
export const DescriptiveText = styled(Text)`
  display: flex;
  align-items: baseline;
`;



export const CustomerInfo = styled.div`
 flex-basis:50%;
 display: flex;
 align-items:center;
justify-content:flex-start;
@media only screen and (max-width:680px){
  flex-basis:100%;
}
`


export const CustomerSavingsInfo = styled.div`
 flex-basis:50%;
 display: flex;
 align-items:center;
justify-content:space-between;
@media only screen and (max-width:680px){
  margin:30px 0px 0px 0px;
  flex-basis:100%;
  justify-content: space-between;
}
`


export const PhoneCol = styled.div`
 flex:50%;
 display: flex;
 align-items: flex-start;
 @media only screen and (max-width:680px){
  flex: 40%;
 };
 @media only screen and (max-width:400px){
  flex: 100%;
 };
`

export const AddressCol = styled.div`
 flex:50%;
 display: flex;
 align-items: flex-end;
 flex-direction: column;
 margin-top:13px;
 @media only screen and (max-width:680px){
  flex: 60%;
 };
 @media only screen and (max-width:400px){
  flex: 100%;
  align-items:flex-start;
  justify-content: flex-start;
 }
`