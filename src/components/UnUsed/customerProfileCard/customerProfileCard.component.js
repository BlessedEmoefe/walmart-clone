// import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { DefaultCardstyle } from "../transactionCards/defualtcard.style";
import { Text } from "../typography/text.component";
import {
  Col,
  FlexRow,
  DescriptiveText,
  Image,
  Span,
  TextCol,
  CustomerInfo,
  CustomerSavingsInfo,
  PhoneCol,
  AddressCol,
} from "./customerProfileCard.style";
import { colors } from "../../infrastructure/theme/colors";

import Image1 from "../../assets/images/image.png";
import { fontWeights } from "../../infrastructure/theme/fonts";
const CustomerProfileCard = ({
  customerName,
  customerID,
  savingsRate,
  phoneNo,
  customerAddress,
  customerEmail,
  grandTotal
}) => {
  return (
    <>
      <DefaultCardstyle flexBasis={"97%"} width={"100%"} boxShadow={'none'} radius={"3px"} resWidth={'100%'} padding={'33px 13px'} breakpoint={"1180px"} resMargin={"20px 0px"} >
        <FlexRow >
          <CustomerInfo breakpoint={'680px'} resflexBasis={"100%"}  flexBasis="50%" justifyContent={'flex-start'}>
            <Image src={Image1} />

            <TextCol  margin="0px 0px 0px 13px" lineHeight={"9px"}>
              <Text
                lineHeight="18px"
                color={colors.black.strong}
                fontSize={"14px"}
                align="start"
                resalign="start"
              >
                {customerName}
              </Text>
              <DescriptiveText
                
                lineHeight="18px"
                color={colors.black.strong}
                fontSize={"12px"}
              >
                Customer ID :
                <Span fontSize="12px" lineHeight="0px">
                  {" "}
                  {customerID}
                </Span>
              </DescriptiveText>
            </TextCol>
          </CustomerInfo>

          <CustomerSavingsInfo>
            <TextCol>
              <Text fontWeight={fontWeights.semiBold} lineHeight="18px" fontSize="14px">
                Savings Rate
              </Text>
              <Text
                lineHeight="18px"
                fontWeight="bold"
                fontSize="14px"
                color={colors.black.strong}
              >
                {savingsRate}
              </Text>
            </TextCol>
            <TextCol>
              <Text fontWeight={fontWeights.semiBold} lineHeight="18px" fontSize="14px">
                Grand Total
              </Text>
              <Text
                lineHeight="18px"
                fontWeight="bold"
                fontSize="14px"
                color={colors.black.strong}
              >
               NGN {grandTotal}
              </Text>
            </TextCol>
          </CustomerSavingsInfo>
        </FlexRow>

        <FlexRow>
          <PhoneCol alignItems="start" flexBasis="55%" flexDirection="column">
            <TextCol margin="13px 0px 0px 0px">
              <Text
                fontWeight={fontWeights.bold}
                color={colors.black.strong}
                align="start"
                fontSize="12px"
                resalign={'start'}
              >
                Phone
              </Text>
              <Text fontWeight={fontWeights.medium} color={colors.black.strong} fontSize="14px">
                {phoneNo}
              </Text>
            </TextCol>
            </PhoneCol>
            <AddressCol>
           
              <Text
                fontWeight={fontWeights.bold}
                color={colors.black.strong}
                align="inherit"
                fontSize="12px"
                resalign={'inherit'}
              >
                Address
              </Text> 
              <Text align="inherit" resalign={'inherit'} fontWeight={fontWeights.medium} color={colors.black.strong} fontSize="14px">
                {customerAddress}
              </Text>

            </AddressCol>

          <Col alignItems="start" flexBasis="100%" flexDirection="column">
            <TextCol margin="13px 0px 0px 0px">
              <Text
                fontWeight={fontWeights.bold}
                color={colors.black.strong}
                align="start"
                fontSize="12px"
                resalign={'start'}
              >
                Email
              </Text>
              <Text fontWeight={fontWeights.medium} color={colors.black.strong} fontSize="14px">
                {customerEmail}
              </Text>
            </TextCol>
          </Col>
        </FlexRow>
      </DefaultCardstyle>
    </>
  );
};

export default CustomerProfileCard;
