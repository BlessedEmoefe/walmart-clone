import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import {TextArea } from "../input/input.component";
import { Label } from "./styles";
import { colors } from "../../infrastructure/theme/colors";

const Message = () => {
  return (
    <FlexibleDiv direction={"column"}>
      <FlexibleDiv
        paddingVertical={"0px"}
        justifyContent={"flex-start"}
        resalignItems={"flex-start"}
      >
        <Label> Message</Label>
      </FlexibleDiv>
      <FlexibleDiv>
        <TextArea
          background={"#f5f5f5"}
          borderRadius={"5px"}
          border={`1px solid ${colors.black.soft}`}
          placeholder={"Message the admin"}
        />
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default Message;
