import React from "react";
import {
  SubscriptionMethodCardContainer,
  SubscriptionMethodLogoWrapper,
  SubscriptionMethodLogo,
  SubscriptionMethodNameWrapper,
  SubscriptionMethodName,
  SubscriptionMethodButtonWrapper,
  // DiscountAmount,
  // NormalAmount,
} from "./subscriptionMethodCard.styles";
import Card from "../../assets/svg/Card.svg";

import { Button } from "../button/button.component";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const SubscriptionMethodCard = ({
  subscriptionMethodLogo,
  subscriptionMethodName,button=true
}) => {
  return (
    <SubscriptionMethodCardContainer>
      <SubscriptionMethodLogoWrapper>
        <SubscriptionMethodLogo
          src={subscriptionMethodLogo ? subscriptionMethodLogo : Card}
          alt="Subscription Method Logo"
        />
      </SubscriptionMethodLogoWrapper>
      <SubscriptionMethodNameWrapper>
        <SubscriptionMethodName>
          {subscriptionMethodName
            ? subscriptionMethodName
            : "Pay with your Card"}
        </SubscriptionMethodName>
      </SubscriptionMethodNameWrapper>
      <SubscriptionMethodButtonWrapper>
       { button?<Button
          btnText="Get 10% Discount"
          textTransform="capitalize"
          fontSize={fontSizes.caption}
          background={"#E02500"}
          borderRadius={"10px"}
          width={"max-content"}
          paddingHorizontal={"0.5rem"}
          paddingVertical={"0.4rem"}
          // border
          // boxShadow
          // btnColor
          // onClick={handleSelectLearningPlan}
          // size="large"
          // RightIcon={ArrowRightIcon}
        />:null}
      </SubscriptionMethodButtonWrapper>
    </SubscriptionMethodCardContainer>
  );
};
