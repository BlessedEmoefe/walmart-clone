import React, { useState, useEffect } from "react";

/*Importing logo image and styles*/
import { HeaderContainer } from "./secondaryHeader.styles";
import { LogoSection } from "./Sections/LogoSection/logo.section";
import { NavIconSection } from "./Sections/NavIcon/navIcon.section";
import { LinkSection } from "./Sections/LinkSection/linkSection.section";

const SecondaryHeader = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);
  const toggleNav = () => {
    setDisplayNav(!displayNav);
    console.log(displayNav);
  };
  const position = window.pageYOffset;

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      position > scrollPosition ? setHideHeader(true) : setHideHeader(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <HeaderContainer
      hideHeader={hideHeader}
      position={position > 3 ? true : false}
    >
      <div className="innerWrapper">
        <LogoSection toggleNav={toggleNav} displayNav={displayNav} />
        <LinkSection displayNav={displayNav} toggleNav={toggleNav} />
        <NavIconSection toggleNav={toggleNav} displayNav={displayNav} />
      </div>
    </HeaderContainer>
  );
};

export default SecondaryHeader;
