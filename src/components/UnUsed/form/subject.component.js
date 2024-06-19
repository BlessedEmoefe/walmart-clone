

import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Input } from "../input/input.component";
import { Label } from "./styles";
import { colors } from "../../infrastructure/theme/colors";



const Subject = () => {
    return (
      <FlexibleDiv direction={"column"} width={"45%"}>
        <FlexibleDiv
          paddingVertical={"0px"}
          justifyContent={"flex-start"}
          resalignItems={"flex-start"}
        >
          <Label>Subject</Label>
        </FlexibleDiv>
        <FlexibleDiv paddingVertical={"0px"}>
          <Input
            width={"100%"}
            borderRadius={"5px"}
            padding={"20px"}
            border={`1px solid ${colors.black.soft}`}
            background={"#f5f5f5"}
            placeholder={"Subject"}
          />
        </FlexibleDiv>
      </FlexibleDiv>
    );
}
 
export default Subject;