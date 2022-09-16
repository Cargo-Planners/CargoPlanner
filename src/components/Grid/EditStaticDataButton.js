import React, { Fragment } from "react";
import { useState } from "react";

import BasicData from "../BasicData/BasicData";
import Modal from "react-modal"

const EditStaticDataButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  return (
    <Fragment>
      <button className="bg-red-200 top-0 left-20 p-4 rounded-xl text-white" onClick={() => setModalIsOpen(true)}>
        ערוך נתוני בסיס
      </button>
      <Modal isOpen={modalIsOpen} className="modal flex" >
        <BasicData setModalIsOpen={setModalIsOpen} />
      </Modal>
    </Fragment>
  );
};

export default EditStaticDataButton;
