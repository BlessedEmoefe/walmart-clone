import React, { useState } from "react";
import styled from "styled-components";
import { Input, TextArea } from "../input/input.component";
import { DefaultCardstyle } from "../transactionCards/defualtcard.style";
import { Text, Title } from "../typography/text.component";
import { colors } from "../../infrastructure/theme/colors";
import { Button } from "../button/button.component";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
// import { Spacer } from "../spacer/spacer.component";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

export const Label = styled.p`
  position: relative;
  top: 23px;
  left: ${({ left }) => (left ? left : "18px")};
  color: ${colors.black.strong};
  z-index: 9;
  background: #fff;
  font-size: 13px;
  padding: 3px;

  @media only screen and (max-width: 680px) {
    left: ${({ resLeft }) => (resLeft ? resLeft : "-15px")};
  }
`;

const SavingsCard = ({ setShowModal, setAddSavings, addSavings }) => {
  // const [rate, setRate] = useState(2);
  const [amount, setAmount] = useState(500);
  const [savingsText, setSavingsText] = useState("ADD SAVINGS");

  const rangeSetter = (e) => {
    setAmount(e.target.value);
  };

  const addSavingsHandler = () => {
    try {
      setAddSavings(true);
      setShowModal(false);
      setSavingsText("SAVE");
    } catch (error) {
      console.log(error);
    }
    console.log(addSavings);
  };

  return (
    <>
      <DefaultCardstyle
        onClick={(e) => e.stopPropagation()}
        breakPoint={"780px"}
        breakPointflexBasis={"60%"}
        resFlexBasis={"95%"}
        flexBasis={"30%"}
      >
        <Title fontWeight={fontWeights.bold} fontSize={fontSizes.body}>
          Add Savings
        </Title>
        <FlexibleDiv justifyContent={"flex-start"} paddingVertical={"1rem"}>
          <Text
            fontWeight={fontWeights.semiBold}
            color={colors.black.strong}
            marginTop="-2px"
            lineHeight="19px"
            fontSize={fontSizes.button}
          >
            Adjust the cursor to the multiple of your savings rate you will like
            deposit today
          </Text>
        </FlexibleDiv>
        <FlexibleDiv
          paddingVertical={"1px"}
          justifyContent={"space-between"}
          width={"97%"}
          resFlexDirection={"row"}
        >
          <Text fontSize={fontSizes.caption} fontWeight={fontWeights.bold}>
            x1
          </Text>
          <Text fontSize={fontSizes.caption} fontWeight={fontWeights.medium}>
            x31
          </Text>
        </FlexibleDiv>
        <Input
          style={{ padding: "1rem 0px", margin: "0px" }}
          border={"none"}
          type="range"
          onChange={(e) => rangeSetter(e)}
          value={amount}
          min={500}
          max={5000}
          background={"#c3c3c3"}
        />
        <Text
          align={"end"}
          color={colors.black.strong}
          fontSize={fontSizes.button}
          fontWeight="bold"
        >
          NGN {amount}
        </Text>
        <Text marginTop="19px" lineHeight="19px" fontSize="12px">
          Deposit greater than daily savings rate will be carried over to the
          next day
        </Text>
        {/* <Spacer /> */}

        <FlexibleDiv paddingVertical={"0px"}>
          <Label>Narration (Optional)</Label>
          <TextArea border={`0.9px solid ${colors.primary}`} />
        </FlexibleDiv>
        <Button
          onClick={() => addSavingsHandler()}
          fontSize={"12px"}
          btnText={savingsText}
          size="large"
        />
      </DefaultCardstyle>
    </>
  );
};

export default SavingsCard;
