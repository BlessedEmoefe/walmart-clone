import React, { useState } from "react";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { Button } from "../button/button.component";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import Calender from "../lineHistoryCard/calendar.component";
import LineHistoryCard from "../lineHistoryCard/lineHistoryCard.component";
import Modal from "../modal/modal.component";
import { Spacer } from "../spacer/spacer.component";
import { DefaultCardstyle } from "../transactionCards/defualtcard.style";
import TransactionCard from "../transactionCards/transactionCards.component";
import { Text } from "../typography/text.component";
import { Head, Type, Valuation } from "./buildingblocks.component";
import WithdrawalMsg from "./withdrawalMessage";

const TransactionOverviewCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [displayLineHistory, setDisplayLineHistory] = useState(false);
  const [showWithdrawalMsg, setShowWithdrawalMsg] = useState(false);
  const [showWithdrawalMsgCont, setShowWithdrawalMsgCont] = useState(false);

  return (
    <>
      <DefaultCardstyle
        padding={"0px"}
        flexBasis={"97%"}
        width={"100%"}
        boxShadow={"none"}
        radius={"3px"}
        resWidth={"100%"}
      >
        <FlexibleDiv paddingVertical={"0px"} flexDirection={"column"}>
          <Head />
          <Spacer />

          <FlexibleDiv
            boxedLayout={"82px"}
            flexWrap={"wrap"}
            resFlexDirection={"column"}
            paddingVertical={"0px"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"baseline"}
            width={"100%"}
          >
            <FlexibleDiv
              boxedLayout={" 92px"}
              breakpointwidth={"100%"}
              paddingVertical={"0px"}
              width={"25%"}
              justifyContent={"start"}
              alignItems={"start"}
              resFlexDirection={'row'}
            >
              <FlexibleDiv paddingVertical={"0px"} resWidth={"50%"} >
              <Text
                color={colors.black.strong}
                fontWeight={fontWeights.bold}
                fontSize={"14px"}
                resalign={"start"}
              >
                Line Activity
              </Text>
              </FlexibleDiv>
              <FlexibleDiv paddingVertical={"0px"} resWidth={"50%"}  resalignItems={'flex-end'}>
                <Valuation />
              </FlexibleDiv>
            </FlexibleDiv>

            <Type />
          </FlexibleDiv>

          {/* <Spacer/> */}
          <FlexibleDiv
            paddingVertical={"0px"}
            justifyContent={"space-evenly"}
            flexDirection={"row"}
            alignItems={"baseline"}
          >
            <FlexibleDiv
              breakpointwidth={"100%"}
              paddingVertical={"0px"}
              justifyContent={"start"}
              width={"50%"}
              resalignItems={"flex-end"}
            >
              <Calender />
            </FlexibleDiv>
            <FlexibleDiv
              paddingVertical={"0px"}
              breakpointwidth={"100%"}
              flexDirection={"row"}
              justifyContent={"start"}
              width={"50%"}
              resFlexDirection={'row'}
            >
              <FlexibleDiv width={"50%"} flexDirection={"column"} resWidth={"50%"} >
                <Text
                  fontSize={"14px"}
                  color={"#0fc90f;"}
                  fontWeight={fontWeights.semiBold}
                >
                  Depsoited
                </Text>
                <Text
                  fontWeight={fontWeights.semiBold}
                  fontSize={"16px"}
                  color={"#0fc90f;"}
                >
                  NGA 25,000
                </Text>
                <Text fontSize={"12px"}>(20 days)</Text>
              </FlexibleDiv>
              <FlexibleDiv width={"50%"} flexDirection={"column"}  resWidth={"50%"} >
                <Text
                  fontWeight={fontWeights.semiBold}
                  fontSize={"14px"}
                  color={colors.red}
                >
                  Withdrawn
                </Text>
                <Text
                  fontWeight={fontWeights.semiBold}
                  fontSize={"16px"}
                  color={colors.red}
                >
                  NGA 3,500
                </Text>
                <Text fontWeight={fontWeights.medium} fontSize={"12px"}>
                  (7 days)
                </Text>
              </FlexibleDiv>
            </FlexibleDiv>
          </FlexibleDiv>

          <FlexibleDiv
            paddingVertical={"13px"}
            justifyContent={"space-evenly"}
            flexDirection={"row"}
            alignItems={"baseline"}
          >
            <FlexibleDiv
              alignItems={"start"}
              paddingVertical={"0px"}
              justifyContent={"start"}
              width={"50%"}
            >
              <Text
                resmargin={"auto"}
                marginLeft={"16px"}
                align={"start"}
                fontSize={fontSizes.smallBody}
                fontWeight={fontWeights.semiBold}
                color={colors.primary}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setDisplayLineHistory(true);
                }}
              >
                See Line Histories
              </Text>
            </FlexibleDiv>
            <FlexibleDiv
              alignItems={"center"}
              paddingVertical={"0px"}
              flexDirection={"column"}
              justifyContent={"center"}
              width={"50%"}
            >
              <Text
                align={"center"}
                fontSize={fontSizes.body}
                fontWeight={fontWeights.bold}
                color={colors.black.strong}
              >
                Savings Balance
              </Text>
              <Text
                align={"center"}
                fontWeight={fontWeights.bold}
                color={colors.primary}
              >
                25,000NGA
              </Text>
              <Spacer />
              <Button
                onClick={() => {
                  // alert('Your Withdrawal was Successful')
                  setShowModal(true);
                }}
                btnColor={colors.white}
                fontSize={fontSizes.button}
                background={colors.red}
                btnText={"WITHDRAW"}
                size="large"
              />
            </FlexibleDiv>
          </FlexibleDiv>
          <Spacer />
        </FlexibleDiv>
      </DefaultCardstyle>
      {/* Modal for transaction card which is the Withdrawal card */}
      <Modal show={showModal} setShowModal={setShowModal}>
        <TransactionCard
          setShowModal={setShowModal}
          type={"Withdrawal"}
          setShowWithdrawalMsg={setShowWithdrawalMsg}
          setShowWithdrawalMsgCont={setShowWithdrawalMsgCont}
          showWithdrawalMsg={showWithdrawalMsg}
        />
      </Modal>
      {/* Modal for Line History */}
      <Modal show={displayLineHistory} setShowModal={setDisplayLineHistory}>
        <LineHistoryCard />
      </Modal>

      {/* Withdrawal message tooltip */}
      <WithdrawalMsg
        showWithdrawalMsg={showWithdrawalMsg}
        setShowWithdrawalMsg={setShowWithdrawalMsg}
        showWithdrawalMsgCont={showWithdrawalMsgCont}
        setShowWithdrawalMsgCont={setShowWithdrawalMsgCont}
      />
    </>
  );
};

export default TransactionOverviewCard;
