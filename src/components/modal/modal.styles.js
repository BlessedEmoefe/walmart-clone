import styled from "styled-components";
export const ModalStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  z-index: 90001;
  position: fixed;
  bottom: 0;
  top: 0;
  background: #00000080;
  left: 0px;
  right: 0px;
  display: ${({ display }) => (display ? display : "flex")};
  align-items: center;
  justify-content: center;
  transform: translateX(0);
  transition: 1.5s ease-in-out;

  @media only screen and (max-width: 680px) {
    overflow: ${({ scroll }) => (scroll ? scroll : "scroll")};

  }
`;

export const Exit = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: flex-end;
  z-index: 90005;
`;
export const ExitIconStyle = {
  cursor: "pointer",
  fontWeight: "900",
  color: "white",
};


export const ModalChild = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
z-index: -1;
`