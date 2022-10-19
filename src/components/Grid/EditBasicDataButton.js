import React, { Fragment } from "react";
import { useState } from "react";

import BasicData from "../BasicData/BasicData";
import Modal from "react-modal";

const EditBasicDataButton = ({ img }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  return (
    <Fragment>
      <button onClick={() => setModalIsOpen(true)}>
        <img className="h-20 w-20 mx-auto" src={img} alt="" />
      </button>

      <Modal
        isOpen={modalIsOpen}
        className="modal"
        appElement={document.getElementById("root") || undefined}
      >
        <BasicData setModalIsOpen={setModalIsOpen} />
      </Modal>
    </Fragment>
  );
};

export default EditBasicDataButton;
