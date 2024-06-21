import React from "react";
import {
  CatalogueCardContainer,
  InfoSection,
  TextWrapper,
  TitleText,
  Heading,
  BigHeading,
  Links,
} from "./CatalogueCard.styles";
import DefaultImage from "../../assets/images/img1.jpg";
import { Button } from "../button/button.component";

export const CatalogueCard = ({
  image,
  width,
  big,
  link,
  title,
  heading,
  bigHeading,
  buttonText,
  rowStart,
  rowEnd,
  columnStart,
  columnEnd,
  resRowStart,
resColumnStart,
resRowEnd,
resColumnEnd,
smallResRowStart,
smallResColumnStart,
smallResRowEnd,
smallResColumnEnd
}) => {
  return (
    <CatalogueCardContainer
      image={image}
      backgroundImage={image ? image : DefaultImage}
      width={width}
      rowStart={rowStart}
      rowEnd={rowEnd}
      columnStart={columnStart}
      columnEnd={columnEnd}
      resRowStart={resRowStart}
      resColumnStart={resColumnStart}
      resRowEnd={resRowEnd}
      resColumnEnd={resColumnEnd}
      smallResRowStart={smallResRowStart}
      smallResColumnStart={smallResColumnStart}
      smallResRowEnd={smallResRowEnd}
      smallResColumnEnd={smallResColumnEnd}
    >
      {buttonText ? (
        <InfoSection buttonText={buttonText}>
          {heading && (
            <TextWrapper>
              <Heading>{heading}</Heading>
            </TextWrapper>
          )}
          {bigHeading && (
            <TextWrapper>
              <BigHeading>{bigHeading}</BigHeading>
            </TextWrapper>
          )}
          {/* <ButtonWrapper></ButtonWrapper> */}
          <Button
            border={"none"}
            width="max-content"
            paddingHorizontal={big ? "1rem" : "0.3rem"}
            paddingVertical={big ? "0.3rem" : "0.1rem"}
            fontSize={big ? "1rem" : "0.7rem"}
            btnText={buttonText ? buttonText : "Shop now"}
          />
        </InfoSection>
      ) : (
        <InfoSection>
          <TextWrapper>
            <TitleText big={big}>{title}</TitleText>
          </TextWrapper>

          <Links>{link}</Links>
        </InfoSection>
      )}
    </CatalogueCardContainer>
  );
};
