import styled from "styled-components";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import { Text, Title } from "../../components/typography/text.component";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { Link } from "react-router-dom";

export const SubHeaderContainer = styled(FlexibleDiv)`
  justify-content: space-between;
  background: ${colors.lightBlueBg.firstVariant};
  height: max-content;
  padding: 0.7rem 2%;
  @media only screen and (max-width: 800px) {
    flex-direction: row;
  }
`;
export const FilterSection = styled(FlexibleDiv)`
  width: max-content;
  /* min-width: 30%; */
  gap: 0.5rem;
  padding: 0;
  /* justify-content: flex-start; */
  @media only screen and (max-width: 850px) {
    flex-direction: row;
    min-width: max-content;
    width: 50%;
  }
`;

export const FilterComponent = styled(FlexibleDiv)`
  padding: 0.3rem 0.5rem;
  width: max-content;
  gap: 0.5rem;
  border-radius: 2rem;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
    border: 1px solid ${colors.text.strong};
  }
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

export const LeftIconWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
  height: max-content;
  border-radius: 50%;
  overflow: hidden;
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

export const NavLinkSection = styled(FlexibleDiv)`
  /* Made change */
  width: max-content;
  min-width: 70%;
  padding: 0;
  gap: 1rem;
  /* justify-content: flex-start; */
  @media only screen and (max-width: 850px) {
    flex-direction: row;
    min-width: max-content;
    width: 50%;
  }
`;
export const FilterName = styled(Title)`
  padding: 0;
  width: max-content;
  font-size: ${fontSizes.button};
  line-height: ${fontSizes.smallBody};
  color: ${colors.text.strong};
  font-weight: 700;
  @media (max-width: 900px) {
  }
`;

export const NavLink = styled(Link)`
  color: ${colors.text.strong};
  font-size: ${fontSizes.button};
  font-weight: ${fontWeights.medium};
  text-decoration: none;
  cursor: pointer;
`;

export const SubHeaderDropDownContainer = styled(FlexibleDiv)`
  min-width: 16vw;
  width: max-content;
  background: #fff;
  border-radius: 0px 0px 10px 10px;
  left:${({ servicesDropdown }) => (servicesDropdown ? "10rem" : "1rem")};
  padding: 1.5rem 1.3rem 1.3rem 1.3rem;
  position: absolute;
  height: auto;
  gap: 1.2rem;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (max-width: 850px) {
    margin: 0;
  }
`;

export const Wrapper = styled(FlexibleDiv)`
  width: max-content;
  height: max-content;
  padding: 0;
  /* background: pink; */
  @media only screen and (max-width: 850px) {
    margin: 0;
  }
`;
export const DropDownName = styled(Text)`
  padding: 0;
  width: max-content;
  font-size: ${fontSizes.button};
  line-height: ${fontSizes.smallBody};
  color: ${colors.text.strong};
  font-weight: 700;
  @media (max-width: 900px) {
  }
`;

export const SubHeaderDropDownNavLinkSection = styled(FlexibleDiv)`
  width: max-content;
  padding: 0;
  gap: 1rem;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (max-width: 850px) {
    flex-direction: row;
    min-width: max-content;
    width: 50%;
  }
`;

export const SubHeaderDropDownNavLink = styled(Link)`
  color: ${colors.black.strong};
  font-size: ${fontSizes.button};
  /* font-weight: ${fontWeights.semiBold}; */
  line-height: ${fontSizes.smallBody};
  text-decoration: none;
  cursor: pointer;
`;
