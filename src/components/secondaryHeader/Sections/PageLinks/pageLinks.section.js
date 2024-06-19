import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

import { Wrapper } from "./pageLinks.styles";

export const PageLinkSection = ({ display, toggleNav, displayNav }) => {
  return (
    <Wrapper display={display}>
      {/* <Link to="/">Home</Link> */}
      <Link
        activeClass="active"
        onSetActive={
          displayNav
            ? () => {
                toggleNav();
              }
            : null
        }
        to="HireExpert"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        Hire Expert
      </Link>

      <Link
        activeClass="active"
        onSetActive={
          displayNav
            ? () => {
                toggleNav();
              }
            : null
        }
        to="About"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        About
      </Link>

      <Link
        activeClass="active"
        onSetActive={
          displayNav
            ? () => {
                toggleNav();
              }
            : null
        }
        to="WhyUs"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        Why US
      </Link>
      <Link
        activeClass="active"
        onSetActive={
          displayNav
            ? () => {
                toggleNav();
              }
            : null
        }
        to="Clients"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        Clients
      </Link>
      <Link
        activeClass="active"
        onSetActive={
          displayNav
            ? () => {
                toggleNav();
              }
            : null
        }
        to="Testimonials"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        Testimonials
      </Link>
      <Link
        activeClass="active"
        onSetActive={
          displayNav
            ? () => {
                toggleNav();
              }
            : null
        }
        to="HowItWorks"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        How It Works
      </Link>
      <Link
        activeClass="active"
        onSetActive={
          displayNav
            ? () => {
                toggleNav();
              }
            : null
        }
        to="Contact"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        Contact
      </Link>

      {/* <Link to="/">Hire Expert</Link>
      <Link to="/">About</Link>
      <Link to="/">Why US</Link>
      <Link to="/">Clients</Link>
      <Link to="/about">Testimonials</Link>
      <Link to="/contact">How It Works</Link>
      <Link to="/">Contact</Link> */}
    </Wrapper>
  );
};
