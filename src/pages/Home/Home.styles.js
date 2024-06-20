import styled from "styled-components";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import { Text } from "../../components/typography/text.component";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const HomeContainer = styled(FlexibleDiv)`
  padding: 0;
  @media only screen and (max-width: 800px) {
  }
`;

export const ContentSection = styled(FlexibleDiv)`
  padding: 1rem 2%;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (max-width: 800px) {
  }
`;

export const CatalogueSection = styled.div`
  /* background: red; */
  padding: 1rem 0;
  height: max-content;
  height: ${({ height }) => (height ? height : "100vh")};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  gap: 1.5rem;
  width: ${({ width }) => (width ? width : "100%")};

  flex-wrap: nowrap;

  @media only screen and (max-width: 800px) {
  }
`;

export const ProductRow = styled(FlexibleDiv)`
  /* background: yellow; */
  padding: 0;
  flex-direction: column;
  min-height: max-content;

  @media only screen and (max-width: 800px) {
  }
`;

export const DualSection = styled(FlexibleDiv)`
  padding: 0;
  /* background: blue; */
  gap: 2%;
  height: max-content;
`;

export const LeftSection = styled(FlexibleDiv)`
  padding: 0;
  /* background: red; */
  width: 47%;
`;
export const LearnMoreSection = styled(FlexibleDiv)`
  padding: 1rem;
  justify-content: center;
  gap: 1.5rem;
  border-radius:10px;
  box-shadow: 0px 5px 31px -5px rgba(0, 0, 0, 0.3);
`;

export const LearnMoreSectionImage = styled.img`
  padding: 0;
  width: 100px;
  height: 60px;
  border-radius: 4px;
  object-fit: cover;
`;

export const FeedbackSection = styled(FlexibleDiv)`
  padding: 2rem;
  background: ${colors.lightBlueBg.secondVariant};
  flex-direction: column;
  gap: 1.5rem;
`;

export const Wrapper = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
`;

export const InfoText = styled(Text)`
  padding: 0;
  color: ${colors.black.strong};
  font-size: ${fontSizes.smallBody};
  line-height: ${fontSizes.body};
  font-weight: 500;
`;