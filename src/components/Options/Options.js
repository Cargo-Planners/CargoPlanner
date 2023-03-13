import React, { useState } from "react";
import { Link } from "react-router-dom";
import loadSheetIcon from "../../icons/loadSheetIcon.png";
import showGraphsIcon from "../../icons/showGraphsIcon.png";
import deleteObjectIcon from "../../icons/deleteObjectIcon.png";
import deleteAllIcon from "../../icons/deleteAllIcon.png";
import baseDataIcon from "../../icons/baseDataIcon.png";
import EditBasicDataButton from "../Grid/EditBasicDataButton";
import { routeConstants } from "../../Routes/constants";
import eventBus from "../Grid/eventBus";
import { useSelector, useDispatch } from "react-redux";

const Options = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const objectListItems = useSelector((state) => state.objectsData);
  const basicData = useSelector((state) => state.basicData);

  eventBus.on("setSideBarValue", (data) => {
    setSideBarOpen(!isSideBarOpen);
  });
  const togglePopUp = () => {
    console.log("something?");
    setModalOpen(true);
    console.log("basic data is:", basicData);
    console.log("objects are:", objectListItems);
  };
  return (
    <div
      className={`flex text-center w-4/5 ${!isSideBarOpen ? "ml-auto" : ""}`}
    >
      <div className="flex mx-auto gap-10">
        <div>
          <h2 className="mb-2 font-bold">Basic Data</h2>
          <EditBasicDataButton img={baseDataIcon} />
        </div>
        <div>
          <h2 className="mb-2 font-bold">Erase all</h2>
          <img
            className="h-20 w-20 mx-auto"
            src={deleteAllIcon}
            alt="deleteAllIcon"
          />
        </div>
        <div>
          <h2 className="mb-2 font-bold">Delete Object</h2>
          <img
            className="h-20 w-20 mx-auto"
            src={deleteObjectIcon}
            alt="deleteObjectIcon"
          />
        </div>
        <div>
          <Link to={routeConstants.GraphsRoute}>
            <h2 className="mb-2 font-bold">Show Infographics</h2>
            <img
              className="h-20 w-20 mx-auto"
              src={showGraphsIcon}
              alt="showGraphsIcon"
            />
          </Link>
        </div>

        <button onClick={togglePopUp}>
          <div>
            <h2 className="mb-2 font-bold">Export to Loadsheet</h2>
            <img
              className="h-20 w-20 mx-auto"
              src={loadSheetIcon}
              alt="loadsheetIcon"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Options;
