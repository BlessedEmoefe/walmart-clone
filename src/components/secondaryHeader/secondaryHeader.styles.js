import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
// import { fontSizes } from "../../infrastructure/theme/fonts";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${({ position }) =>
    position ? `${colors.bg.primary}` : `${colors.white}`};

  position: fixed;
  padding: 1rem 0;
  top: ${({ hideHeader }) => (hideHeader ? "-12rem" : "0")};
  transition: top 0.5s ease-in-out;
  overflow: none;
  z-index: 1;
  box-shadow: ${({ position }) =>
    position ? ` 0px 11px 14px -13px rgba(0, 0, 0, 0.4)` : `0`};

  .innerWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6%;
  }
  @media (max-width: 1100px) {
    top: ${({ hideHeader }) => (hideHeader ? "-4.5rem" : "0")};
    transition: top 0.4s ease-in-out;
    .innerWrapper {
      padding: 0 3%;
    }
  }
  @media (max-width: 800px) {
    .innerWrapper {
      position: relative;
    }
  }
`;
