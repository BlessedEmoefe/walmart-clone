import React from "react";
// import { Link } from "react-router-dom";

/*Importing logo image and styles*/
import logo from "../../../../assets/images/logo.png";
import { LogoWrapper } from "./logo.styles";
import { Link,animateScroll } from "react-scroll";

export const LogoSection = ({ displayNav, toggleNav }) => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <LogoWrapper>
      <Link
        onSetActive={
          displayNav
            ? () => {
                toggleNav();
              }
            : null
        }
        onClick={() => {
          scrollToTop();
        }}
      >
        <img src={logo} alt="logo" />
      </Link>
    </LogoWrapper>
  );
};
