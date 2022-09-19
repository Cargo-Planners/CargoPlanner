import React from "react";
import loadSheetIcon from "../../icons/loadSheetIcon.png";
import showGraphsIcon from "../../icons/showGraphsIcon.png";
import deleteObjectIcon from "../../icons/deleteObjectIcon.png";
import deleteAllIcon from "../../icons/deleteAllIcon.png";
import baseDataIcon from "../../icons/baseDataIcon.png";
import EditBasicDataButton from "../Grid/EditBasicDataButton";

const Options = () => {
  return (
    <div className="container flex text-center mx-auto mt-10">
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
          <h2 className="mb-2 font-bold">Show Infographics</h2>
          <img
            className="h-20 w-20 mx-auto"
            src={showGraphsIcon}
            alt="showGraphsIcon"
          />
        </div>
        <div>
          <h2 className="mb-2 font-bold">Export to Loadsheet</h2>
          <img
            className="h-20 w-20 mx-auto"
            src={loadSheetIcon}
            alt="loadsheetIcon"
          />
        </div>
      </div>
    </div>
  );
};

export default Options;
