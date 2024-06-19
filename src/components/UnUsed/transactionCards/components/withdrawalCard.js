import { useState } from "react";
import { colors } from "../../../infrastructure/theme/colors";
import { fontSizes } from "../../../infrastructure/theme/fonts";
import { Title } from "../../activityHistory/activityHistory.styles";
import { Button } from "../../button/button.component";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";
import { Input, TextArea } from "../../input/input.component";
import { Label } from "../../savingsCard/savingsCard.component";
import { Spacer } from "../../spacer/spacer.component";
import { Text } from "../../typography/text.component";
import { DefaultCardstyle } from "../defualtcard.style";

const WithdrawalCard = ({
  setShowModal,
  setShowWithdrawalMsg,
  setShowWithdrawalMsgCont,
  showWithdrawalMsg,
}) => {
  const [amount, setAmount] = useState("");
  const withdrawHandler = async () => {
    try {
      setShowModal(false);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setShowWithdrawalMsgCont(true);
      setShowWithdrawalMsg(true);
    } catch (error) {
      console.log(error);
    }
    return () => {
      clearInterval(showWithdrawalMsg);
    };
  };
  return (
    <>
      <DefaultCardstyle
        onClick={(e) => e.stopPropagation()}
        breakPoint={"780px"}
        breakPointflexBasis={"60%"}
        resFlexBasis={"95%"}
        flexBasis="29%"
      >
        <Title fontWeight="800" fontSize={fontSizes.body}>
          Withdrawal
        </Title>
        <Input
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          border={`1px solid ${colors.red} `}
          type="number"
          label={"Withdrawal Amount"}
          labelFontSize={".8rem !important"}
        />

        <Text marginTop="21px" lineHeight="21px" fontSize={fontSizes.button}>
          Kindly download invoice of withdrawal after withdrawal has been made{" "}
        </Text>
        <Spacer />

        <FlexibleDiv>
          <Label>Narration (Optional)</Label>
          <TextArea border={`0.9px solid ${colors.red}`} />
        </FlexibleDiv>
        <Button
          onClick={withdrawHandler}
          background={colors.red}
          fontSize={"11.7px"}
          btnText={"Withdraw"}
          size="large"
        />
        <Spacer />
      </DefaultCardstyle>
    </>
  );
};

export default WithdrawalCard;
