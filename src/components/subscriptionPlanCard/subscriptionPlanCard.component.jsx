import React from "react";
import {
  SubscriptionPlanCardContainer,
  CheckMarkWrapper,
  PeriodWrapper,
  Months,
  ValidDays,
  AmountWrapper,
  DiscountAmount,
  NormalAmount,
} from "./subscriptionPlanCard.styles";
import { AiOutlineCheck as CheckIcon } from "react-icons/ai";

export const SubscriptionPlanCard = ({ color,months,validDays,discountAmount,normalAmount,onClick }) => {
  return (
    <SubscriptionPlanCardContainer
      color={color}
      onClick={onClick}
    >
      <CheckMarkWrapper color={color}>
        <CheckIcon color={color ? "#fff" : "#B9B9B9"} size={"14px"} />
      </CheckMarkWrapper>
      <PeriodWrapper>
        <Months>{months ? months : "3 Months"}</Months>
        <ValidDays>{validDays ? validDays : "Valid for 90 days"}</ValidDays>
      </PeriodWrapper>
      <AmountWrapper>
        <DiscountAmount color={color}>
          N {discountAmount ? discountAmount : "20,000.00"}
        </DiscountAmount>
        <NormalAmount>N {normalAmount ? normalAmount : "60,000"}</NormalAmount>
      </AmountWrapper>
    </SubscriptionPlanCardContainer>
  );
};
