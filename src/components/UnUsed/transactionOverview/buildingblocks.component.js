import React, { useState } from "react";
import { CheckIcon } from "../../assets/svg";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { Button } from "../button/button.component";
import { Div } from "../div/div.component";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import Modal from "../modal/modal.component";
import { Indicator } from "./indicator.component";
import SavingsCard from "../savingsCard/savingsCard.component";

// Header

export const Head = () => {
const [addSavings,setAddSavings] = useState(false);
  const  [showModal,setShowModal ] = useState(false);
  const  [disableBtn,setDisableBtn ] = useState(false);
  function AddSavings() {
    setAddSavings(true);
    console.log(addSavings);
    setDisableBtn(!disableBtn)
  setShowModal(true)
  }

  
  return (
    <>
      <FlexibleDiv
        paddingVertical={"10px"}
        background={"#1c5fab2e"}
        flexDirection={"row"}
      >
        <FlexibleDiv
          paddingVertical={"0px"}
          flexDirection={"column"}
          justifyContent={"start"}
          alignItems={"baseline"}
          width={"50%"}
        >
          <Text
            align={"start"}
            marginLeft={"42px"}
            color={colors.black.strong}
            fontSize={"14px"}
            fontWeight={fontWeights.semiBold}
            resalign={"center"}
            resmargin={"2px 0px"}
          >
            {" "}
            Savings Rate
          </Text>
          <Text
            align={"start"}
            marginLeft={"42px"}
            color={colors.primary}
            fontSize={fontSizes.body}
            fontWeight={fontWeights.bold}
            resalign={"center"}
            resmargin={"6px 0px"}
          >
            500NGA
          </Text>
        </FlexibleDiv>
        <FlexibleDiv
          resWidth={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"50%"}
          paddingVertical={"0px"}
          resalignItems="center"
          boxedLayout={"40%"}
        >
          <Button
            onClick={AddSavings}
            disabled={disableBtn}
            background={
              addSavings ? `${colors.black.light}` : `${colors.primary}`
            }
            btnColor={addSavings ? `${colors.white} ` : `${colors.black.light}`}
            fontSize={fontSizes.button}
            btnText={"ADD SAVINGS"}
            size="large"
          />
        </FlexibleDiv>

        <Div
          transition={"0.9s ease"}
          padding={"0px 0px 30px 0px"}
          direction={"row"}
          align={"center"}
          display={addSavings ? "flex" : "none"}
          width={"90%"}
          justifyContent={"center"}
        >
          <FlexibleDiv
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"end"}
            width={"15%"}
            paddingVertical={"0px"}
            boxedLayout={"20px"}
          >
            {" "}
            <CheckIcon color={colors.green} width={"1.3rem"} />
          </FlexibleDiv>
          <FlexibleDiv width={"85%"} paddingVertical={"0px"}>
            <Text
              fontWeight={fontWeights.medium}
              color={colors.black.regular}
              lineHeight={"16px"}
              fontSize={"11px"}
              style={{ display: "block" }}
            >
              You currently added 1,500NGA being 3 days savings to your line.
              10days left <br /> to close line.{" "}
              <span
                style={{
                  color: colors.primary,
                  fontWeight: fontWeights.semiBold,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setShowModal(!showModal);
                }}
              >
                {" "}
                Edit Savings
              </span>
            </Text>
          </FlexibleDiv>
        </Div>
        <Spacer />
      </FlexibleDiv>

      <Modal show={showModal} setShowModal={setShowModal}>
        <SavingsCard
          setShowModal={setShowModal}
          setAddSavings={setAddSavings}
          addSavings={addSavings}
        />
      </Modal>
    </>
  );
};















// Type Of Activities

export const Type = () => {
  return (
    <>
      <FlexibleDiv
        breakpointwidth={"100%"}
        paddingVertical={"0px"}
        width={"75%"}
        justifyContent={"space-evenly"}
        alignItems={"start"}
        resFlexDirection={'row'}
      >
        <FlexibleDiv
          resFlexDirection={"row"}
          justifyContent={"center"}
          width={"25%"}
          alignItems={"baseline"}
          resWidth={'50%'}
          resjustifyContent={"flex-start"}
        >
          <Indicator bg={colors.black.soft} />
          <Text
            lineHeight={"auto"}
            color={colors.black.strong}
            fontWeight={fontWeights.bold}
            fontSize={fontSizes.caption}
            align={"center"}
            resalign={"baseline"}
          >
            {" "}
            Commision
          </Text>
        </FlexibleDiv>

        <FlexibleDiv
          resFlexDirection={"row"}
          justifyContent={"center"}
          width={"25%"}
          alignItems={"baseline"}
          resWidth={'50%'}
          resjustifyContent={"flex-end"}
        >
          <Indicator bg={colors.green} />
          <Text
            lineHeight={"auto"}
            color={colors.black.strong}
            fontWeight={fontWeights.bold}
            fontSize={fontSizes.caption}
              resalign={"baseline"}
          >
            Depsoited
          </Text>
        </FlexibleDiv>
        <FlexibleDiv
          resFlexDirection={"row"}
          justifyContent={"center"}
          width={"25%"}
          alignItems={"baseline"}
          resWidth={'50%'}
          resjustifyContent={"flex-start"}
        >
          <Indicator bg={colors.red} />
          <Text
            lineHeight={"auto"}
            color={colors.black.strong}
            fontWeight={fontWeights.bold}
            fontSize={fontSizes.caption}
            resalign={"baseline"}
          >
            Withdrawed
          </Text>
        </FlexibleDiv>
        <FlexibleDiv
          resFlexDirection={"row"}
          justifyContent={"center"}
          width={"25%"}
          alignItems={"baseline"}
          resWidth={'50%'}
          resjustifyContent={"flex-end"}
        >
          <Indicator
            bg={colors.white}
            border={`1.6px solid ${colors.black.soft} `}
          />
          <Text
            lineHeight={"auto"}
            color={colors.black.strong}
            fontWeight={fontWeights.bold}
            fontSize={fontSizes.caption}
            resalign={"baseline"}
          >
            No Activity
          </Text>
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

// Valuation

export const Valuation = () => {
  // const [value, setValue] = useState(0);

  return (
    <>
      <Div
        padding={"0px 0px 0px 0px"}
        align={"baseline"}
        justifyContent={"start"}
        width={"30%"}
        display={"flex"}
        r
      >
        <Text fontWeight={fontWeights.bold} color={colors.red}>
          -7
        </Text>
        <Text fontWeight={fontWeights.bold} color={colors.black.strong}>
          +
        </Text>
        <Text fontWeight={fontWeights.bold} color={colors.green}>
          20
        </Text>
        <Text fontWeight={fontWeights.bold} color={colors.black.strong}>
          /
        </Text>
        <Text fontWeight={fontWeights.bold} color={colors.primary}>
          31
        </Text>
      </Div>
    </>
  );
};
