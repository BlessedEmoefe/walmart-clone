import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";


export const DropDownWrapper = styled.div`
width: ${({width})=>width ? width :"100%"};
padding: ${({padding})=>padding ? padding :""} ;
height: ${({height})=>height ? height :""} ;
background-color: ${({bg})=>bg ? bg :"white"};
border-radius: ${({radius})=>radius ? radius :'5px'};
border: ${({border})=>border ? border :'1px solid lightgrey'};
position: relative;
border-bottom: ${({borderBottom})=>borderBottom ?borderBottom :""};
border-left: ${({borderLeft})=>borderLeft ? borderLeft :''};
border-right: ${({borderRight})=>borderRight ? borderRight :''};
border-top: ${({borderTop})=>borderTop ? borderTop :''};
border-bottom-left-radius:  ${({bottomLeftRd})=>bottomLeftRd ? bottomLeftRd :''} ;
border-bottom-right-radius:  ${({bottomRightRd})=>bottomRightRd ? bottomRightRd :''} ;
`

export const ValueContainer = styled(FlexibleDiv)`
padding-left: 15px;
padding-right: 15px;
display:flex;
align-items:center;
justify-content: space-between;
@media screen and (max-width:880px) {
    flex-direction: row;
}

`

export const OptionsContaniner = styled.div`
width:100.5%;
background-color:white;
padding: 0px 0px;
z-index: 999;
position: absolute;
left: -1px;
right:0px;
top: 102%;
display: ${({display})=>display ? display :''};
border-bottom: ${({borderBottom})=>borderBottom ?borderBottom :""};
border-left: ${({borderLeft})=>borderLeft ? borderLeft :''};
border-right: ${({borderRight})=>borderRight ? borderRight :''};
border-top: ${({borderTop})=>borderTop ? borderTop :''};
border-bottom-left-radius:  ${({bottomLeftRd})=>bottomLeftRd ? bottomLeftRd :''} ;
border-bottom-right-radius:  ${({bottomRightRd})=>bottomRightRd ? bottomRightRd :''} ;
overflow-x: auto;

`

export const Option = styled.option`
font-size: 12px;
line-height: 2.5rem;
padding: 0px 15px 0px 15px;
color:black;
font-weight: 500;
position: relative;
border-bottom:0.1px solid #f7f7f7;
background: ${({background})=>background ? background: ''};
cursor:pointer;
width: 100%;
transition: background 0.5s ease-in-out;
&:hover{
    background: #f7f7f7;
}
`