import Countdown from "react-countdown";
import { SubText, TimerText } from "../../features/Overview/Overview.styles";
import React, { useState } from "react";

const Completion = () => <TimerText>Time Up, Refresh</TimerText>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completion />;
  } else {
    // Render a countdown
    return (
      <TimerText>
        {" "}
        {hours}:{minutes}:{seconds}
      </TimerText>
    );
  }
};
const Timer = () => {
  let stHr = Date.now() + 8.64e7;
  const [timer, setTimer] = useState(stHr);
  return (
    <>
      <Countdown date={timer} renderer={renderer} />,
      <SubText
        style={{ margin: "0px", cursor: "pointer" }}
        onClick={() => {
          setTimer(Date.now() + 8.64e7);
        }}
      >
        Time to Refresh
      </SubText>
    </>
  );
};

export default Timer;
