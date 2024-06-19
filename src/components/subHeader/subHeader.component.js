import React, { useState } from "react";

import {
  SubHeaderContainer,
  FilterSection,
  FilterComponent,
  LeftIconWrapper,
  FilterName,
  NavLinkSection,
  NavLink,
  Wrapper,
} from "./subHeader.styles";
import { IoGridOutline as DepartmentsIcon } from "react-icons/io5";
import { BsUiRadiosGrid as ServicesIcon } from "react-icons/bs";
import { FaChevronDown as DropDownArow } from "react-icons/fa6";
import { PiLineVerticalLight as VerticalDivider } from "react-icons/pi";

import { colors } from "../../infrastructure/theme/colors";

export const SubHeader = ({ filter }) => {
  const navData = [
    { navName: "Deals", url: "/deals" },
    { navName: "Grocery & Essentials", url: "/deals" },
    { navName: "4th of July Prep", url: "/deals" },
    { navName: "Pride Always", url: "/deals" },
    { navName: "Fashion", url: "/deals" },
    { navName: "Home", url: "/deals" },
    { navName: "Patio & Garden", url: "/deals" },
    { navName: "Electronics", url: "/deals" },
    { navName: "Health & Wellness", url: "/deals" },
    { navName: "Registry", url: "/deals" },
  ];

  const filterData = [
    { LeftIcon: DepartmentsIcon, filterName: "Departments" },
    { LeftIcon: ServicesIcon, filterName: "Services" },
  ];

  return (
    <SubHeaderContainer paddingVertical="0">
      <FilterSection>
        {filterData.map(({ LeftIcon, filterName }) => (
          <FilterComponent>
            {LeftIcon && <LeftIcon size="1rem" color={colors.text.strong} />}
            <FilterName>{filterName}</FilterName>

            <DropDownArow size="0.6rem" color={colors.text.strong} />
          </FilterComponent>
        ))}
      </FilterSection>
      <VerticalDivider size="1.5rem" color={colors.text.strong} />

      <NavLinkSection>
        {navData.map(({ navName, url }) => (
          <NavLink to={url}>{navName}</NavLink>
        ))}
      </NavLinkSection>
    </SubHeaderContainer>
  );
};
