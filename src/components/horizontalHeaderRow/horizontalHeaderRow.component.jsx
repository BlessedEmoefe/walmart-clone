import React, { useState, useContext } from "react";
import { Button } from "../button/button.component";
import {
  HorizontalHeaderRowContainer,
  HeadingWrapper,
  Heading,
  SubText,
  Links,
  LinkWrapper,
  Wrapper,
} from "./horizontalHeaderRow.styles";
import { FaArrowCircleLeft as BackArrow } from "react-icons/fa";
import { PageLoader, Loader } from "../loaders/loaders.component";
import { useNavigate } from "react-router-dom";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";

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
