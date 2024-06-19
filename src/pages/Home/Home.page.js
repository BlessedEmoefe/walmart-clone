import React, { useEffect, useState, useContext } from "react";

import { Button } from "../../components/button/button.component";
import {
  HomeContainer,
  ContentSection,
  CatalogueSection,
  ProductRow,
  DualSection,
  LeftSection,
  FeedbackSection,
  Wrapper,
  InfoText,
} from "./Home.styles";
import ScrollingDiv from "../../components/Carousel";

import { BannerCard } from "../../components/bannerCard/bannerCard.component";
import { HorizontalHeaderRow } from "../../components/horizontalHeaderRow/horizontalHeaderRow.component";
import { CategoryCard } from "../../components/categoryCard/categoryCard.component";

import {
  RecommendedVideosCard,
  SocialsCard,
} from "../../components/socialsCard/socialsCard.component";
import { PageLoader, Loader } from "../../components/loaders/loaders.component";
import Header from "../../components/header/header.component";
import { SubHeader } from "../../components/subHeader/subHeader.component";
import { CatalogueCard } from "../../components/CatalogueCard/CatalogueCard.page";

import { ProductCard } from "../../components/ProductCard/productCard.component";

import {
  catalogueData1,
  catalogueData2,
  catalogueData3,
  catalogueData4,
  flashDeals,
  redecoration,
  boom,
  socialPosts,
  category,
} from "./data";
import { CourseContentCard } from "../../components/courseContentCard/courseContentCard.component";
import Footer from "../../components/footer/footer.component";

