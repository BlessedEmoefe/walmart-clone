import React from "react";
import { Link } from "react-scroll";
import { colors } from "../../../../infrastructure/theme/colors";
import { Button } from "../../../button/button.component";
import { HorizontalSpacer } from "../../../spacer/spacer.component";
import { Wrapper } from "./action.styles";

export const ActionSection = ({ display, displayNav, toggleNav }) => {
  return (
    <Wrapper display={display}>
      <Link
        activeClass="active"
           onSetActive={
          displayNav
            ? () => {
                toggleNav();
              }
            : null
        }
        to="StartAProject"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        <Button
          btnText="Start a project"
          border={`2px solid ${colors.primary}`}
          btnColor={colors.white}
        />
      </Link>
      <HorizontalSpacer />
      <Link
        activeClass="active"
           onSetActive={
          displayNav
            ? () => {
                toggleNav();
              }
            : null
        }
        to="Internship"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        <Button
          btnText="Apply for Internship"
          background={colors.transparent}
          border={`2px solid ${colors.primary}`}
          btnColor={colors.primary}
        />
      </Link>
    </Wrapper>
  );
};
