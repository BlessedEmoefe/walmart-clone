import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";

export const DefaultCardstyle = styled.div`
  padding: ${({ padding }) => (padding ? padding : "13px")};
  text-align: start;
  background: ${({ bg }) => (bg ? bg : colors.bg.white)};
  border-radius: ${({ radius }) => (radius ? radius : "5px")};
  display:${({ display }) => (display ? display : "flex")};
  flex-direction: column;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: space-evenly;
  flex-basis: ${({ flexBasis }) => (flexBasis ? flexBasis : "50%")};
  width: ${({ width }) => (width ? width : "270px")};
  box-shadow: ${({ boxShadow }) =>
    boxShadow ? boxShadow : "0px 13px 22px #3c403c"};
  position:${({ position }) => (position ? position : "relative")};
  top:${({ top }) => (top ? top : "")};
  left:${({ left }) => (left ? left : "")};
  right:${({ right }) => (right ? right : "")};
  z-index:${({ zIndex }) => (zIndex ? zIndex : "")};

opacity: ${({opacity})=>opacity ? opacity :'1'};
transition:  opacity 0.4s ease-in;
  h1 {
    align-self: start;
  }
  label {
    color: ${colors.black.light};
    position: ${({ position }) => (position ? position : "absolute")};
    top: ${({ top }) => (top ? top : "-4%")};
    left: ${({ left }) => (left ? left : "8%")};
    background: ${({ bg }) => (bg ? bg : "white")};
    font-size: 9px;
    box-shadow: ${({ shadow }) => (shadow ? shadow : "0px 2px 10px white")};
    z-index: ${({ zIndex }) => (zIndex ? zIndex : "1")};
    
  }

  input {
    padding: ${({ padding }) => (padding ? padding : "10.5px")};
    font-weight: 600;
    cursor:pointer;
  }
  

  






input[type="range"]{
  -webkit-appearance:none;
  width:100%;
  height:20px;
  background:linear-gradient(90deg, ${colors.black.light} 60%, ${
  colors.black.light
} 60%);
  outline:none;

  -webkit-transition:0.7s;

  border-radius:5px;
  border:none;
  position: relative;
  overflow: hidden;
  margin-top:23px;
}


input[type="range"]::-webkit-slider-thumb{
  -webkit-appearance:none;
  width:20px;
  height:20px;
  background:${colors.primary};
  border-bottom-right-radius: 50%;
  outline:none;
  box-shadow: -100vw 0 0 100vw ${colors.primary};;
  
}
input[type="range"]::-ms-thumb { 
  background: #fff;
  border: 2px solid #999;
  height: 40px;
  width: 20px;
  box-sizing: border-box;
}

input[type="range"]::moz-range-thumb{
  width:30px;
  height:20px;
border-radius:5px;
cursor:pointer;
}










  button {
    padding: 2px;
    margin-top: 14px;
    width: 60%;
    margin-bottom:12px;
  }
  @media only screen and (max-width:${({ breakPoint }) =>breakPoint ? breakPoint : ""}){
    flex-basis:${({ breakPointflexBasis }) =>
      breakPointflexBasis ? breakPointflexBasis : ""};
    margin:${({ resMargin }) => (resMargin ? resMargin : "")};
  }
  @media only screen and (max-width: 670px) {
    width: ${({ resWidth }) => (resWidth ? resWidth : "200px")};
    flex-basis:${({ resFlexBasis }) => (resFlexBasis ? resFlexBasis : "70%")};
  }

  @media only screen and (max-width: 350px) {
    margin:${({ smallScreenMargin }) =>
      smallScreenMargin ? smallScreenMargin : ""};
    width: 90%;

    @media only screen and (max-width: 300px) {
      h1 {
        font-size: 12px;
      }

      label {
        font-size: 7px;
      }
      input {
        padding: 0.3rem;
      }

      button {
        width: 100%;
        padding: 0.1rem;
      }
    }
  }
`;
