import React,{useState} from "react";
import { colors } from "../../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../../infrastructure/theme/fonts";
import { Title } from "../../activityHistory/activityHistory.styles";
import { Button } from "../../button/button.component";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";
import { Input, TextArea } from "../../input/input.component";
import { Label } from "../../savingsCard/savingsCard.component";
import { Spacer } from "../../spacer/spacer.component";
import { Text } from "../../typography/text.component";
import { DefaultCardstyle } from "../defualtcard.style";

const AddFixSavingsCard=({setShowModal})=>{
    const addFixedSavingsHandler = () => {
      setShowModal(false);
    };
    const [amount,setAmount] = useState("")
    return (
      <>
        <DefaultCardstyle
          onClick={(e) => e.stopPropagation()}
          breakPoint={"780px"}
          breakPointflexBasis={"60%"}
          resFlexBasis={"95%"}
          flexBasis={"29%"}
        >
          <FlexibleDiv justifyContent={"flex-start"} paddingVertical={"0rem"}>
            <Title
              fontWeight="800"
              fontSize={fontSizes.body}
              paddingLeft={"0rem"}
            >
              Add Fixed Savings
            </Title>
          </FlexibleDiv>
          <FlexibleDiv justifyContent={"flex-start"} paddingVertical={"1rem"}>
            <Text
              fontSize={"14.8px"}
              color={"#707070"}
              fontWeight={fontWeights.semiBold}
            >
              Current Fix Savings:{" "}
              <span
                style={{
                  color: colors.black.strong,
                  fontWeight: fontWeights.bold,
                  paddingLeft: ".3rem",
                }}
              >
                15,000 NGN
              </span>
            </Text>
          </FlexibleDiv>
          <Input
            border={"1px solid #15A7BF"}
            type="number"
            labelFontSize={".8rem !important"}
            label={"Amount"}
            value={amount}
            onChange={(e)=>{setAmount(e.target.value)}}
          />
          <Spacer />
          <FlexibleDiv
            justifyContent={"center"}
            alignItems={"center"}
            paddingVertical=".4rem"
          >
            <Text fontSize={fontSizes.smallBody} color={colors.black.regular}>
              Kindly download invoice after transaction
            </Text>
          </FlexibleDiv>

          <FlexibleDiv paddingVertical=".5rem">
            <Label>Narration (Optional)</Label>
            <TextArea border={`0.9px solid ${colors.teal}`} />
          </FlexibleDiv>
          <Button
            onClick={addFixedSavingsHandler}
            background="#15A7BF"
            fontSize={"11.7px"}
            btnText={"Add Savings"}
            size="large"
          />
          <Spacer />
        </DefaultCardstyle>
      </>
    );
  }


  export default AddFixSavingsCard