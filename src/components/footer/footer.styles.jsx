import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../typography/text.component";

export const FooterContainer = styled(FlexibleDiv)`
  background: ${colors.blue.footerBg};
  gap: 1.5rem;
  padding: 1.5rem 2rem;
`;
export const TopSection = styled(FlexibleDiv)`
  padding: 0;
  width: 100%;
  justify-content: center;
  gap: 0.3rem 1.3rem;

  @media (max-width: 1060px) {
    width: 100%;
    justify-content: center;
    margin-right: 0;
    order: 3;
    margin-bottom: 2rem;
  }
`;

export const FooterTextWrapper = styled(FlexibleDiv)`
  padding: 0;
  align-items: flex-start;
  flex-direction: column;
  width: max-content;
  cursor: pointer;

  @media (max-width: 1060px) {
    align-items: center;
  }
`;
export const FooterText = styled(Text)`
  align-self: flex-start;
  @media (max-width: 1060px) {
  }
`;

export const BottomSection = styled(FlexibleDiv)`
  padding: 0;
  justify-content: center;
`;

export const BottomSectionText = styled(Text)`
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
`;
