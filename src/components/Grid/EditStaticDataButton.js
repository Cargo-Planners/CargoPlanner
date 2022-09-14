import React from "react";
import { useState } from "react";

import BasicData from "../BasicData/BasicData";
import Modal from "react-modal"

const EditStaticDataButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <div>
      <button id="addObjBtn" className="bg-red-200 top-0 left-20 p-4 rounded-xl text-white" onClick={() => setModalIsOpen(true)}>
        ערוך נתוני בסיס
      </button>
      <Modal isOpen={modalIsOpen} className="modal" >
        <BasicData setModalIsOpen={setModalIsOpen} />
      </Modal></div>
  );
};

export default EditStaticDataButton;
