import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";
import {BsPrinter} from "react-icons/bs"
// import { useEffect } from "react";
import { useRef } from "react";
import ReactToPrint from "react-to-print";

const TableOptionStyles = styled(FlexibleDiv)`
 position: absolute;
 z-index: 1;
 border-radius: 3px;
 background-color: white;
 flex-direction: column;
 justify-content: center;
 width: 120px;
 padding: 3px 8px;
 left:8px;
box-shadow: 0px 0px 5px lightgrey;
 top: 120%;
 transition: display 0.5s ease-in-out;
`

const Option = styled(FlexibleDiv)`
gap: 8px;
justify-content: flex-start;
padding: 0px;
cursor: pointer;

@media only screen and (max-width:800px){
    flex-direction: row;
}
`

const TableOptions = ({toggle,index,setToggleOption,componentRef}) => {
    const ref = useRef();
    // useEffect(() => {
    //     //This useEffect handles the closing of the tooltip from outside
    //     let handler = (event) => {
    //       if (!ref.current.contains(event.target)) {
    //         setToggleOption(false);
    //       }
    //     };
    
    //     document.addEventListener("mousedown", handler);
    //     return () => {
    //       document.removeEventListener("mousedown", handler);
    //     };
    //   });
    return ( 
        <>
       <div ref={ref}>
        <TableOptionStyles display={toggle[index] ? 'flex' : 'none'} >

         <ReactToPrint
         onBeforeGetContent={()=>setToggleOption(false)}
        trigger={() => <Option display={toggle[index] ? 'flex' : 'none'} >
          <BsPrinter color="black" />
          <Text color="black" fontSize={"11px"}>Print</Text>
          </Option>}
        content={() => componentRef.current}
      />
       </TableOptionStyles></div>
        </>
     );
}
 
export default TableOptions;