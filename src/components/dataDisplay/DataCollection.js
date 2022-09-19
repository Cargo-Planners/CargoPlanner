import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const DataCollection = () => {
  const objectsData = useSelector((state) => state.objectsData);

  return (
    <Fragment>
      <div id="data-col-win">
        <h1 id="data-col-h1">General Data Collection</h1>
        <div
          id="data-col-h2"
          className="grid grid-cols-2 gap-2 place-items-start m-12 ml-20 font-semibold text-2xl"
        >
          <h2>ZFW : {objectsData.ZFW}</h2>
          <h2>Take-Off Weight: {objectsData.takeOffWeight}</h2>
          <h2>Total Fuel: {objectsData.fuel}</h2>
          <h2> Index: {objectsData.totalIndex}</h2>
          <h2> MAC: {objectsData.MAC}</h2>
          <h2> AREA: {objectsData.areaGraph}</h2>
          <h2>MAC Range: {objectsData.MACRange}</h2>{" "}
          <h2>Total Cargo Weight: {objectsData.totalCargoWeight}</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default DataCollection;
