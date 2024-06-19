import React from "react";
import {
  TableContainer,
  TableHeader,
  // HeaderTextWrapper,
  HeaderText,
  TableBody,
  // TableBodyRow,
  Wrapper,
  // OptionWrapper,
  // MemberSinceText,
  // SavingRateText,
  // TotalAmountSavedText,
  // DynamicTableText,
  // CompletedDays,
  // MonthDays,
  // TimeStamp,
} from "./customeTable.styles";
// import { generateID } from "../../infrastructure/lib/generateID";
// import { OverFlowScrollBar } from "../OverflowScroll/styles";
// import Pagination from "../Paginator/Paginator.component";
// import NoData from "../NoData";
// import { BsThreeDotsVertical as OptionIcon } from "react-icons/bs";
// import Image1 from "../../assets/images/image.png";
import { colors } from "../../infrastructure/theme/colors";
// import { CustomerProfileRow } from "../customerProfileColumn/customerProfileColumn.component";
// import { useNavigate } from "react-router-dom";
// import { truncate } from "../../infrastructure/lib/factory.lib";
// import TableOptions from "./tableOptions.component";
// import { useState } from "react";
import TableRow from "./tableRow.component";
import { useMemo } from "react";

const CustomTable = ({ tableHead, tableContent }) => {
  const dynamicColor =
    tableHead[0].type === "CUSTOMER_REACHED"
      ? colors.black.strong
      : tableHead[0].type === "AMOUNT_DEPOSITED"
      ? colors.green
      : tableHead[0].type === "AMOUNT_WITHDRAWN"
      ? colors.red
      : tableHead[0].type === "IOU"
      ? colors.purple
      : tableHead[0].type === "FIXED"
      ? colors.teal
      : colors.primary;

  //     const [toggleOption,setToggleOption] = useState({})
  // const navigate = useNavigate();

  //  const OptionHandler=(e,index)=>{
  //   e.stopPropagation()
  //   setToggleOption({...!toggleOption,[index]:!toggleOption[index]})
  //  }
  //  const ProfileRouteHandler=(e)=>{
  //   e.stopPropagation()
  //   navigate('/profile')
  //  }
  //  const CustomerOverviewRouteHandler=(e)=>{
  //   e.stopPropagation()
  //   navigate("/customer-overview");
  //  }

  //  const RouteHandler=(e,route)=>{
  //    e.stopPropagation()
  //     if(route){
  //       navigate(route)
  //     }

  //     else{
  //       alert("Function takes you to the specified route")
  //      return;
  //     }

  //  }
  const componentRef =  useMemo(() => tableContent.map(i=> React.createRef()), [tableContent]);


  return (
    <>
      <TableContainer paddingVertical={"0"}>
        {/* This is the header for the table */}
        {tableHead.map(
          (
            {
              firstCol,
              secondCol,
              thirdCol,
              fourthCol,
              fifthCol,
              sixthCol,
              seventhCol,
            },
            index
          ) => (
            <TableHeader paddingVertical={"0"} key={index}>
              {firstCol ? (
                <Wrapper paddingVertical={"0"} colWidth={"5%"}>
                  <HeaderText>{firstCol}</HeaderText>
                </Wrapper>
              ) : null}

              {secondCol ? (
                <Wrapper paddingVertical={"0"} colWidth={"25%"}>
                  <HeaderText>{secondCol}</HeaderText>
                </Wrapper>
              ) : null}

              {thirdCol ? (
                <Wrapper paddingVertical={"0"} colWidth={"12%"}>
                  <HeaderText>{thirdCol}</HeaderText>
                </Wrapper>
              ) : null}

              {fourthCol ? (
                <Wrapper paddingVertical={"0"} colWidth={"10%"}>
                  <HeaderText>{fourthCol}</HeaderText>
                </Wrapper>
              ) : null}

              {fifthCol ? (
                <Wrapper paddingVertical={"0"} colWidth={"15%"}>
                  <HeaderText>{fifthCol}</HeaderText>
                </Wrapper>
              ) : null}

              {sixthCol ? (
                <Wrapper paddingVertical={"0"} colWidth={"12%"}>
                  <HeaderText>{sixthCol}</HeaderText>
                </Wrapper>
              ) : null}

              {seventhCol ? (
                <Wrapper paddingVertical={"0"} colWidth={"10%"}>
                  <HeaderText>{seventhCol}</HeaderText>
                </Wrapper>
              ) : null}
            </TableHeader>
          )
        )}
        {/* This is the table body */}
        <TableBody paddingVertical={"0"}>
          {tableContent.map(
            (
              {
                userName,
                customerID,
                memberSince,
                savingRate,
                totalAmountSaved,
                dynamicValue,
                timestamp,
              },
              index
            ) => (
              <>

              <TableRow ref={componentRef[index]}  index={index} key={index} userName={userName} customerID={customerID} memberSince={memberSince} savingRate={savingRate} totalAmountSaved={totalAmountSaved} dynamicValue={dynamicValue} timestamp={timestamp} dynamicColor={dynamicColor} tableHead={tableHead} />
              </>
            )
          )}
        </TableBody>
      </TableContainer>
    </>
  );
};

export default CustomTable;