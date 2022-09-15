import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const DataCollection = () => {
  const staticData = useSelector((state) => state.staticData);

  return (
    <Fragment>
      <div id="data-col-win">
        <h1 id="data-col-h1">ריכוז נתונים כללי</h1>
        <div id="data-col-h2" className="grid grid-cols-2 gap-2 place-items-center">

          <h2>משקל המראה : {staticData.takeOffWeight}</h2>
          <h2>ZFW  : {staticData.ZFW}</h2>
          <h2> Index : {staticData.totalIndex}</h2>
          <h2> סה"כ דלק : {staticData.fuel}</h2>
          <h2> AREA : {staticData.areaGraph}</h2>
          <h2> MAC : {staticData.MAC}</h2>
          <h2>משקל מטען כולל : {staticData.totalCargoWeight}</h2>
          <h2> טווחי MAC : {staticData.MACRange}</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default DataCollection;

