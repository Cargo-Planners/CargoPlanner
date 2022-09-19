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
<<<<<<< HEAD:src/components/Grid/EditBasicDataButton.js
      <Modal isOpen={modalIsOpen} ariaHideApp={false} className="modal flex">
=======
      <Modal isOpen={modalIsOpen} className="modal flex" appElement={document.getElementById('root') || undefined}>
>>>>>>> 8aa4c19bb5d52e0f55b9135021f3f43de281e04f:src/components/Grid/EditStaticDataButton.js
        <BasicData setModalIsOpen={setModalIsOpen} />
      </Modal>
    </Fragment>
  );
};

export default EditBasicDataButton;
