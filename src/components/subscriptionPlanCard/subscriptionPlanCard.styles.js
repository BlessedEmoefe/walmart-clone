import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text, Title } from "../typography/text.component";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const SubscriptionPlanCardContainer = styled(FlexibleDiv)`
  border: 1px solid ${({ color }) => (color ? color : "transparent")};
  padding: 1rem;
  border-radius: 20px;
  background: #fff;
  gap: 1rem;
  cursor:pointer;
  @media only screen and (max-width: 800px) {
  }
`;
export const CheckMarkWrapper = styled(FlexibleDiv)`
  width: max-content;
  height:max-content;
  padding:0.2rem;
  background: ${({ color }) => (color ? color : "#B9B9B9")};
  border-radius:50%;

  @media only screen and (max-width: 800px) {
  }
`;
export const PeriodWrapper = styled(FlexibleDiv)`
  flex-direction: column;
  align-items:flex-start;
  /* background: red; */
  padding: 0;
  width:max-content;
  @media only screen and (max-width: 800px) {
  }
`;
export const Months = styled(Text)`
  font-size: ${fontSizes.body};
  color: #002069;
  width: max-content;
  font-weight: 500;
  align-self: flex-start;
  @media only screen and (max-width: 800px) {
  }
`;
export const ValidDays = styled(Text)`
  font-size: ${fontSizes.button};
  color: #808080;
  width: max-content;
  align-self: flex-start;
  font-weight: 400;
  @media only screen and (max-width: 800px) {
  }
`;
export const AmountWrapper = styled(FlexibleDiv)`
  flex-direction: column;
  /* background: blue; */
  padding: 0;
  align-items: flex-end;
  width: max-content;
  @media only screen and (max-width: 800px) {
  }
`;
export const DiscountAmount = styled(Text)`
  font-size: ${fontSizes.title};
  color: ${({ color }) => (color ? color : "purple")};
  width: max-content;
  align-self: flex-end;
  font-weight: 500;
  word-spacing: 10px;
  @media only screen and (max-width: 800px) {
  }
`;
export const NormalAmount = styled(Text)`
  font-size: ${fontSizes.button};
  color: #808080;
  width: max-content;
  align-self: flex-end;
  font-weight: 400;
  text-decoration:line-through;

  @media only screen and (max-width: 800px) {
  }
`;
