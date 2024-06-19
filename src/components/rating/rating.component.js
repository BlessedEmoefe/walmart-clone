import React, { useState, useEffect, useContext } from "react";
import { RatingsContainer, RatingTitle } from "./rating.styles";
import Rating from "react-rating";
import {
  BsStar as Star,
  BsStarFill as StarFilled,
  BsStarHalf as StarHalf,
} from "react-icons/bs";
import AppContext from "../../services/context";
import { Button } from "../button/button.component";
import { fontSizes } from "../../infrastructure/theme/fonts";
import axios from 'axios';

export const RatingModal = ({ showRating, videoId }) => {
  const [rate, setRate] = useState();
  const { auth } = useContext(AppContext);

  const handleRate = (rate) => {
    console.log("rate", rate);
    setRate(rate)
  };

 useEffect(() => {
    console.log("effect rate",rate)
 },[])


    const handleRating = async () => {
      try {
        let response = await axios
          .post(
            "https://api-service-5wasy3cpxq-uc.a.run.app/api/v1/courses/rates",
            {
              rating: 4,
              video: videoId,
            },
            {
              headers: {
                Authorization: `Token ${auth.token}`,
                "Content-Type": "application/json",
              },
            }
          )
          .then(({ data }) => {
            console.log("Rates respose", data);
          });
      } catch (err) {
        console.log("Rating Error",err);
      }
    };

  return (
    <RatingsContainer showRating={showRating}>
      <RatingTitle>Rate this Tutorial</RatingTitle>
      <Rating
        // start={}
        // stop={}
        // step={1}
        // placeholderRating={}
        fractions={2}
        emptySymbol={<Star fontSize={"3rem"} color={"#fff"} />}
        fullSymbol={<StarFilled fontSize={"3rem"} color={"#ffdd00"} />}
        onChange={handleRate}
      />
      <Button
        btnText="Submit Rating"
        textTransform="capitalize"
        fontSize={fontSizes.smallBody}
        onClick={handleRating}
        // size="large"
        width={"max-content"}
        // RightIcon={ArrowRightIcon}
      />
    </RatingsContainer>
  );
};
