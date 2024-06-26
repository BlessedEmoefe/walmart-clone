import { useRef, useState, useEffect } from "react";
import {
  FaAngleDown as DropDownIcon,
  FaAngleUp as DropUpIcon,
} from "react-icons/fa";
import { Text } from "../typography/text.component";
import {
  DropDownWrapper,
  Option,
  OptionsContaniner,
  ValueContainer,
} from "./dropDown.styles";

const DropDown = ({ components, label }) => {
  // REFS AND STATES
  const ref = useRef();
  const [toggle, setToggle] = useState(false);
  const [dropDownValue, setDropDownValue] = useState(label || components[0]);

  //   FUNCTIONS
  const ValueHandler = (e) => {
    // THIS FUNCTION HANDLES THE VALUE OF THE DROP DOWN
    const newValue = e.target.innerHTML;
    setDropDownValue(newValue);
    setToggle(false);
  };

  //   USE-EFFECTS
  // useEffect(() => {
  //   if (typeof components === "object") {
  //     return components;
  //   } else {
  //     console.error("ERROR: Component must be an array of objects");
  //     console.warn(
  //       "Drop Down error Fix: Try passing elements into components argument => \n components[...elements]"
  //     );
  //   }
  // }, [components]);

  useEffect(() => {
    let handler = (event) => {
      if (!ref.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div style={{ width: "100%" }} ref={ref}>
        <DropDownWrapper
          border={toggle ? "none" : ""}
          borderTop={toggle ? "1px solid lightgrey" : ""}
          borderRight={toggle ? "1px solid lightgrey" : ""}
          borderLeft={toggle ? "1px solid lightgrey" : ""}
          bottomLeftRd={toggle ? "0px" : ""}
          bottomRightRd={toggle ? "0px" : ""}
        >
          <ValueContainer paddingVertical={"5px"}>
            <Text fontSize={"16px"} fontWeight={"700"} color="black" margin={"0px"}>
              {dropDownValue}
            </Text>
            {!toggle ? (
              <DropDownIcon
                color={"#fff"}
                className="dropDownIcon"
                size={20}
                cursor={"pointer"}
                onClick={() => {
                  setToggle(true);
                }}
              />
            ) : (
              <DropUpIcon
                color={"#fff"}
                size={20}
                className="dropDownIcon"
                cursor={"pointer"}
                onClick={() => {
                  setToggle(false);
                }}
              />
            )}
          </ValueContainer>
          <OptionsContaniner
            display={toggle ? "block" : "none"}
            borderBottom={toggle ? "1px solid lightgrey" : ""}
            borderRight={toggle ? "1px solid lightgrey" : ""}
            borderLeft={toggle ? "1px solid lightgrey" : ""}
            bottomLeftRd={toggle ? "5px" : ""}
            bottomRightRd={toggle ? "5px" : ""}
          >
            {!label ? null : (
              <Option
                background={"#f7f7f7"}
                onClick={(e) => {
                  ValueHandler(e);
                }}
              >
                {label}
              </Option>
            )}
            {components?.map((items, index) => (
              <Option
                onClick={(e) => {
                  ValueHandler(e);
                }}
                key={index}
              >
                {items}
              </Option>
            ))}
          </OptionsContaniner>
        </DropDownWrapper>
      </div>
    </>
  );
};

export default DropDown;
