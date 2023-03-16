import React, { useState } from "react";
import {
  FaCaretDown,
  FaTimes,
  FaTrash,
  FaPlaneDeparture,
  FaChartLine,
  FaFileExport,
} from "react-icons/fa";
import { GiCargoCrate } from "react-icons/gi";
import settingsIcon from "../../icons/settingsIcon.png";
import helpIcon from "../../icons/helpIcon.png";
import { fabric } from "fabric";
import { addItem } from "../../redux/ObjectsDataSlice";
import randomColor from "randomcolor";
import eventBus from "../Grid/eventBus";
import { v4 } from "uuid";
import SettingsIcon from "@mui/icons-material/Settings";
import PopUp from "../Grid/PopUp";
import { Fragment } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { routeConstants } from "../../Routes/constants";
import EditBasicDataButton from "../Grid/EditBasicDataButton";
import BasicData from "../BasicData/BasicData";
import Dialog from "@mui/material/Dialog";
import {
  incrementCockpitCrew,
  decrementCockpitCrew,
  incrementInspectorsCrew,
  decrementInspectorsCrew,
  updateEmptyWeight,
  updateIndex,
  updateConfig,
} from "../../redux/EditBasicDataSlice";

function ActualPopup(props) {
  const { open } = props;
  const [isOpen, setIsOpen] = useState(open);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      keepMounted
      onClose={() => handleClose()}
      aia-describedly="alert-dialog-slide-description"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <BasicData setModalIsOpen={setModalIsOpen} />
    </Dialog>
  );
}

export default ActualPopup;
