import {
    // HeaderTextWrapper,
    TableBodyRow,
    Wrapper,
    OptionWrapper,
    MemberSinceText,
    SavingRateText,
    TotalAmountSavedText,
    DynamicTableText,
    CompletedDays,
    MonthDays,
    TimeStamp,
  } from "./customeTable.styles";

  import { BsThreeDotsVertical as OptionIcon } from "react-icons/bs";
  import { CustomerProfileRow } from "../customerProfileColumn/customerProfileColumn.component";
  import { truncate } from "../../infrastructure/lib/factory.lib";
import TableOptions from "./tableOptions.component";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { colors } from "../../infrastructure/theme/colors";
import React from "react";
const TableRow = React.forwardRef (({
    index,       
    userName,
    customerID,
    memberSince,
    timestamp,
    tableHead,
    savingRate,
    totalAmountSaved,
    dynamicValue,
    dynamicColor
},ref)=> {

        const [toggleOption,setToggleOption] = useState({})
        const navigate = useNavigate();
      
         const OptionHandler=(e,index)=>{
        //   e.stopPropagation()
          setToggleOption({...!toggleOption,[index]:!toggleOption[index]})
         }
        //  const ProfileRouteHandler=(e)=>{
        //   e.stopPropagation()
        //   navigate('/profile')
        //  }
         const CustomerOverviewRouteHandler=(e)=>{
          e.stopPropagation()
          navigate("/customer-overview");
         }
    return ( 
       <div ref={ref} style={{width:'100%'}} >
 <TableBodyRow
        key={index}
        // onClick={() => {
        //   navigate("/customer-overview");
        // }}
      >

        <OptionWrapper
          colWidth={"5%"}
        
        >
          <OptionIcon color={colors.black.strong} fontSize="1.5rem"   onClick={(e) => {
            OptionHandler(e,index);
          
          
         
          }} />
          <TableOptions toggle={toggleOption} index={index} setToggleOption={setToggleOption} componentRef={ref} />
        </OptionWrapper>
        <Wrapper
          colWidth={"25%"}
          onClick={(e) => {
           CustomerOverviewRouteHandler(e);
          }}
        >
          <CustomerProfileRow
            userName={userName}
            customerID={customerID}
          />
        </Wrapper>
        {memberSince ? (
          <Wrapper
            colWidth={"12%"}
            onClick={(e) => {
              CustomerOverviewRouteHandler(e);
            }}
          >
            <MemberSinceText>{memberSince}</MemberSinceText>
          </Wrapper>
        ) : null}

        {savingRate ? (
          <Wrapper
            colWidth={"10%"}
            flexDirection="column"
            onClick={(e) => {
              CustomerOverviewRouteHandler(e);
            }}
          >
            {Array.isArray(savingRate) ? (
              savingRate.map((item, index) => (
                <SavingRateText key={index}>{item}</SavingRateText>
              ))
            ) : (
              <SavingRateText>{savingRate}</SavingRateText>
            )}
          </Wrapper>
        ) : null}

        {totalAmountSaved ? (
          <Wrapper
            colWidth={"15%"}
            flexDirection="column"
            onClick={(e) => {
              CustomerOverviewRouteHandler(e);
            }}
          >
            {Array.isArray(totalAmountSaved) ? (
              totalAmountSaved.map((item, index) => (
                <TotalAmountSavedText key={index}>
                  {item}
                </TotalAmountSavedText>
              ))
            ) : (
              <TotalAmountSavedText>
                {truncate(totalAmountSaved, 20)}
              </TotalAmountSavedText>
            )}
          </Wrapper>
        ) : null}
        {dynamicValue ? (
          <Wrapper
            colWidth={"12%"}
            flexDirection="column"
            onClick={(e) => {
              CustomerOverviewRouteHandler(e);
            }}
          >
            {Array.isArray(dynamicValue) ? (
              tableHead[0].sixthCol === "Line" ? (
                dynamicValue.map((item, index) => (
                  <DynamicTableText
                    dynamicColor={dynamicColor}
                    key={index}
                  >
                    <CompletedDays dynamicColor={dynamicColor}>
                      {item}
                    </CompletedDays>
                    <MonthDays dynamicColor={dynamicColor}>
                      /31
                    </MonthDays>
                  </DynamicTableText>
                ))
              ) : (
                dynamicValue.map((item, index) => (
                  <DynamicTableText
                    dynamicColor={dynamicColor}
                    key={index}
                    
                  >
                    {item}
                  </DynamicTableText>
                ))
              )
            ) : (
              <DynamicTableText
                dynamicColor={dynamicColor}
              
              >
                {tableHead[0].sixthCol === "Line" ? (
                  <>
                    <CompletedDays dynamicColor={dynamicColor}>
                      {dynamicValue}
                    </CompletedDays>
                    <MonthDays dynamicColor={dynamicColor}>
                      /31
                    </MonthDays>
                  </>
                ) : (
                  dynamicValue
                )}
              </DynamicTableText>
            )}
          </Wrapper>
        ) : null}

        {timestamp ? (
          <Wrapper
            colWidth={"10%"}
            onClick={(e) => {
              CustomerOverviewRouteHandler(e);
            }}
          >
            <TimeStamp>{timestamp}</TimeStamp>
          </Wrapper>
        ) : null}
      </TableBodyRow>
       </div>
     );
})
 
export default TableRow;    