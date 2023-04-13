import React, { useEffect, useState } from 'react';
import {
  FaCaretDown,
  FaTimes,
  FaTrash,
  FaPlaneDeparture,
  FaChartLine,
  FaFileExport,
} from 'react-icons/fa';
import { GiCargoCrate } from 'react-icons/gi';
import settingsIcon from '../../icons/settingsIcon.png';
import helpIcon from '../../icons/helpIcon.png';
import { fabric } from 'fabric';
import randomColor from 'randomcolor';
import eventBus from '../Grid/eventBus';
import { v4 } from 'uuid';
import SettingsIcon from '@mui/icons-material/Settings';
import PopUp from '../Grid/PopUp';
import { Fragment } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../Routes/constants';
import EditBasicDataButton from '../Grid/EditBasicDataButton';
import BasicData from '../BasicData/BasicData';
import Dialog from '@mui/material/Dialog';
import {
  incrementCockpitCrew,
  decrementCockpitCrew,
  incrementInspectorsCrew,
  decrementInspectorsCrew,
  updateEmptyWeight,
  updateIndex,
  updateConfig,
} from '../../redux/BasicDataSlice';
import { BasicDataForm } from '../Popups/BasicData/BasicDataForm';
import './popup.css';

function ActualPopup(props) {
  const { open } = props;
  const [isOpen, setIsOpen] = useState(open);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      keepMounted={true}
      aia-describedly='alert-dialog-slide-description'
    >
      <BasicDataForm close={handleClose} />
    </Dialog>
  );
}

export default ActualPopup;
