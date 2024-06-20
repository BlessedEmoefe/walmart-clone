import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { Text, Title } from "../typography/text.component";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const AddressBarCardContainer = styled(FlexibleDiv)`
  background-color: ${colors.blue.headerBg};
  padding: 2.5rem 1rem 2rem 1rem;
  gap: 1rem;
  border-radius: 0px 0px 12px 12px;
  flex-direction: column;
  width: 25vw;
  position: absolute;
  left: 5.5rem;
  top: 0px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ServiceSection = styled(FlexibleDiv)`
  padding: 0;
  gap: 1.5rem;
  justify-content: center;
  /* background: indigo; */
  height: max-content;
  width: max-content;

  @media only screen and (max-width: 800px) {
  }
`;

export const ServicesContainer = styled(FlexibleDiv)`
  padding: 0;
  gap: 0.5rem;
  /* background: red; */
  height: max-content;
  flex-direction: column;
  width: max-content;
  /* height: 350px; */
  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 800px) {
  }
`;
export const ImageSection = styled(FlexibleDiv)`
  padding: 0;
  /* background: teal; */
  height: max-content;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  overflow: hidden;

  @media only screen and (max-width: 800px) {
  }
`;
export const Image = styled.img`
  padding: 0;
  width: 50px;
  height: 50px;
  object-fit: fit;

  @media only screen and (max-width: 800px) {
  }
`;

export const TextSection = styled(FlexibleDiv)`
  padding: 0;
  justify-content: center;
  height: max-content;
  /* background:pink; */

  @media only screen and (max-width: 800px) {
  }
`;
export const ServiceName = styled(Text)`
  padding: 0;
  color: ${colors.white};
  font-size: ${fontSizes.button};
  line-height: ${fontSizes.smallBody};
  font-weight: 700;
`;

export const AddressSection = styled(FlexibleDiv)`
  padding: 0;
  flex-direction: column;
  gap: 0.6rem;
  /* background: red; */
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

export const AddressCard = styled(FlexibleDiv)`
  padding: 1rem;
  flex-direction: column;
  gap: 0.6rem;
  background: #fff;
  border-radius: 10px;

  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

export const TopSection = styled(FlexibleDiv)`
  padding: 0;
  gap: 1%;
  /* width: max-content; */
  /* background: brown; */
`;

export const LeftIconWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
  height: 100%;
  align-items: flex-start;
  /* background: green; */
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

export const InfoWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: ${({ btn }) => (btn ? "90%" : "80%")};
  /* min-width: max-content; */
  gap: 0.2rem;
  flex-direction: column;
  align-items: flex-start;
  /* background: teal; */

  @media (max-width: 900px) {
  }
`;
export const Wrapper = styled(FlexibleDiv)`
  padding: 0;
  flex-wrap: wrap;

  @media (max-width: 900px) {
  }
`;
export const HeadingText = styled(Title)`
  padding: 0;
  width: max-content;
  font-size: ${fontSizes.small};
  line-height: ${fontSizes.caption};
  color: ${colors.black.strong};
  font-weight: 700;
  @media (max-width: 900px) {
  }
`;
export const AddressText = styled(Text)`
  padding: 0;
  width: max-content;
  align-self: start;
  word-wrap: wrap;
  font-size: ${fontSizes.small};
  line-height: ${fontSizes.small};
  color: ${colors.black.strong};
  @media (max-width: 900px) {
  }
`;
export const BottomSection = styled(FlexibleDiv)`
  padding: 0;
  /* background: teal; */
  height: max-content;
`;
