import React, { useState } from "react";
import { colors } from "../../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../../infrastructure/theme/fonts";
import { Button } from "../../button/button.component";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";
import { Input } from "../../input/input.component";
import { Spacer } from "../../spacer/spacer.component";
import { DefaultCardstyle } from "../transactionCards/defualtcard.style";
import { Text } from "../../typography/text.component";
import imgPlaceholder from "../../assets/images/imgPlaceholder.png";
const NewCustomer = ({ setShowModal }) => {
  const [Image, setImage] = useState();
  const [display, setDisplay] = useState(false);
  const addImage = (e) => {
    const [file] = e.target.files;
    setImage(URL.createObjectURL(file));
    setDisplay(true);
    setTimeout(() => {
      setDisplay(false);
    }, 5000);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [savingsRate, setSavingsRate] = useState("");
  const [address, setAddress] = useState("");

  const CreateCustomer = () => {
    setShowModal(false);
  };
  return (
    <>
      <DefaultCardstyle
        onClick={(e) => e.stopPropagation()}
        breakPoint={"680px"}
        resMargin={"300px 0px 100px 0px"}
        resFlexBasis={"85%"}
        smallScreenMargin={"630px 0px 120px 0px"}
        flexBasis={"60%"}
      >
        <FlexibleDiv
          boxedLayout={"23px"}
          justifyContent={"flex-start"}
          flexDirection={"column"}
        >
          <FlexibleDiv paddingVertical={"0px"} justifyContent={"flex-start"}>
            <Text
              color={colors.black.strong}
              fontSize={fontSizes.smallTitle}
              fontWeight={fontWeights.bold}
            >
              New Customer Account
            </Text>
          </FlexibleDiv>

          <FlexibleDiv paddingVertical={"0px"} justifyContent={"flex-start"}>
            <Text
              color={colors.black.strong}
              fontSize={fontSizes.smallBody}
              fontWeight={fontWeights.medium}
            >
              Kindly fiil in the details below of the customer
            </Text>
          </FlexibleDiv>

          {/* Inputs */}

          {/* Names */}
          <FlexibleDiv paddingVertical={"22px"}>
            <FlexibleDiv paddingVertical={"0px"} width={"45%"}>
              <Input
                label={"First Name"}
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                labelFontSize={`${fontSizes.caption}!important`}
              />
            </FlexibleDiv>
            <Spacer />
            <FlexibleDiv paddingVertical={"0px"} width={"45%"}>
              <Input
                labelFontSize={`${fontSizes.caption}!important`}
                label={"Last Name"}
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </FlexibleDiv>
          </FlexibleDiv>

          {/* Phone Nummber And Daily Saving Rate */}

          <FlexibleDiv paddingVertical={"22px"}>
            <FlexibleDiv paddingVertical={"0px"} width={"45%"}>
              <Input
                labelFontSize={`${fontSizes.caption}!important`}
                label={"Phone Number"}
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </FlexibleDiv>
            <Spacer />
            <FlexibleDiv paddingVertical={"0px"} width={"45%"}>
              <Input
                labelFontSize={`${fontSizes.caption}!important`}
                label={"Daily Saving Rate"}
                value={savingsRate}
                onChange={(e) => {
                  setSavingsRate(e.target.value);
                }}
              />
            </FlexibleDiv>
          </FlexibleDiv>

          {/* Address And Email */}

          <FlexibleDiv paddingVertical={"22px"}>
            <FlexibleDiv paddingVertical={"0px"} width={"45%"}>
              <Input
                labelFontSize={`${fontSizes.caption}!important`}
                label={"Address"}
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </FlexibleDiv>
            <Spacer />
            <FlexibleDiv paddingVertical={"0px"} width={"45%"}>
              <Input
                labelFontSize={`${fontSizes.caption}!important`}
                label={"Email"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FlexibleDiv>
          </FlexibleDiv>

          {/* Add Image */}

          <FlexibleDiv flexDirection={"column"} justifyContent={"center"}>
            <FlexibleDiv justifyContent={"center"} paddingVertical={"0px"}>
              <input
                id="input"
                onChange={addImage}
                type={"file"}
                style={{ display: "none" }}
                accept="image/*"
              />

              <label style={styles.label} htmlFor="input">
                <img
                  src={imgPlaceholder}
                  alt="imgPlaceholder"
                  style={styles.img}
                />{" "}
                Add Image
              </label>
            </FlexibleDiv>

            {display && (
              <FlexibleDiv
                display={Image ? "flex" : "none"}
                paddingVertical={"0px"}
                justifyContent={"center"}
              >
                <Text color={colors.green} fontSize={fontSizes.small}>
                  Image Added
                </Text>
              </FlexibleDiv>
            )}
          </FlexibleDiv>

          <FlexibleDiv paddingVertical={"0px"} justifyContent={"center"}>
            <FlexibleDiv
              justifyContent={"center"}
              paddingVertical={"0px"}
              width={"80%"}
            >
              <Button
                btnText={"Create Customer"}
                btnColor={"#fff"}
                size="large"
                onClick={() => {
                  CreateCustomer();
                }}
              />
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </DefaultCardstyle>
    </>
  );
};

export default NewCustomer;

const styles = {
  label: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "12px",
    color: colors.black.strong,
    fontSize: fontSizes.smallBody,
    fontWeight: fontWeights.semiBold,
    cursor: "pointer",
    zIndex: "0",
    background: "none",
    boxShadow: "none",
    left: "inherit",
    top: "inherit",
    right: "inherit",
  },
  img: {
    width: "50px",
    // marginRight:"12px"
  },
};
