import React from 'react';
import { Div } from '../div/div.component';
import styled from "styled-components";
import { colors } from '../../infrastructure/theme/colors';
export const Days = styled.div`
  // display:flex;
  // flex-basis: 8%;
  background: ${({background})=>background ? background : colors.red};
  height:16px;
  cursor: pointer;
  width: ${({width})=>width ? width : '16px'};
  margin-right: 8px;
  margin-top: 8px;
  padding:2px 2px 2px 2px;
  border-radius:2px;
`;
const Calender = ({dayColor}) => {
    const day = 30;
    return ( 
        <>
        <Div      display={"flex"}
        flexWrap={"wrap"}
        direction={"row-reverse"}
        align={"center"}
        justifyContent={"start"} 
        background={'grey'}
        
        >
<Days background={colors.black.light} />
</Div>
   <Div
        display={"flex"}
        flexWrap={"wrap"}
        direction={"row-reverse"}
        align={"center"}
        justifyContent={"start"}
        padding={'0px 0px 0px 15px'}
        breakPoint={"680px"}
        resJustifyContent={"center"}
      >
        {[...Array(day)].map((e, i) => (
          <Days background={dayColor} key={i} />
        ))}
      </Div>
        </>
     );
}
 
export default Calender;