import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { colors } from "../../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";
import Modal from "../../modal/modal.component";
import SavingsCard from "../../savingsCard/savingsCard.component";
// import { Spacer } from '../../spacer/spacer.component';
import { DefaultCardstyle } from "../../transactionCards/defualtcard.style";
import { Text } from "../../typography/text.component";

const ActivityHistoryToolTip = ({ setDisplayToolTip, show }) => {
  const [openModal, setOpenModal] = useState(false);
  const [addSavings, setAddSavings] = useState(false);

  const ref = useRef();

  useEffect(() => {
    //This useEffect handles the closing of the tooltip from outside
    let handler = (event) => {
      if (!ref.current.contains(event.target)) {
        setDisplayToolTip(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

   const OPEN_CLOSE_DIV = styled(FlexibleDiv)`
  @media only screen and (max-width:680px){
   margin-bottom:9px;
  };
  `
     const ToolTipWrapper = styled(DefaultCardstyle)`
     @media only screen and (max-width:680px){
      top:80px;
       width:95%;
     }`

  return (
    <>
      <div ref={ref}>
        <ToolTipWrapper
          position={"absolute"}
          zIndex={"9"}
          resWidth={"98%"}
          boxShadow={"0px 1px 5px #3c403c"}
          display={show ? "flex" : "none"}
          right={"0"}
          flexBasis={"70%"}
          top={"50px"}
          width={"90%"}
          alignItems={"start"}
          padding={"1rem"}
          style={{ maxWidth: "450px" }}
        >
          <FlexibleDiv
            resalignItems={"flex-end"}
            justifyContent={"end"}
            paddingVertical={"0px"}
            resFlexDirection={'row'}
          >
            <OPEN_CLOSE_DIV
              resWidth={"100%"}
              resalignItems={"flex-end"}
              resFlexDirection={"rows"}
              flexDirection={"row"}
              width={"auto"}
              paddingVertical={"0px"}
            >
              <Text
                style={{ cursor: "pointer", marginRight: "7vh" }}
                fontWeight={fontWeights.semiBold}
                lineHeight={"18px"}
                color={colors.primary}
                fontSize={fontSizes.caption}
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Edit
              </Text>
              <Text
                style={{ cursor: "pointer" }}
                fontWeight={fontWeights.semiBold}
                lineHeight={"18px"}
                color={colors.red}
                fontSize={fontSizes.caption}
                onClick={() => {
                  setDisplayToolTip(false);
                }}
              >
                Remove
              </Text>
            </OPEN_CLOSE_DIV>
            <FlexibleDiv paddingVertical={"0px"}>
              <Text
                lineHeight={"18px"}
                fontWeight={fontWeights.regular}
                color={colors.black.strong}
                fontSize={fontSizes.caption}
              >
                Paying back 5000 naira out of the 10,000 naira I collected in
                the months of September
              </Text>
            </FlexibleDiv>
          </FlexibleDiv>
        </ToolTipWrapper>
      </div>
      <Modal show={openModal} setShowModal={setOpenModal}>
        <SavingsCard
          show={openModal}
          setShowModal={setOpenModal}
          addSavings={addSavings}
          setAddSavings={setAddSavings}
        />
      </Modal>
    </>
  );
};

export default ActivityHistoryToolTip;
