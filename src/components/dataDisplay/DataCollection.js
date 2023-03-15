import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import eventBus from "../Grid/eventBus";

const DataCollection = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const objectsData = useSelector((state) => state.objectsData);
  eventBus.on("setSideBarValue", (data) => {
    setSideBarOpen(!isSideBarOpen);
  });
  return (
    <div className="flex justify-center content-center bg-[#fffae1] col-start-1 col-end-12 border-[#000000] border-2 rounded-[100px] w-4/5 ml-[100px]">
      <div
        id="data-col-win2"
        className="flex justify-center self-center content-center items-center  rounded-3xl w-4/5"
      >
        <h1 id="data-col-h1" className="mb-10">
          General Data Collection
        </h1>
        <div
          id="data-col-h2"
          className="grid grid-cols-2 gap-2 place-items-start font-semibold text-[#000000] mb-0"
        >
          <h2 className="flex flex-row text-[#000000] font-bold	">
            ZFW : &nbsp;<h1 className="font-normal">{objectsData.ZFW}</h1>
          </h2>
          <h2 className="flex flex-row text-[#000000] font-bold	">
            Take-Off Weight : &nbsp;
            <h1 className="font-normal">{objectsData.takeOffWeight}</h1>
          </h2>
          <h2 className="flex flex-row text-[#000000] font-bold	">
            Total Fuel : &nbsp;
            <h1 className="font-normal">{objectsData.fuel}</h1>
          </h2>
          <h2 className="flex flex-row text-[#000000] font-bold	">
            {" "}
            Index : &nbsp;
            <h1 className="font-normal">{objectsData.totalIndex}</h1>
          </h2>
          <h2 className="flex flex-row text-[#000000] font-bold	">
            {" "}
            MAC &nbsp;<h1 className="font-normal">{objectsData.MAC}</h1>
          </h2>
          <h2 className="flex flex-row text-[#000000] font-bold	">
            {" "}
            AREA &nbsp;
            <h1 className="font-normal">{objectsData.areaGraph}</h1>
          </h2>
          <h2 className="flex flex-row text-[#000000] font-bold	">
            MAC Range : &nbsp;
            <h1 className="font-normal">{objectsData.MACRange}</h1>
          </h2>
          <h2 className="flex flex-row text-[#000000] font-bold	 mb-10">
            Total Cargo Weight : &nbsp;{" "}
            <h1 className="font-normal">{objectsData.totalCargoWeight}</h1>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DataCollection;
