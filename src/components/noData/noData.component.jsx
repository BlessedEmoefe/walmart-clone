/*
 * component: NoData
 * author: Favour George
 * Date: April 15, 2020
 * Display message when there is no available content
 */


import React from 'react';
import {FlexibleDiv} from "../flexibleDiv/flexibleDiv.component";
import {NoDataMain} from "./noData.styles";

const NoData = ({message}) => {
  return (
    <FlexibleDiv
      justifyContent={"center"}
      alignItems={"center"}
    >
      <NoDataMain>
        <p>{message}</p>
      </NoDataMain>
    </FlexibleDiv>
  );
};

export default NoData;