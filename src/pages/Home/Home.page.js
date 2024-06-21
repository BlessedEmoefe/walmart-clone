import React, { useState } from "react";

import { Button } from "../../components/button/button.component";
import {
  HomeContainer,
  ContentSection,
  CatalogueSection,
  ProductRow,
  DualSection,
  LeftSection,
  LearnMoreSection,
  LearnMoreSectionImage,
  FeedbackSection,
  Wrapper,
  InfoText,
} from "./Home.styles";
import ScrollingDiv from "../../components/Carousel";

import { BannerCard } from "../../components/bannerCard/bannerCard.component";
import { HorizontalHeaderRow } from "../../components/horizontalHeaderRow/horizontalHeaderRow.component";
import { CategoryCard } from "../../components/categoryCard/categoryCard.component";

import { SocialsCard } from "../../components/socialsCard/socialsCard.component";
import Header from "../../components/header/header.component";
import {
  // SubHeader,
  SubHeaderDropDown,
} from "../../components/subHeader/subHeader.component";
import { CatalogueCard } from "../../components/CatalogueCard/CatalogueCard.page";

import { ProductCard } from "../../components/ProductCard/productCard.component";

import learnMoreImage from "../../assets/images/defaultPic.jpg";

import {
  catalogueData1,
  catalogueData2,
  catalogueData3,
  catalogueData4,
  catalogueData5,
  catalogueData6,
  flashDeals,
  redecoration,
  boom,
  socialPosts,
  category,
} from "./data";
import Footer from "../../components/footer/footer.component";
import Modal from "../../components/modal/modal.component";
import { AddressBarCard } from "../../components/addressBarCard/addressBarCard.component";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <HomeContainer>
      <Header setOpenModal={setOpenModal} openModal={openModal} />
      {/* <SubHeader setOpenModal={setOpenModal} openModal={openModal} /> */}
      <ContentSection>
        <BannerCard />
        <CatalogueSection
          height={"120vh"}
          bigResHeight={"120vh"}
          resHeight={"270vh"}
          smallResHeight={"170vh"}
        >
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
              resRowStart,
              resColumnStart,
              resRowEnd,
              resColumnEnd,
              smallResRowStart,
              smallResColumnStart,
              smallResRowEnd,
              smallResColumnEnd,
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
                resRowStart={resRowStart}
                resColumnStart={resColumnStart}
                resRowEnd={resRowEnd}
                resColumnEnd={resColumnEnd}
                smallResRowStart={smallResRowStart}
                smallResColumnStart={smallResColumnStart}
                smallResRowEnd={smallResRowEnd}
                smallResColumnEnd={smallResColumnEnd}
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
          <CatalogueSection
            height={"60vh"}
            bigResHeight={"60vh"}
            resHeight={"50vh"}
            smallResHeight={"40vh"}
            width="50%"
          >
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
                resRowStart,
                resColumnStart,
                resRowEnd,
                resColumnEnd,
                smallResRowStart,
                smallResColumnStart,
                smallResRowEnd,
                smallResColumnEnd,
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
                  resRowStart={resRowStart}
                  resColumnStart={resColumnStart}
                  resRowEnd={resRowEnd}
                  resColumnEnd={resColumnEnd}
                  smallResRowStart={smallResRowStart}
                  smallResColumnStart={smallResColumnStart}
                  smallResRowEnd={smallResRowEnd}
                  smallResColumnEnd={smallResColumnEnd}
                />
              )
            )}
          </CatalogueSection>
        </DualSection>
        <CatalogueSection
          bigResHeight={"70vh"}
          height={"70vh"}
          resHeight={"400vh"}
          smallResHeight={"200vh"}
        >
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
              resRowStart,
              resColumnStart,
              resRowEnd,
              resColumnEnd,
              smallResRowStart,
              smallResColumnStart,
              smallResRowEnd,
              smallResColumnEnd,
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
                resRowStart={resRowStart}
                resColumnStart={resColumnStart}
                resRowEnd={resRowEnd}
                resColumnEnd={resColumnEnd}
                smallResRowStart={smallResRowStart}
                smallResColumnStart={smallResColumnStart}
                smallResRowEnd={smallResRowEnd}
                smallResColumnEnd={smallResColumnEnd}
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
              heading={"Discover your Minecraft"}
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
          <CatalogueSection
            height={"60vh"}
            bigResHeight={"60vh"}
            resHeight={"50vh"}
            smallResHeight={"40vh"}
            width="50%"
          >
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
                resRowStart,
                resColumnStart,
                resRowEnd,
                resColumnEnd,
                smallResRowStart,
                smallResColumnStart,
                smallResRowEnd,
                smallResColumnEnd,
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
                  resRowStart={resRowStart}
                  resColumnStart={resColumnStart}
                  resRowEnd={resRowEnd}
                  resColumnEnd={resColumnEnd}
                  smallResRowStart={smallResRowStart}
                  smallResColumnStart={smallResColumnStart}
                  smallResRowEnd={smallResRowEnd}
                  smallResColumnEnd={smallResColumnEnd}
                />
              )
            )}
          </CatalogueSection>
        </DualSection>
        <ProductRow>
          <HorizontalHeaderRow
            heading={"Trending on social"}
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
        <CatalogueSection
          bigResHeight={"70vh"}
          height={"70vh"}
          resHeight={"400vh"}
          smallResHeight={"200vh"}
        >
          {catalogueData5.map(
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
              resRowStart,
              resColumnStart,
              resRowEnd,
              resColumnEnd,
              smallResRowStart,
              smallResColumnStart,
              smallResRowEnd,
              smallResColumnEnd,
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
                resRowStart={resRowStart}
                resColumnStart={resColumnStart}
                resRowEnd={resRowEnd}
                resColumnEnd={resColumnEnd}
                smallResRowStart={smallResRowStart}
                smallResColumnStart={smallResColumnStart}
                smallResRowEnd={smallResRowEnd}
                smallResColumnEnd={smallResColumnEnd}
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
        <LearnMoreSection>
          <Wrapper>
            <LearnMoreSectionImage src={learnMoreImage} alt="image" />
          </Wrapper>
          <Wrapper>
            <InfoText>Earn 3% cash back on Walmart.com</InfoText>
          </Wrapper>
          <Wrapper>
            <Button btnText={"Learn more"} />
          </Wrapper>
        </LearnMoreSection>
        <CatalogueSection
          bigResHeight={"70vh"}
          height={"70vh"}
          resHeight={"400vh"}
          smallResHeight={"200vh"}
        >
          {catalogueData6.map(
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
              resRowStart,
              resColumnStart,
              resRowEnd,
              resColumnEnd,
              smallResRowStart,
              smallResColumnStart,
              smallResRowEnd,
              smallResColumnEnd,
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
                resRowStart={resRowStart}
                resColumnStart={resColumnStart}
                resRowEnd={resRowEnd}
                resColumnEnd={resColumnEnd}
                smallResRowStart={smallResRowStart}
                smallResColumnStart={smallResColumnStart}
                smallResRowEnd={smallResRowEnd}
                smallResColumnEnd={smallResColumnEnd}
              />
            )
          )}
        </CatalogueSection>

        <Modal
          top={"5.5rem"}
          show={openModal === "address"}
          setShowModal={setOpenModal}
        >
          <AddressBarCard />
        </Modal>

        <Modal
          top={"8.5rem"}
          show={openModal === "department"}
          setShowModal={setOpenModal}
        >
          <SubHeaderDropDown servicesDropdown={false} />
        </Modal>

        <Modal
          top={"8.5rem"}
          show={openModal === "services"}
          setShowModal={setOpenModal}
        >
          <SubHeaderDropDown servicesDropdown={true} />
        </Modal>
      </ContentSection>
      <FeedbackSection>
        <Wrapper>
          <InfoText>We'd Love to hear what you think!</InfoText>
        </Wrapper>
        <Wrapper>
          <Button btnText={"Give Feedback"} />
        </Wrapper>
      </FeedbackSection>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
