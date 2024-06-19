import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Title,Text } from "../typography/text.component";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const SubscriptionMethodCardContainer = styled(FlexibleDiv)`
  border: 1px solid ${({ color }) => (color ? color : "transparent")};
  padding: 0.6rem 1rem;
  border-radius: 10px;
  background: #fff;
  gap: 1.5rem;
  cursor: pointer;
  justify-content:flex-start;

  @media only screen and (max-width: 800px) {
  }
`;

export const SubscriptionMethodLogoWrapper = styled(FlexibleDiv)`
  width: 60px;
  height: 100%;
  padding: 0.2rem;
  /* background: #b9b9b9; */
justify-content: center;
  @media only screen and (max-width: 800px) {
  }
`;
export const SubscriptionMethodLogo = styled.img`
  width: 90%;
  height: auto;

  @media only screen and (max-width: 800px) {
  }
`;
export const SubscriptionMethodNameWrapper = styled(FlexibleDiv)`
  flex-direction: column;
  align-items: flex-start;
  /* background: red; */
  padding: 0;
  width: max-content;
  @media only screen and (max-width: 800px) {
  }
`;
export const SubscriptionMethodName = styled(Text)`
  font-size: ${fontSizes.smallBody};
  color: #002069;
  width: max-content;
  font-weight: 500;
  align-self: flex-start;
  @media only screen and (max-width: 800px) {
  }
`;

export const SubscriptionMethodButtonWrapper = styled(FlexibleDiv)`
  flex-direction: column;
  /* background: blue; */
  padding: 0;
  align-items: flex-end;
  flex:1;
  /* align-self:flex-end; */
  @media only screen and (max-width: 800px) {
  }
`;
