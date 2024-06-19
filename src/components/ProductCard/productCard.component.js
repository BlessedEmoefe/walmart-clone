import React from "react";
import {
  Container,
  ImageSection,
  ProductImage,
  LoveIconWrapper,
  Wrapper,
  PriceSection,
  PriceWrapper,
  NormalPrice,
  Discount,
  PriceInfoWrapper,
  PriceInfoText,
  InfoSection,
  ProductInfoText,
  ContainerWrapper,
} from "./productCard.styles";

import { GoHeart as LoveIcon } from "react-icons/go";
import Avatar from "../../assets/images/avatar.jpg";
import { truncate } from "../../infrastructure/lib/factory.lib";
import { Button } from "../button/button.component";

export const ProductCard = ({
  image,
  normalPrice,
  discount,
  priceInfo,
  productInfo,
  buttonText,
  color,
}) => {
  return (
    <Container>
      <ContainerWrapper>
        <ImageSection>
          <LoveIconWrapper>
            <LoveIcon
              size={"1.2rem"}
              color={"#000"}
              // onClick={() => {
              //   favouriteOnPress ? favouriteOnPress() : null;
              // }}
            />
          </LoveIconWrapper>
          <ProductImage src={image ? image : Avatar} alt="product Image" />
        </ImageSection>

        <Wrapper>
          <PriceSection>
            <PriceWrapper>
              <NormalPrice color={color}>
                {normalPrice ? normalPrice : "Now $249.99"}
              </NormalPrice>
              {discount && (
                <Discount>{discount ? discount : "$399.99"}</Discount>
              )}
            </PriceWrapper>
            {priceInfo && (
              <PriceInfoWrapper>
                <PriceInfoText>
                  {priceInfo ? priceInfo : "More options from $334.00"}
                </PriceInfoText>
              </PriceInfoWrapper>
            )}
          </PriceSection>

          <InfoSection>
            <ProductInfoText>
              {truncate(
                productInfo
                  ? productInfo
                  : "2022 Apple 10.9-inch iPad Wi-fi 256GB - Yellow (10t",
                45
              )}
            </ProductInfoText>
          </InfoSection>

          <Button
            // border={"none"}
            width="max-content"
            paddingHorizontal={"0.3rem"}
            paddingVertical={"0.1rem"}
            fontSize={"0.8rem"}
            btnText={buttonText ? buttonText : "Options"}
          />
        </Wrapper>
      </ContainerWrapper>
    </Container>
  );
};
