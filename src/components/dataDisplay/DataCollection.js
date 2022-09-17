import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const DataCollection = () => {
  const staticData = useSelector((state) => state.staticData);

  return (
    <Fragment>
      <div id="data-col-win">
        <h1 id="data-col-h1">General Data Collection</h1>
        <div
          id="data-col-h2"
          className="grid grid-cols-2 gap-2 place-items-end m-12 ml-20 font-semibold text-2xl"
        >
          <h2>ZFW : {staticData.ZFW}</h2>
          <h2>Take-Off Weight: {staticData.takeOffWeight}</h2>
          <h2>Total Fuel: {staticData.fuel}</h2>
          <h2> Index: {staticData.totalIndex}</h2>
          <h2> MAC: {staticData.MAC}</h2>
          <h2> AREA: {staticData.areaGraph}</h2>
          <h2>MAC Range: {staticData.MACRange}</h2>{" "}
          <h2>Total Cargo Weight: {staticData.totalCargoWeight}</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default DataCollection;
