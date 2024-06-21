import React from "react";
import { colors } from "../../infrastructure/theme/colors";

import {
  FooterContainer,
  TopSection,
  FooterTextWrapper,
  FooterText,
  BottomSection,
  BottomSectionText,
} from "./footer.styles";

import { generateID } from "../../infrastructure/lib/generateID";
import { footerLinks } from "../../pages/Home/data";

const Footer = () => {
  return (
    <FooterContainer
      boxedLayout
      background={colors.black}
      paddingVertical="3rem"
    >
      <TopSection alignItems="flex-start" paddingVertical="0">
        {footerLinks.map(({ linkName, path }) => (
          <FooterTextWrapper key={generateID(15)}>
            <FooterText
              key={generateID(15)}
              color="#fff"
              fontSize="0.9rem"
              resfontSize="1.1rem"
            >
              {linkName}
            </FooterText>
          </FooterTextWrapper>
        ))}
      </TopSection>

      <BottomSection justifyContent="center" paddingVertical="0">
        <BottomSectionText>
          ©2024 Walmart. All Rights Reserved.
        </BottomSectionText>
      </BottomSection>
    </FooterContainer>
  );
};

export default Footer;