const Home = () => {
  const [recentLessons, setRecentLessons] = useState();
  const [videoLibrary, setVideoLibrary] = useState();
  const [recommended, setRecommended] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <HomeContainer>
      <Header />
      <SubHeader />
      <ContentSection>
        <BannerCard />

        <CatalogueSection height={"120vh"}>
          {catalogueData1.map(
            ({
              image,
              big,
              link,
              title,
              heading,
              bigHeading,
              rowStart,
              rowEnd,
              columnStart,
              columnEnd,
              buttonText,
            }) => (
              <CatalogueCard
                image={image}
                big={big}
                link={link}
                title={title}
                heading={heading}
                bigHeading={bigHeading}
                rowStart={rowStart}
                rowEnd={rowEnd}
                columnStart={columnStart}
                columnEnd={columnEnd}
                buttonText={buttonText}
              />
            )
          )}
        </CatalogueSection>

        <ProductRow>
          <HorizontalHeaderRow
            heading={"Flash Deals"}
            subText={"Up to 65% off"}
          />

          <ScrollingDiv
            scrollCardBg="transparent"
            scrollOuterBg="transparent"
            // scrollCardHeight='100%'
            scrollCardGaps="0 1rem"
            autoScroll={false}
          >
            {flashDeals.map(
              ({
                image,
                normalPrice,
                discount,
                priceInfo,
                productInfo,
                buttonText,
                color,
              }) => (
                <ProductCard
                  image={image}
                  normalPrice={normalPrice}
                  discount={discount}
                  priceInfo={priceInfo}
                  productInfo={productInfo}
                  color={color}
                  buttonText={buttonText}
                />
              )
            )}
          </ScrollingDiv>
        </ProductRow>

        <DualSection>
          <LeftSection>
            <HorizontalHeaderRow
              heading={"The redecoration station"}
              subText={"Jump in time for warm weather"}
            />

            <ScrollingDiv
              scrollCardBg="transparent"
              scrollOuterBg="transparent"
              // scrollCardHeight='100%'
              scrollCardGaps="0 1rem"
              autoScroll={false}
            >
              {redecoration.map(
                ({
                  image,
                  normalPrice,
                  discount,
                  priceInfo,
                  productInfo,
                  buttonText,
                  color,
                }) => (
                  <ProductCard
                    image={image}
                    normalPrice={normalPrice}
                    discount={discount}
                    priceInfo={priceInfo}
                    productInfo={productInfo}
                    color={color}
                    buttonText={buttonText}
                  />
                )
              )}
            </ScrollingDiv>
          </LeftSection>
          <CatalogueSection height="60vh" width="50%">
            {catalogueData2.map(
              ({
                image,
                big,
                link,
                title,
                heading,
                bigHeading,
                rowStart,
                rowEnd,
                columnStart,
                columnEnd,
                buttonText,
              }) => (
                <CatalogueCard
                  image={image}
                  big={big}
                  link={link}
                  title={title}
                  heading={heading}
                  bigHeading={bigHeading}
                  rowStart={rowStart}
                  rowEnd={rowEnd}
                  columnStart={columnStart}
                  columnEnd={columnEnd}
                  buttonText={buttonText}
                  height="100%"
                />
              )
            )}
          </CatalogueSection>
        </DualSection>

        <CatalogueSection height={"70vh"}>
          {catalogueData3.map(
            ({
              image,
              big,
              link,
              title,
              heading,
              bigHeading,
              rowStart,
              rowEnd,
              columnStart,
              columnEnd,
              buttonText,
            }) => (
              <CatalogueCard
                image={image}
                big={big}
                link={link}
                title={title}
                heading={heading}
                bigHeading={bigHeading}
                rowStart={rowStart}
                rowEnd={rowEnd}
                columnStart={columnStart}
                columnEnd={columnEnd}
                buttonText={buttonText}
              />
            )
          )}
        </CatalogueSection>

        <ProductRow>
          <HorizontalHeaderRow
            heading={"Boom! There it is."}
            subText={"Get all you need to celebrate"}
          />

          <ScrollingDiv
            scrollCardBg="transparent"
            scrollOuterBg="transparent"
            // scrollCardHeight='100%'
            scrollCardGaps="0 1rem"
            autoScroll={false}
          >
            {boom.map(
              ({
                image,
                normalPrice,
                discount,
                priceInfo,
                productInfo,
                buttonText,
                color,
              }) => (
                <ProductCard
                  image={image}
                  normalPrice={normalPrice}
                  discount={discount}
                  priceInfo={priceInfo}
                  productInfo={productInfo}
                  color={color}
                  buttonText={buttonText}
                />
              )
            )}
          </ScrollingDiv>
        </ProductRow>

        <DualSection>
          <LeftSection>
            <HorizontalHeaderRow
              heading={"Discover yur Minecraft"}
              subText={"Toys, home, apparel & snacks"}
            />

            <ScrollingDiv
              scrollCardBg="transparent"
              scrollOuterBg="transparent"
              // scrollCardHeight='100%'
              scrollCardGaps="0 1rem"
              autoScroll={false}
            >
              {redecoration.map(
                ({
                  image,
                  normalPrice,
                  discount,
                  priceInfo,
                  productInfo,
                  buttonText,
                  color,
                }) => (
                  <ProductCard
                    image={image}
                    normalPrice={normalPrice}
                    discount={discount}
                    priceInfo={priceInfo}
                    productInfo={productInfo}
                    color={color}
                    buttonText={buttonText}
                  />
                )
              )}
            </ScrollingDiv>
          </LeftSection>
          <CatalogueSection height="60vh" width="50%">
            {catalogueData4.map(
              ({
                image,
                big,
                link,
                title,
                heading,
                bigHeading,
                rowStart,
                rowEnd,
                columnStart,
                columnEnd,
                buttonText,
              }) => (
                <CatalogueCard
                  image={image}
                  big={big}
                  link={link}
                  title={title}
                  heading={heading}
                  bigHeading={bigHeading}
                  rowStart={rowStart}
                  rowEnd={rowEnd}
                  columnStart={columnStart}
                  columnEnd={columnEnd}
                  buttonText={buttonText}
                  height="100%"
                />
              )
            )}
          </CatalogueSection>
        </DualSection>

        <ProductRow>
          <HorizontalHeaderRow
            heading={"Trendingon social"}
            subText={"Shop what creators are sharing"}
          />

          <ScrollingDiv
            scrollCardBg="transparent"
            scrollOuterBg="transparent"
            // scrollCardHeight='100%'
            scrollCardGaps="0 1rem"
            autoScroll={false}
          >
            {socialPosts.map(({ cardImage, username, price, description }) => (
              <SocialsCard
                cardImage={cardImage}
                username={username}
                price={price}
                description={description}
              />
            ))}
          </ScrollingDiv>
          {/* <CourseContentCard /> */}
        </ProductRow>

        <ProductRow>
          <HorizontalHeaderRow
            heading={"Get it all right here"}
            biggerHeading={false}
          />

          <ScrollingDiv
            scrollCardBg="transparent"
            scrollOuterBg="transparent"
            // scrollCardHeight='100%'
            scrollCardGaps="0 1rem"
            autoScroll={false}
          >
            {category.map(({ image, categoryName }) => (
              <CategoryCard image={image} categoryName={categoryName} />
            ))}
          </ScrollingDiv>
        </ProductRow>

        <CatalogueSection height={"70vh"}>
          {catalogueData3.map(
            ({
              image,
              big,
              link,
              title,
              heading,
              bigHeading,
              rowStart,
              rowEnd,
              columnStart,
              columnEnd,
              buttonText,
            }) => (
              <CatalogueCard
                image={image}
                big={big}
                link={link}
                title={title}
                heading={heading}
                bigHeading={bigHeading}
                rowStart={rowStart}
                rowEnd={rowEnd}
                columnStart={columnStart}
                columnEnd={columnEnd}
                buttonText={buttonText}
              />
            )
          )}
        </CatalogueSection>

        <ProductRow>
          <HorizontalHeaderRow
            heading={"Just in & on trend"}
            subText={"shoes, dresses & more."}
          />

          <ScrollingDiv
            scrollCardBg="transparent"
            scrollOuterBg="transparent"
            // scrollCardHeight='100%'
            scrollCardGaps="0 1rem"
            autoScroll={false}
          >
            {flashDeals.map(
              ({
                image,
                normalPrice,
                discount,
                priceInfo,
                productInfo,
                buttonText,
                color,
              }) => (
                <ProductCard
                  image={image}
                  normalPrice={normalPrice}
                  discount={discount}
                  priceInfo={priceInfo}
                  productInfo={productInfo}
                  color={color}
                  buttonText={buttonText}
                />
              )
            )}
          </ScrollingDiv>
        </ProductRow>
      </ContentSection>
      <FeedbackSection>
        <Wrapper>
          <InfoText>
            We'd Love to hear what you think!
          </InfoText>
        </Wrapper>
        <Wrapper>
          <Button btnText={"Give Feedback"}/>
        </Wrapper>
      </FeedbackSection>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
