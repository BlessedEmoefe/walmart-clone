import styled from "styled-components"
import { CloseIcon } from "../../assets/svg"
import { colors } from "../../infrastructure/theme/colors"
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts"
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component"
import {IoIosCheckmarkCircleOutline} from "react-icons/io"
import {HiInformationCircle} from "react-icons/hi"
import { Text } from "../typography/text.component"
// import { useEffect } from "react"
const WithdrawalMsgCardContainer=styled.div`
position:absolute;

width: 100%;
display: ${({display})=>display ? display :'flex'};
align-items:center;
justify-content: center;
padding: 12px;
top:67px;
left: 0px;
right: 0px;
` 
const  WithdrawalMsgCard = styled.div`
width: 30%;
background-color: white;
border-radius: 10px;
box-shadow: 0px 3px 16px #00000029;
padding: 12px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transition: transform 0.5s ease-in-out;
transform: ${({transform})=>transform ? transform :'translateY(0%)'};
@media screen and (max-width:980px) {
    width: 50%;
}
@media screen and (max-width:680px) {
    width: 60%;
}
@media screen and (max-width:480px) {
    width: 80%;
}
`



const WithdrawalMsg=({showWithdrawalMsg,setShowWithdrawalMsg,showWithdrawalMsgCont,setShowWithdrawalMsgCont})=>{
    // useEffect(()=>{
    //     if(showWithdrawalMsgCont === true){
    //         setInterval(() => {
    //             setShowWithdrawalMsg(false)
    //         }, 5700);
    //         setInterval(() => {
    //             setShowWithdrawalMsgCont(false)
    //         }, 6100);
    //         // setShowWithdrawalMsg(false)
    //         // setShowWithdrawalMsgCont(false)
    //     }

    //    else{
    //         clearInterval(setShowWithdrawalMsgCont,setShowWithdrawalMsg)
    //     }
    // },[showWithdrawalMsgCont,setShowWithdrawalMsg])

   const closeToolTip=()=>{
        setShowWithdrawalMsg(false)
            setShowWithdrawalMsgCont(false)

    }
    return(
        < WithdrawalMsgCardContainer position={"absolute"} background={"white"} width={"300px"} display={showWithdrawalMsgCont ? 'flex' :'none'} >
          < WithdrawalMsgCard transform={showWithdrawalMsg ? 'translateY(0%)' :'translateY(-200%)'}>
          {/* Close Icon */}
          <FlexibleDiv justifyContent={'flex-end'} paddingVertical={"0px"} resFlexDirection={"row"} resjustifyContent={'flex-end'} >
            <CloseIcon  height={"10px"} width={"10px"} color={'black'} cursor={"pointer"} onClick={()=>{closeToolTip()}} />
            </FlexibleDiv>
            {/* Success Icon */}
            <FlexibleDiv justifyContent={'center'} paddingVertical={"0px"} resFlexDirection={"row"} resjustifyContent={'center'}>
            <IoIosCheckmarkCircleOutline size={"25px"} color={colors.green} />
            </FlexibleDiv>
            {/* Success Message */}
            <FlexibleDiv justifyContent={'center'} paddingVertical={"0px"} resFlexDirection={"row"} resjustifyContent={'center'}>
            <Text color={colors.black.strong} fontSize={fontSizes.button} 
            fontWeight={fontWeights.medium}> Your withdrawal was successful</Text>
            </FlexibleDiv>
            {/* Information */}
            <FlexibleDiv justifyContent={'flex-end'} paddingVertical={"0px"} resFlexDirection={"row"} width={"75%"} resjustifyContent={'flex-end'} >
            <HiInformationCircle color={colors.black.soft} cursor={"pointer"}/>
            </FlexibleDiv>
            {/* Download Invoice */}
            <FlexibleDiv justifyContent={'center'} paddingVertical={"1px"} resFlexDirection={"row"} resjustifyContent={'center'}>
            <Text color={colors.primary} fontSize={fontSizes.button} 
            fontWeight={fontWeights.medium} style={{cursor:"pointer"}}> Download Invoice</Text>
            </FlexibleDiv>

          </WithdrawalMsgCard>
        </ WithdrawalMsgCardContainer>
    )
}


export default WithdrawalMsg