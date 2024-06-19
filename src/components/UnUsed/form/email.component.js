import { colors } from "../../infrastructure/theme/colors";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Input } from "../input/input.component";
import { Label } from "./styles";



const Email = () => {
    return (
      <FlexibleDiv direction={"column"} width={"45%"}>
        <FlexibleDiv
          paddingVertical={"0px"}
          justifyContent={"flex-start"}
          resalignItems={"flex-start"}
        >
          <Label>Your Email</Label>
        </FlexibleDiv>
        <FlexibleDiv paddingVertical={"0px"}>
          <Input
            width={"100%"}
            borderRadius={"5px"}
            padding={"20px"}
            border={`1px solid ${colors.black.soft}`}
            background={"#f5f5f5"}
            placeholder={"Your email"}
          />
        </FlexibleDiv>
      </FlexibleDiv>
    );
}
 
export default Email;