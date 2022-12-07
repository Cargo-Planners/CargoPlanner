import React from "react";
import WeightLimitChart from "../images/WeightLimitChart.png";
import WeightLimitChart2 from "../images/WeightLimitChart2.png";
import CenterOfGravityMac from "../images/CenterOfGravitiyMac.png";

const Graphs = () => {
  return (
    <div>
      <h1 className="font-bold text-center text-3xl my-10">Crago Graphs</h1>
      <div className="min-h-screen flex flex-col">
        <div className="h-[calc(100vh-36px)] flex justify-evenly">
          <img className="w-1/2 " src={WeightLimitChart} alt="img" />
          <img className="w-1/3 " src={WeightLimitChart2} alt="img" />
        </div>
        <div className="flex justify-center mt-10">
          <img className="w-1/4 h-screen" src={CenterOfGravityMac} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Graphs;
