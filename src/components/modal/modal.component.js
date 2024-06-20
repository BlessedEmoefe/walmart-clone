import React, { useEffect } from "react";
import { ModalChild, ModalStyle } from "./modal.styles";

const Modal = ({ children, show, setShowModal, scroll, top }) => {
  // const {showModal,setShowModal} = ModalContext();

  useEffect(() => {
    if (show === true) {
      document.body.style.overflow = `${scroll ? "hidden" : "hidden"}`;
    }

    if (show === false) {
      document.body.style.overflow = "unset";
    }
  }, [show, scroll]);

  return (
    <>
      <ModalStyle
        scroll={scroll ? "scroll" : "hidden"}
        display={show ? "flex" : "none"}
        onClick={() => setShowModal(false)}
        top={top}
      >
        <ModalChild>{children}</ModalChild>
      </ModalStyle>
    </>
  );
};

export default Modal;
