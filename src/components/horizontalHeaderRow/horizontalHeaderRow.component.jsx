import React from "react";
import {
  HorizontalHeaderRowContainer,
  HeadingWrapper,
  Heading,
  SubText,
  Links,
} from "./horizontalHeaderRow.styles";

export const HorizontalHeaderRow = ({
  heading,
  biggerHeading = true,
  subText,
  link = true,
}) => {
  return (
    <HorizontalHeaderRowContainer>
      <HeadingWrapper>
        <Heading biggerHeading={biggerHeading}>
          {heading ? heading : "Trending on social"}
        </Heading>
        {biggerHeading ? (
          <SubText>
            {subText ? subText : "Shopwhat creators are sharing"}
          </SubText>
        ) : null}
      </HeadingWrapper>

      {link && <Links>View all</Links>}
    </HorizontalHeaderRowContainer>
  );
};
