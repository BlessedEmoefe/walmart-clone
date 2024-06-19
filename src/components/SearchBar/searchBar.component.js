import React, { useEffect, useState } from "react";
import { colors } from "../../infrastructure/theme/colors";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import {
  SearchBarWrapper,
  SearchInfoContainer,
  SearchInfoContainerAnchor,
  CardRow,
} from "./searchBar.styles";
import { truncate } from "../../infrastructure/lib/factory.lib";
import { IoSearchOutline as SearchIcon } from "react-icons/io5";
import { VerticalTopicCard } from "../verticalTopicCard/verticalTopicCard.component";
// import axios from "axios";
import { PageLoader, Loader } from "../loaders/loaders.component";

export const SearchBar = ({
  placeholder = "Please input your search keywords",
  // handleChange,
  fullWidth = true,
  height,
  xl = false,
  color = colors.black.strong,
}) => {
  const [searchCourse, setSearchCourse] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState([]);
  const [search, setSearch] = useState("");
  // const { gradeState, dispatchGrade, lessonState, dispatchLesson, topicState } =
  //   useContext(AppContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const userToken = localStorage.getItem("user-token");
  //     try {
  //       setLoading(true);
  //       const response = await axios
  //         .get(
  //           `https://api-service-5wasy3cpxq-uc.a.run.app/api/v1/courses/query?search=${searchCourse}`,
  //           {
  //             headers: {
  //               Authorization: `Token ${userToken}`,
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         )
  //         .then(({ data }) => {
  //           setData(data.results);
  //           setLoading(false);
  //           console.log("SearchedData", data.results);
  //         });
  //     } catch (error) {
  //       setError(error.message);
  //       console.log("error", error);
  //       setLoading(false);
  //     }
  //   };
  //   // setSearchCourse(search);
  //   if (searchCourse.length === 0) setData([]);

  //   if (searchCourse.length > 0) fetchData();

  //   console.log("searchCourse", searchCourse.length);
  // }, [searchCourse]);

  const handleSearch = (search) => {
    // console.log('search: ', search);
    setSearchCourse(search);
    if (search.length > 2) {
      setSearch(search);
    }

    if (search.length === 0) {
      setData([]);
    }
    // fetchData(search);

    // const filteredData = fullData.filter(item =>
    //   item.title.toLowerCase().includes(search.toLowerCase()),
    // );
    // setData(filteredData);
  };

  const handleClearInput = ()=>{
    setSearchCourse("")
    console.log("Clear Input")
  }

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
          <SearchIcon size="1.5rem" color="#000"/>
        </div>
      </SearchBarWrapper>
      <SearchData
        data={data}
        loading={loading}
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
    handleClearInput()
    setSearchRecommendation(false);
  };

  return (
    <SearchInfoContainer display={searchRecommendation}>
      {loading ? (
        <Loader small />
      ) : (
        <CardRow margin={"0 0 2rem 0"}>
          {data?.length > 0 &&
            data.map((item) => (
              <VerticalTopicCard
                key={item.pk}
                item={item}
                closeModal={handleCloseSearchModal}
              />
            ))}
        </CardRow>
      )}
    </SearchInfoContainer>
  );
};
