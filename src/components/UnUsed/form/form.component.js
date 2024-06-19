import { colors } from "../../infrastructure/theme/colors";
import { Button } from "../button/button.component";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import Email from "./email.component";
import Message from "./message.component";
import Name from "./name.component";
import { FormContainer } from "./styles";
import Subject from "./subject.component";
import UserType from "./userType.component";



const Form = () => {
    const FormHandler=(e)=>{
        e.preventDefault();
    }
    return ( 
        <FormContainer onSubmit={(e)=>{FormHandler(e)}} > 
            <FlexibleDiv>
                <Name/>
                <Email/>
                <UserType/>
                <Subject/>
                <Message/>

                <FlexibleDiv justifyContent={'flex-start'} resalignItems={'flex-start'}>
                <FlexibleDiv paddingVertical={'0px'} width={'400px'}>
                <Button width={"70%"} background={colors.primary} paddin={"10px"} borderRadius={'5px'} btnText={"Send"}/>
                </FlexibleDiv>
                </FlexibleDiv>
            </FlexibleDiv>
        </FormContainer>
     );
}
 
export default Form;