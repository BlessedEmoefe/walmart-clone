import React from "react";

import {
  CategoryCardContainer,
  ImageSection,
  Image,
  TextSection,
  CategoryName,
} from "./categoryCard.styles";
import DefaultImage from "../../assets/images/flash1.jpeg";

export const CategoryCard = ({ categoryName,image }) => {
  return (
    <CategoryCardContainer>
      <ImageSection>
        <Image src={image?image:DefaultImage} alt={`Category Image`} />
      </ImageSection>

      <TextSection>
        <CategoryName>{categoryName ? categoryName : "Grocery"}</CategoryName>
      </TextSection>
    </CategoryCardContainer>
  );
};
