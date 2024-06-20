import React from "react";

import {
  SubHeaderContainer,
  FilterSection,
  FilterComponent,
  FilterName,
  NavLinkSection,
  NavLink,
  SubHeaderDropDownContainer,
  Wrapper,
  DropDownName,
  SubHeaderDropDownNavLinkSection,
  SubHeaderDropDownNavLink,
} from "./subHeader.styles";
import { IoGridOutline as DepartmentsIcon } from "react-icons/io5";
import { BsUiRadiosGrid as ServicesIcon } from "react-icons/bs";
import { FaChevronDown as DropDownArow } from "react-icons/fa6";
import { PiLineVerticalLight as VerticalDivider } from "react-icons/pi";

import { colors } from "../../infrastructure/theme/colors";

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
export const SubHeader = ({ filter, setOpenModal, openModal }) => {
  const filterData = [
    {
      LeftIcon: DepartmentsIcon,
      filterName: "Departments",
      modalName: "department",
    },
    {
      LeftIcon: ServicesIcon,
      filterName: "Services",
      modalName: "services",
    },
  ];

  return (
    <SubHeaderContainer paddingVertical="0">
      <FilterSection>
        {filterData.length > 0 &&
          filterData.map(({ LeftIcon, filterName, modalName }) => (
            <FilterComponent
              onClick={() => {
                setOpenModal(openModal === modalName ? false : modalName);
              }}
            >
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

export const SubHeaderDropDown = ({ servicesDropdown }) => {
  return (
    <SubHeaderDropDownContainer servicesDropdown={servicesDropdown}>
      <Wrapper>
        <DropDownName>All Departments</DropDownName>
      </Wrapper>
      <SubHeaderDropDownNavLinkSection>
        {navData.map(({ navName, url }) => (
          <SubHeaderDropDownNavLink to={url}>
            {navName}
          </SubHeaderDropDownNavLink>
        ))}
      </SubHeaderDropDownNavLinkSection>
    </SubHeaderDropDownContainer>
  );
};
