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
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#3A3A35",
            opacity: 0.97,
          },
          content: {
            backgroundColor: "#CFA015",
            display: "flex",
            justifyContent: "center",
            borderRadius: "20px",
            height: "450px",
            width: "580px",
            margin: "auto",
            marginTop: "15vh",
            padding: "10px",
            position: "relative",
          },
        }}
        isOpen={modalIsOpen}
        // className="modal-basic-data"

        appElement={document.getElementById("root") || undefined}
      >
        <BasicData setModalIsOpen={setModalIsOpen} />
      </Modal>
    </Fragment>
  );
};

export default EditBasicDataButton;
