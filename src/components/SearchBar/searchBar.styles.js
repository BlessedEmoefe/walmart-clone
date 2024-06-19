import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

export const SearchBarWrapper = styled("div")`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  height: ${({ height, xl }) => (height ? height : xl ? "4rem" : "auto")};
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 2.5rem;
  /* border: 1px solid ${colors.iconColor}; */
  overflow: hidden;
  padding:0.5rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  .svgWrapper {
    width: max-content;
    padding:0.4rem;
    background:${colors.yellow};
    /* height: 90%; */
    border-radius: 1.4rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    border: none;
    color: ${({ color }) => (color ? color : colors.primary)};
    font-size: ${({ xl }) => (xl ? "1.3rem" : `${fontSizes.smallBody}`)};
    width: 100%;
    flex: 1;
    height: 100%;
    padding: 0.5rem;
    padding-left: 0.9rem;
    outline: 0;
    font-family: inherit;

    ::placeholder {
      color: ${colors.black.light};
      font-size: ${({ xl }) => (xl ? "1.3rem" : `${fontSizes.smallBody}`)};
    }
  }
`;

export const SearchInfoContainer = styled(FlexibleDiv)`
  background: rgba(241, 241, 241, 0.8);
  border: ${({ display }) => (display ? "0.8px solid #002069" : 0)};
  backdrop-filter: blur(50px);
  position: absolute;
  z-index: 10;
  top: 5.6rem;
  padding: ${({ display }) => (display ? "4rem" : 0)};
  overflow-y: scroll;
  /* left: 0; */
  right: 10%;
  /* width:max-content; */
  max-width: 70%;
  height: ${({ display }) => (display ? "max-content" : 0)};
  max-height: 60vh;
  transition: 0.5s ease-in;
  border-radius: 15px;
  box-shadow: 0px 3px 32px -4px rgba(241, 241, 241, 0.8);

  /* These below code help to hide the scrollbar on different browsers */
  ::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: -moz-scrollbars-none;
`;

export const SearchInfoContainerAnchor = styled(FlexibleDiv)`
  background: yellow;
  width: 50px;
  height: 50px;

  /* position:absolute; */
`;

export const CardRow = styled(FlexibleDiv)`
  padding: 0;
  /* background: teal; */
  /* margin: ${({ margin }) => (margin ? margin : `1rem`)}; */
  grid-column-gap: 2%;
  grid-row-gap: 1rem;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};

  @media only screen and (max-width: 800px) {
    flex-direction: row;
  }
`;

