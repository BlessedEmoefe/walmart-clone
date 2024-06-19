import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { Exit, ExitIconStyle, ModalChild, ModalStyle } from "./modal.styles";

const Modal = ({ children, show, setShowModal, scroll }) => {
  // const {showModal,setShowModal} = ModalContext();

  useEffect(() => {
    if (show === true) {
      document.body.style.overflow = `${scroll ? "hidden" : "hidden"}`;
    }

    if (show === false) {
      document.body.style.overflow = "unset";
    }
  }, [show, scroll]);

  const modalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <ModalStyle
        scroll={scroll ? "scroll" : "hidden"}
        display={show ? "flex" : "none"}
        onClick={() => setShowModal(false)}
      >
        <Exit>
          <CgClose
            onClick={() => modalHandler()}
            style={ExitIconStyle}
            size={"1.6rem"}
          />
        </Exit>
        <ModalChild>{children}</ModalChild>
      </ModalStyle>
    </>
  );
};

export default Modal;
