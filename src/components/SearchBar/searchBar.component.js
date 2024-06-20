import React, { useEffect, useState } from "react";
import { colors } from "../../infrastructure/theme/colors";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import {
  SearchBarWrapper,
  SearchInfoContainer,
  CardRow,
} from "./searchBar.styles";
import { truncate } from "../../infrastructure/lib/factory.lib";
import { IoSearchOutline as SearchIcon } from "react-icons/io5";
import { ProductCard } from "../ProductCard/productCard.component";

export const SearchBar = ({
  placeholder = "Please input your search keywords",
  // handleChange,
  fullWidth = true,
  height,
  xl = false,
  color = colors.black.strong,
}) => {
  const [searchCourse, setSearchCourse] = useState("");

  const [data /*setData*/] = useState([]);

  const handleClearInput = () => {
    setSearchCourse("");
    console.log("Clear Input");
  };

  const handleChange = (e) => {
    setSearchCourse(e.target.value);
    console.log("Value", e.target.value);
  };

  return (
    <FlexibleDiv paddingVertical="0">
      <SearchBarWrapper
        fullWidth={fullWidth}
        height={height}
        xl={xl}
        color={color}
      >
        <input
          type="text"
          name="search"
          value={searchCourse}
          onChange={handleChange}
          placeholder={truncate(placeholder, 80)}
        />

        <div className="svgWrapper">
          <SearchIcon size="1.5rem" color="#000" />
        </div>
      </SearchBarWrapper>
      <SearchData
        data={data}
        searchCourse={searchCourse}
        handleClearInput={handleClearInput}
      />
    </FlexibleDiv>
  );
};

const SearchData = ({ data, loading, searchCourse, handleClearInput }) => {
  const [searchRecommendation, setSearchRecommendation] = useState(false);
  useEffect(() => {
    searchCourse?.length > 1
      ? setSearchRecommendation(true)
      : setSearchRecommendation(false);
  }, [searchCourse]);

  const handleCloseSearchModal = () => {
    handleClearInput();
    setSearchRecommendation(false);
  };

  return (
    <SearchInfoContainer display={searchRecommendation}>
      <CardRow margin={"0 0 2rem 0"}>
        {data?.length > 0 &&
          data.map((item) => (
            <ProductCard
              key={item.pk}
              item={item}
              closeModal={handleCloseSearchModal}
            />
          ))}
      </CardRow>
    </SearchInfoContainer>
  );
};
