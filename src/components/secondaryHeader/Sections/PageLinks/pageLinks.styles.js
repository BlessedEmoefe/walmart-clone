import styled from "styled-components";
import { colors } from "../../../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../../../infrastructure/theme/fonts";

export const Wrapper = styled.div`
  min-width: 620px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    font-size: ${fontSizes.body};
    font-weight: ${fontWeights.medium};
    text-decoration: none;
    color: ${colors.text.medium};
    text-transform: capitalize;
    cursor: pointer;
  }
  .active {
    font-weight: ${fontWeights.bold};
    color: ${colors.primary};
  }

  @media (max-width: 1400px) {
    width: 100%;
    min-width: auto;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    a {
      font-size: 14px;
      text-decoration: none;
      text-transform: uppercase;
      width: 100%;
      text-align: left;
      padding: 1rem;
    }
  }
`;
