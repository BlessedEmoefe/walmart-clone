import React, { useState } from "react";
import {
  IOUFixedCardContainer,
  InfoSection,
  IconSection,
  Title,
  SubTitle,
} from "./iouFixedCard.styles";
import { IOUIcon, FixedIcon } from "../../assets/svg";
import { Button } from "../button/button.component";
import { colors } from "../../infrastructure/theme/colors";
import { Spacer } from "../spacer/spacer.component";
import { HiOutlineArrowNarrowRight as RightArrow } from "react-icons/hi";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { fontWeights } from "../../infrastructure/theme/fonts";
import Modal from "../modal/modal.component";
import TransactionCard from "../transactionCards/transactionCards.component";

import { useNavigate } from "react-router-dom";

export const IUOFixedCard = ({
  IOU,
  Fixed,
  totalAmount,
  totalCustomers,
  color,
  width,
  path,
  double,
  bg,
}) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showRequestIOUModal, setShowRequestIOUModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  let navigate = useNavigate();

  return (
    <IOUFixedCardContainer width={width} bg={bg}>
      <FlexibleDiv
        paddingVertical={"0px"}
        alignItems={"start"}
        flexWrap={"nowrap"}
        resFlexDirection={"row"}
        resalignItems={"flex-start"}
      >
        <InfoSection paddingVertical="0">
          <Title color={color}>{IOU ? "IOU" : Fixed ? "Fixed" : "None"}</Title>
          <Spacer size="0.3rem" />
          <Title color={color}>{totalAmount}NGA</Title>
          <Spacer size="0.3rem" />
          <SubTitle>{totalCustomers} Customers</SubTitle>
          <Spacer size="0.5rem" />
        </InfoSection>
        <IconSection paddingVertical="0">
          {IOU ? (
            <IOUIcon color={color} />
          ) : Fixed ? (
            <FixedIcon color={color} />
          ) : (
            "None"
          )}
        </IconSection>
      </FlexibleDiv>

      <FlexibleDiv
        paddingVertical={"17px"}
        justifyContent={double ? "space-evenly" : "flex-start"}
      >
        {/* If Card does not have double as true it displays only one button */}
        {double !== true && (
          <FlexibleDiv paddingVertical={"0px"} width={"50%"} resWidth={"80%"}>
            <Button
              btnText="View All"
              RightIcon={RightArrow}
              background="transparent"
              border={`1px solid ${colors.primary}`}
              btnColor={colors.primary}
              size="large"
              // textTransform
              // fontWeight
              // fontSize
              onClick={() => {
                navigate(path);
              }}
            />
          </FlexibleDiv>
        )}

        {/* If Card has double as true it displays two buttons */}
        {double === true && (
          <>
            {
              IOU ? ( // Displays these buttons when card type is defined as IOU
                <FlexibleDiv paddingVertical={"0px"}>
                  <FlexibleDiv
                    paddingVertical={"10px"}
                    width={"45%"}
                    boxLayout={"5px"}
                  >
                    <Button
                      fontSize={"13px"}
                      fontWeight={fontWeights.semiBold}
                      btnText={"Pay Back"}
                      background={colors.purple}
                      size="large"
                      onClick={() => {
                        setShowModal(true);
                      }}
                    />
                  </FlexibleDiv>
                  <Modal show={showModal} setShowModal={setShowModal}>
                    <TransactionCard
                      type={"PayBack"}
                      setShowModal={setShowModal}
                    />
                  </Modal>

                  <FlexibleDiv
                    paddingVertical={"0px"}
                    width={"45%"}
                    boxLayout={"5px"}
                  >
                    <Button
                      fontSize={"13px"}
                      fontWeight={fontWeights.semiBold}
                      btnColor={colors.purple}
                      btnText={"Request"}
                      background={"transparent"}
                      border={`.4px solid ${colors.purple}`}
                      size="large"
                      onClick={() => {
                        setShowRequestIOUModal(true);
                      }}
                    />
                  </FlexibleDiv>

                  <Modal
                    show={showRequestIOUModal}
                    setShowModal={setShowRequestIOUModal}
                  >
                    <TransactionCard
                      type={"PayBack"}
                      setShowModal={setShowRequestIOUModal}
                    />
                  </Modal>
                </FlexibleDiv>
              ) : Fixed ? ( // Displays these buttons when card type is defined as Fixed
                <FlexibleDiv paddingVertical={"0px"}>
                  <FlexibleDiv
                    paddingVertical={"10px"}
                    width={"45%"}
                    boxLayout={"5px"}
                  >
                    <Button
                      fontSize={"13px"}
                      btnText={"Add"}
                      size="large"
                      onClick={() => {
                        setShowAddModal(true);
                      }}
                      background={colors.teal}
                      fontWeight={fontWeights.semiBold}
                    />
                  </FlexibleDiv>

                  <FlexibleDiv
                    paddingVertical={"0px"}
                    width={"45%"}
                    boxLayout={"5px"}
                  >
                    <Button
                      fontSize={"13px"}
                      btnColor={colors.teal}
                      btnText={"Request"}
                      background={"transparent"}
                      size="large"
                      onClick={() => {
                        setShowRequestModal(true);
                      }}
                      border={`.4px solid ${colors.teal}`}
                      fontWeight={fontWeights.semiBold}
                    />
                  </FlexibleDiv>
                  <Modal show={showAddModal} setShowModal={setShowAddModal}>
                    <TransactionCard
                      type={"AddFixedSavings"}
                      setShowModal={setShowAddModal}
                    />
                  </Modal>
                  <Modal
                    show={showRequestModal}
                    setShowModal={setShowRequestModal}
                  >
                    <TransactionCard
                      type={"RequestFixedSavings"}
                      setShowModal={setShowRequestModal}
                    />
                  </Modal>
                </FlexibleDiv>
              ) : (
                ""
              ) // Displays nothing when card type is not defined
            }
          </>
        )}
      </FlexibleDiv>
    </IOUFixedCardContainer>
  );
};
