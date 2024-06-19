import React from "react";
import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { Div } from "../div/div.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import Calender /*, { Days } */ from "./calendar.component";
import { Col, Head } from "./lineHistoryCard.component";

const Span = styled(Text)`
  color: ${colors.black.strong};

  font-weight: ${fontWeights.semiBold};
  font-size: 0.71rem;
  margin-left: 6px;
`;

const MonthDetail = ({ month, year }) => {
  // const day = 30;

  return (
    <>
      <Head>
        <Text color={colors.white} fontSize={fontSizes.smallBody}>
          {" "}
          {month}
          {year}
        </Text>
      </Head>
      <Div
        display={"flex"}
        direction={"row"}
        align={"baseline"}
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
      >
        <Col
          display={"flex"}
          align={"start"}
          background={"red"}
          direction="row"
          justifyContent={"space-evenly"}
        >
          <Col display={"flex"} flexBasis={"50%"}>
            <Text
              color={colors.black.strong}
              fontWeight={fontWeights.bold}
              fontSize={fontSizes.smallBody}
            >
              Saving Rate: <Span> 5300 NGA</Span>
            </Text>
          </Col>
          <Col display={"flex"} flexBasis={"50%"}>
            {" "}
            <Text
              color={colors.black.strong}
              fontWeight={fontWeights.bold}
              fontSize={fontSizes.smallBody}
            >
              Withdrawal: <Span>carried over</Span>
            </Text>
          </Col>
        </Col>

        <Col
          display={"flex"}
          align={"start"}
          background={"red"}
          direction="row"
          justifyContent={"space-evenly"}
        >
          <Col display={"flex"} flexBasis={"50%"}>
            {" "}
            <Text
              color={colors.black.strong}
              fontWeight={fontWeights.bold}
              fontSize={fontSizes.smallBody}
            >
              Days Saved :<Span> 62</Span>
            </Text>
          </Col>
          <Col display={"flex"} flexBasis={"50%"}>
            {" "}
            <Text
              color={colors.black.strong}
              fontWeight={fontWeights.bold}
              fontSize={fontSizes.smallBody}
            >
              Line Closed: <Span>carried over</Span>
            </Text>
          </Col>
        </Col>
      </Div>

      <Calender />

      <Div width={"100%"}>
        <Text
          align={"start"}
          color={colors.black.strong}
          fontSize={fontSizes.caption}
          fontWeight={fontWeights.medium}
        >
          This savings line withdrawal was carried over to next line
        </Text>
      </Div>
      <Spacer />
    </>
  );
};

export default MonthDetail;
