import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { Text, Title } from "../typography/text.component";
import { Link } from "react-router-dom";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const HeaderContainer = styled(FlexibleDiv)`
  background-color: ${colors.blue.headerBg};
  padding: 1rem 2%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const InnerWrapper = styled(FlexibleDiv)`
  width: 100%;
  padding: 0;
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

export const MenuIconWrapper = styled(FlexibleDiv)`
  width: auto;
  height: max-content;
  padding: 0.5rem;

  @media (max-width: 800px) {
    width: max-content;
  }
  @media (min-width: 600px) {
    display: none;
  }
  @keyframes rippleforward {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
      background: transparent;
    }
  }
  @keyframes rippleBack {
    0% {
      transform: scale(1);
    }
    100% {
      background: transparent;
      transform: scale(0);
    }
  }

  position: relative;
  left: ${({ smallDrawer }) => (!smallDrawer ? "0" : "15px")};
  right: ${({ smallDrawer }) => (!smallDrawer ? "0" : "auto")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  overflow: hidden;
  cursor: pointer;
  .ripple {
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: ${({ smallDrawer }) => !(smallDrawer === true) && "red"};
    animation: ${({ smallDrawer }) =>
      smallDrawer
        ? " rippleforward 300ms ease-in-out forwards"
        : "rippleBack 300ms ease-in-out forwards"};
    position: absolute;
    border-radius: 50%;
  }
  &:hover {
    background: #88898c1a;
  }
  @media (min-width: 600px) {
    /* display: none; */
  }
`;
export const LogoWrapper = styled(Link)`
  width: auto;
  height: 3rem;
  padding: 0.2rem;
  cursor: pointer;
  border-radius: 3rem;
  transition: 1s linear;
  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }
  @media (max-width: 600px) {
    width: 50px;
    display: none;
  }
`;
export const Logo = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 600px) {
  }
`;
export const NavIconWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: 20%;
  gap: 1rem;
  /* background: red; */
  @media (max-width: 1150px) {
    width: 25%;
  }
  @media (max-width: 900px) {
    width: 35%;
  }

  @media (max-width: 800px) {
    flex-direction: row;
  }
  @media (max-width: 900px) {
    width: 45%;
  }
`;

export const IconWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
  cursor: pointer;
  /* background: teal; */
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;
// export const Icon = styled(ReactIcon)`
//   @media (max-width: 800px) {
//   }
// `;

export const AddressDropDownContainer = styled(FlexibleDiv)`
  padding: 0.5rem 1rem;
  width: max-content;
  gap: 0.6rem;
  border-radius: 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));

  &:hover {
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  }
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

export const AvatarWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
  height: max-content;
  border-radius: 50%;
  overflow: hidden;
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  /* border-radius:50%; */
`;
export const InfoWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 900px) {
  }
`;
export const HeadingText = styled(Title)`
  padding: 0;
  width: max-content;
  font-size: ${fontSizes.button};
  line-height: ${fontSizes.smallBody};
  color: ${colors.white};
  font-weight: 600;
  @media (max-width: 900px) {
  }
`;
export const AddressText = styled(Text)`
  padding: 0;
  width: max-content;
  align-self: start;
  font-size: ${fontSizes.caption};
  line-height: ${fontSizes.body};
  color: ${colors.white};
  @media (max-width: 900px) {
  }
`;

export const SearchBarWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: 50%;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavSection = styled(FlexibleDiv)`
  gap: 1rem;
  width: max-content;
  /* background: yellow; */
  padding: 0;
`;
export const Wrapper = styled(FlexibleDiv)`
  padding: 0.5rem 1rem;
  width: max-content;
  gap: 0.6rem;
  border-radius: 1.5rem;
  &:hover {
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  }
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;
// export const IconWrapper = styled(FlexibleDiv)``
export const ContentWrapper = styled(FlexibleDiv)`
  width: max-content;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
`;
export const TopContent = styled(Text)`
  padding: 0;
  width: max-content;
  align-self: start;
  font-size: ${fontSizes.caption};
  line-height: ${fontSizes.body};
  color: ${colors.white};
  @media (max-width: 900px) {
  }
`;

export const BottomContent = styled(Title)`
  padding: 0;
  width: max-content;
  font-size: ${fontSizes.button};
  line-height: ${fontSizes.smallBody};
  color: ${colors.white};
  font-weight: 600;
  @media (max-width: 900px) {
  }
`;

export const SearchBarAndAvatarWrapper = styled(FlexibleDiv)`
  // background: pink;

  padding: 0;
  gap: 2rem;
  width: max-content;
  @media (max-width: 1150px) {
    /* width: 50%; */
  }
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

export const ProfileInfoSection = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
  cursor: pointer;
  /* background: teal; */
  gap: 0.6rem;
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;
export const UserInfoWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 900px) {
  }
`;

export const UserName = styled(Title)`
  padding: 0;
  width: max-content;
  font-size: ${fontSizes.title};
  line-height: ${fontSizes.h3};
  color: ${colors.secondary};
  font-weight: 500;
  @media (max-width: 900px) {
  }
`;
export const UserTelNumber = styled(Text)`
  padding: 0;
  width: max-content;
  font-size: ${fontSizes.caption};
  line-height: ${fontSizes.smallBody};
  color: ${colors.secondary};
  font-weight: 400;
  align-self: flex-end;
  @media (max-width: 900px) {
  }
`;

export const ButtonWrapper = styled(FlexibleDiv)`
  padding: 0 1rem;
  width: max-content;
`;
