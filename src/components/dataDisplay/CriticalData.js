import React from "react";
import DataBox from "./DataBox";
import FuelPodData from "./FuelPodData";


const CriticalData = () => {
  const totalWeight = 44;
  const totalIndex = 544;
  const loadsNumber = 54;
  const GC = 4;

  //   const fuelPodExternal = 4;
  //   const fuelPodInBoard = 43;
  //   const fuelPodAuxiliary = 34;
  //   const fuelPodOutBoard = 432;

  return (
    <div id="data-box">
      <h1 className="px-4 font-semibold justify-self-center">נתונים קריטים</h1>
      <div className="flex  ">
        <div id="flex-container" className="w-4/5 ">
          <DataBox bgColor="#FFF0E6" text="משקל כולל" data={totalWeight} />
          <DataBox bgColor="#E5F7FF" text="אינדקס כולל" data={totalIndex} />
          <DataBox bgColor="#ECEAFE" text=" מספר מטענים" data={loadsNumber} />
          <DataBox bgColor="#FEEAEA" text="מרכז כובד משוקלל" data={GC} />
        </div>
        <div className="w-1/5">
          <FuelPodData />
        </div>
      </div>
    </div>
  );
};

export default CriticalData;
