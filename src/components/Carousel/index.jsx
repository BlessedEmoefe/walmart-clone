import React, { useState, useEffect } from "react";
import { ScrollingContainer } from "./scrollingCard.styled";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import {
  FaChevronRight as RightIcon,
  FaChevronLeft as LeftIcon,
} from "react-icons/fa6";

const ScrollingDiv = ({
  children,
  autoScroll = true,
  scrollOuterBg,
  scrollInnerWidth,
  scrollInnerPad,
  scrollCardWidth,
  scrollCardHeight,
  scrollCardBg,
  scrollArrowBg,
  scrollArrowCol,
  scrollCardGaps,
}) => {
  const cards = React.createRef();

  const [callScroll, setCallScroll] = useState(true);
  const [scrollLeftValue, setScrollLeftValue] = useState(null);
  const [scrollLeftMaxValue, setScrollLeftMaxtValue] = useState(null);

  const handleScroll = (direction) => {
    direction === "left" &&
      (cards.current.scrollLeft -= cards.current.clientWidth);
    direction === "right" &&
      (cards.current.scrollLeft += cards.current.clientWidth);

    setScrollLeftValue(cards.current.scrollLeft);
    setScrollLeftMaxtValue(
      cards.current.scrollWidth - cards.current.offsetWidth
    );
  };

  const handlePlainScroll = () => {
    try {
      const { scrollLeft } = cards.current;

      setScrollLeftValue(scrollLeft);
      setScrollLeftMaxtValue(
        cards.current.scrollWidth - cards.current.offsetWidth
      );
    } catch (err) {}
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePlainScroll, { passive: true });
    return () => window.removeEventListener("scroll", handlePlainScroll);
  });

  const mouseEvent = (event) => {
    event === "enter" && setCallScroll(false);
    event === "leave" && setCallScroll(true);
  };

  autoScroll &&
    callScroll &&
    setInterval(() => {
      try {
        const { scrollLeft } = cards.current;

        setScrollLeftValue(scrollLeft);
        setScrollLeftMaxtValue(
          cards.current.scrollWidth - cards.current.offsetWidth
        );

        cards.current.scrollWidth - cards.current.offsetWidth === scrollLeft
          ? (cards.current.scrollLeft = 0)
          : (cards.current.scrollLeft += cards.current.clientWidth);
      } catch (err) {}
    }, 1500);

  return (
    <ScrollingContainer
      scrollOuterBg={scrollOuterBg}
      scrollInnerWidth={scrollInnerWidth}
      scrollInnerPad={scrollInnerPad}
      scrollCardWidth={scrollCardWidth}
      scrollCardHeight={scrollCardHeight}
      scrollCardBg={scrollCardBg}
      scrollCardGaps={scrollCardGaps}
      scrollArrowBg={scrollArrowBg}
      scrollArrowCol={scrollArrowCol}
      onMouseEnter={() => mouseEvent("enter")}
      onMouseLeave={() => mouseEvent("leave")}
      LeftIconActive={scrollLeftValue !== 0 ? true : false}
      RightIconActive={!(scrollLeftMaxValue === scrollLeftValue) ? true : false}
    >
      <div className="main">
        <div className="cardsContainer" ref={cards}>
          {/* takes already prepared cards */}
          {children}
        </div>
      </div>
      {/* <Spacer size="small" /> */}
      <FlexibleDiv
        paddingVertical="0"
        justifyContent="center"
        resFlexDirection="row"
      >
        <FlexibleDiv
          // height="50px"
          background="#fff"
          width="max-width"
          className="scrollMoreMain_left"
          onClick={() => handleScroll("left")}
          paddingVertical="0"
          justifyContent="center"
          alignItems="center"
        >
          <LeftIcon />
        </FlexibleDiv>
        <FlexibleDiv
          background="#fff"
          // height="50px"
          width="max-width"
          className="scrollMoreMain_right"
          onClick={() => handleScroll("right")}
          paddingVertical="0"
          justifyContent="center"
          alignItems="center"
        >
          <RightIcon />
        </FlexibleDiv>
      </FlexibleDiv>
    </ScrollingContainer>
  );
};

export default ScrollingDiv;
