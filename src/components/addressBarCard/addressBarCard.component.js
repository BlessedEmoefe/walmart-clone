import React from "react";
import {
  AddressBarCardContainer,
  ServiceSection,
  ServicesContainer,
  ImageSection,
  Image,
  TextSection,
  ServiceName,
  AddressSection,
  AddressCard,
  TopSection,
  InfoWrapper,
  Wrapper,
  HeadingText,
  AddressText,
  LeftIconWrapper,
  BottomSection,
} from "./addressBarCard.styles";
import DefaultImage from "../../assets/images/defaultPic.jpg";
import shippingImage from "../../assets/images/shipping.png";
import pickupImage from "../../assets/images/pickup.png";
import deliveryImage from "../../assets/images/delivery.png";
import { Button } from "../button/button.component";

import { FaAngleRight as RightArrow } from "react-icons/fa6";
import { truncate } from "../../infrastructure/lib/factory.lib";
import { MdOutlineLocationOn as LocationIcon } from "react-icons/md";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const AddressBarCard = () => {
  const services = [
    { image: shippingImage, serviceName: "Shipping" },
    { image: pickupImage, serviceName: "Pickup" },
    { image: deliveryImage, serviceName: "Delivery" },
  ];
  const data = [
    { btn: true },
    {
      btn: false,
    },
  ];

  return (
    <AddressBarCardContainer>
      <ServiceSection>
        {services.map(({ image, serviceName }) => (
          <ServicesContainer>
            <ImageSection>
              <Image src={image ? image : DefaultImage} alt={`Service Image`} />
            </ImageSection>

            <TextSection>
              <ServiceName>{serviceName ? serviceName : "Grocery"}</ServiceName>
            </TextSection>
          </ServicesContainer>
        ))}
      </ServiceSection>
      <AddressSection>
        {data.map(({ btn = true }) => (
          <AddressCard>
            <TopSection>
              <LeftIconWrapper>
                <LocationIcon size="1rem" color="#000" />
              </LeftIconWrapper>
              <InfoWrapper btn={btn}>
                <Wrapper>
                  <HeadingText>How do you want your items?</HeadingText>
                </Wrapper>
                <Wrapper>
                  <AddressText>
                    {truncate("Sacramento, CA 957687", 63)}
                  </AddressText>
                </Wrapper>
              </InfoWrapper>
              {btn ? null : <RightArrow size="1.5rem" color="#000" />}
            </TopSection>
            {btn && (
              <BottomSection>
                <Button
                  btnText={"Add address"}
                  btnColor="#fff"
                  background={colors.blue.headerBg}
                  fontWeight={"800"}
                  textTransform={"capitalize"}
                  fontSize={fontSizes.caption}
                  paddingVertical={"0.2rem"}
                />
              </BottomSection>
            )}
          </AddressCard>
        ))}
      </AddressSection>
    </AddressBarCardContainer>
  );
};
