import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";


export const PlayIconContainer = styled(FlexibleDiv)`
  border-radius: 50%;
  width: max-content;
height: max-content;
  padding: 0;
  /* background: red; */
  @media (max-width: 1280px) {
  }
  @media (max-width: 800px) {
  }
`;
export const VideoPlayeContaner = styled(FlexibleDiv)`
  justify-content: center;
  align-items: center;
  /* border-radius: 10px; */
  /* box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.1); */
  overflow: hidden;
  position: relative;
  padding: 0;
  /* padding-bottom: 56.25%; */
  height: 100%;
  /* background:blue; */
  width: 100%;
  @media (max-width: 1280px) {
  }
  @media (max-width: 800px) {
  }
`;
