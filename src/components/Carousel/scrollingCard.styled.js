import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";

export const ScrollingContainer = styled("div")`
  background: ${(props) => props.scrollOuterBg || "white"};
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  &:hover .scrollMoreMain_right,
  &:hover .scrollMoreMain_left {
    visibility: visible;
  }

  @media (max-width: 800px) {
    font-size: 1rem;
    & .iconsWrapper {
      background: red;
      display:none;
    }
  }

  .main {
    width: ${(props) => props.scrollInnerWidth || "100%"};
    margin: 0 auto;
    overflow: hidden;
  }

  .cardsContainer {
    display: flex;
    justify-content: flex-start;
    overflow-x: scroll;
    align-items: stretch;
    scroll-behavior: smooth;
    scrollbar-width: none;
    padding: ${(props) => props.scrollInnerPad || "20px 0"};
    scroll-snap-type: x mandatory;
    gap: 1rem;
    width: 100%;

    @media (max-width: 800px) {
      font-size: 1rem;
    }

    &::-webkit-scrollbar {
      display: none;
      height: 0;
      width: 0;
    }
  }

  .scrollMoreMain_right {
    background: ${({ RightIconActive }) => (true ? "##fff" : "red")};
    border-radius: 50%;
    border: 1px solid #000;
    /* margin-left: 1rem; */
    position: absolute;
    z-index: 100;
    right: -1.3rem;
    top: 85px;
    padding: 0.8rem;
    cursor: pointer;
    @media (max-width: 800px) {
      height: 40px;
      width: 40px;
    }
    @media (max-width: 500px) {
      right: -1.3rem;
    }
    & svg {
      font-size: 1.5rem;
      color: ${colors.black.strong};
      @media (max-width: 800px) {
        font-size: 1rem;
      }
    }
  }
  .scrollMoreMain_left {
    background: ${(LeftIconActive) => (true ? "##fff" : "#fff")};
    /* background: #0AF; */
    /* margin-right: 1rem; */
    position: absolute;
    z-index: 100;
    left: -1.3rem;
    top: 85px;
    border: 1px solid #000;
    border-radius: 50%;
    padding: 0.8rem;
    cursor: pointer;
    @media (max-width: 800px) {
      height: 40px;
      width: 40px;
    }
    & svg {
      font-size: 1.5rem;
      color: ${colors.black.strong};
      @media (max-width: 800px) {
        font-size: 1rem;
      }
    }
  }
`;
