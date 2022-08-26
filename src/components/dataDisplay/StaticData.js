import React from "react";
import DataBox from "./DataBox";

const StaticData = () => {
  const totalHeight = 250;
  const totalWidth = 30;
  const totalRampHeight = 33;
  const totalRampWidth = 55;

  return (
    <div id="data-bar">
      <h1 className="px-4 font-semibold justify-self-center mx-auto">נתונים קבועים</h1>
      <div id="flex-container">
        <DataBox bgColor="#FFF0E6" text="אורך כולל" data={totalHeight} />
        <DataBox bgColor="#ECFFE5" text="רוחב כולל" data={totalWidth} />
        <DataBox bgColor="#E6FFFA" text="אורך רמפה" data={totalRampHeight} />
        <DataBox bgColor="#E6E5FF" text="רוחב רמפה" data={totalRampWidth} />
      </div>
    </div>
  );
};

export default StaticData;
