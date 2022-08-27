import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import DataBox from "./DataBox";

const DataCollection = () => {
  const staticData = useSelector((state) => state.staticData);

  return (
    <Fragment>
      <div className="flex flex-col mt-5">
        <h1 className="text-center text-3xl font-bold text-black mb-2">ריכוז נתונים</h1>
        <div className="flex justify-center gap-4">
          <div className="grid grid-cols-2">
            <DataBox
              bgColor="#E5F7FF"
              text="משקל מטען כולל"
              data={staticData.totalCargoWeight}
            />
            <DataBox
              bgColor="#E5F7FF"
              text="משקל המראה"
              data={staticData.takeOffWeight}
            />
            <DataBox
              bgColor="#E5F7FF"
              text="אינדקס כולל"
              data={staticData.totalIndex}
            />
            <DataBox
              bgColor="#E5F7FF"
              text="ZFW"
              data={staticData.ZFW}
            />
          </div>
          <div className="grid grid-cols-2">
            <DataBox
              bgColor="#FFF0E6"
              text="גרף AREA"
              data={staticData.areaGraph }
            />
            <DataBox
              bgColor="#FFF0E6"
              text="דלק"
              data={staticData.fuel}
            />
            <DataBox
              bgColor="#FFF0E6"
              text="MAC"
              data={staticData.MAC}
            />
            <DataBox
              bgColor="#FFF0E6"
              text="טווח MAC"
              data={staticData.MACRange}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DataCollection;
