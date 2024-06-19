
import { useState } from "react";
import { colors } from "../../../infrastructure/theme/colors";
import { fontSizes } from "../../../infrastructure/theme/fonts";
import { Title } from "../../activityHistory/activityHistory.styles";
import { Button } from "../../button/button.component";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";
import { Input, TextArea } from "../../input/input.component";
import { Label } from "../../savingsCard/savingsCard.component";
import { Spacer } from "../../spacer/spacer.component";
// import { Text } from "../../typography/text.component";
import { DefaultCardstyle } from "../defualtcard.style";
const PayBackCard = ({setShowModal}) => {
    const payBackHandler = () => {
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
          <Title fontWeight="800" fontSize={fontSizes.body}>
            IOU Pay Back
          </Title>
          <Input
          value={amount}
          onChange={(e)=>{setAmount(e.target.value)}}
            border={"1px solid purple"}
            type="number"
            labelFontSize={".8rem !important"}
            label={ "Amount to pay back"}
            // innerLabel={'Hello'}
            // label={amount ? null : "Amount to pay back"}
          />
          <Spacer />

          <FlexibleDiv>
            <Label>Narration (Optional)</Label>
            <TextArea border={`0.9px solid ${colors.purple}`} />
          </FlexibleDiv>
          <Button
            onClick={()=>{payBackHandler()}}
            background="purple"
            fontSize={"11.7px"}
            btnText={"Make Payment"}
            size="large"
          />
          <Spacer />
        </DefaultCardstyle>
      </>
    );
  };


  export default PayBackCard