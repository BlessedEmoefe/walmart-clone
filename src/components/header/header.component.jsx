import React, { useState } from "react";
import walmart from "../../assets/svg/walmart.svg";
import { truncate } from "../../infrastructure/lib/factory.lib";
import {
  HeaderContainer,
  InnerWrapper,
  MenuIconWrapper,
  LogoWrapper,
  Logo,
  AddressDropDownContainer,
  InfoWrapper,
  HeadingText,
  AddressText,
  NavSection,
  Wrapper,
  ContentWrapper,
  TopContent,
  BottomContent,
  NavIconWrapper,
  IconWrapper,
  SearchBarAndAvatarWrapper,
  SearchBarWrapper,
  ProfileInfoSection,
  UserInfoWrapper,
  UserName,
  UserTelNumber,
  AvatarWrapper,
  Avatar,
  ButtonWrapper,
} from "./header.styles";

import { colors } from "../../infrastructure/theme/colors";

import { SearchBar } from "../SearchBar/searchBar.component";
import AvatarImage from "../../assets/images/avatar.jpg";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";
import { FaChevronDown as DropDownArow } from "react-icons/fa6";
import { IoMdHeartEmpty as Heart } from "react-icons/io";
import { MdOutlinePersonOutline as Person } from "react-icons/md";
import { BsCart2 as Cart } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

const Header = ({ smallDrawer, handleNoDrawer, userData }) => {
  // const [displayNav, setDisplayNav] = useState(false);
  const navigate = useNavigate();
  const [showMenu] = useState(undefined);
  const NavSectionData = [
    { Icon: Heart, top: "Reorder", bottom: "My Items" },
    { Icon: Person, top: "Sign In", bottom: "Account" },
  ];
  
  return (
    <HeaderContainer smallDrawer={smallDrawer}>
      <InnerWrapper showMenu={showMenu}>
        <MenuIconWrapper onClick={() => handleNoDrawer()}>
          <div className="ripple" />
          <MenuIcon size="20px" color={colors.black} />
        </MenuIconWrapper>

        <LogoWrapper to="/">
          <Logo src={walmart} alt="logo" />
        </LogoWrapper>

        <AddressDropDownContainer>
          <AvatarWrapper
            onClick={() => {
              navigate("/profile");
            }}
          >
            <Avatar src={AvatarImage} alt="avatar" />
          </AvatarWrapper>
          <InfoWrapper>
            <HeadingText>How do you want your items?</HeadingText>
            <AddressText>
              {truncate("Sacramento, 95829 • Sacramento Supercenter", 33)}
            </AddressText>
          </InfoWrapper>

          <DropDownArow size="0.8rem" />
        </AddressDropDownContainer>

        <SearchBarWrapper>
          <SearchBar
            placeholder="Search everything at Walmart online and in store"
            // handleChange ={}
            // fullWidth = true
            // height={}
            // xl = false
            // color = {colors.black.strong}
          />
        </SearchBarWrapper>

        <NavSection>
          {NavSectionData.map(({ Icon, top, bottom }) => (
            <Wrapper>
              {/* <IconWrapper>
            </IconWrapper> */}
              {Icon && <Icon />}
              <ContentWrapper>
                <TopContent>{top}</TopContent>
                <BottomContent>{bottom}</BottomContent>
              </ContentWrapper>
            </Wrapper>
          ))}
        </NavSection>
      </InnerWrapper>
    </HeaderContainer>
  );
};

export default Header;

{
  /* <NavIconWrapper>
          <IconWrapper>
            <FilledHeart width="2.4rem" height="2.4rem" />
          </IconWrapper>
          <IconWrapper>
            <AlarmClock width="2.4rem" height="2.4rem" />
          </IconWrapper>
          <IconWrapper>
            <NotificationIcon width="2.4rem" height="2.4rem" />
          </IconWrapper>
          <IconWrapper>
            <StickyNote width="2.4rem" height="2.4rem" />
          </IconWrapper>
        </NavIconWrapper> */
}

//  <SearchBarAndAvatarWrapper>
//    <ProfileInfoSection>
//      <UserInfoWrapper>
//        <UserName>
//          {userData?.email ? userData.email : "Jacinta Martins"}
//        </UserName>
//        <UserTelNumber>
//          {userData?.username ? userData.username : "+234-4687340-322"}
//        </UserTelNumber>
//      </UserInfoWrapper>
//      <AvatarWrapper
//        onClick={() => {
//          navigate("/profile");
//        }}
//      >
//        <Avatar src={AvatarImage} alt="avatar" />
//      </AvatarWrapper>
//    </ProfileInfoSection>
//  </SearchBarAndAvatarWrapper>;
