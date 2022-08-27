import React from "react";
import CGrid from "../components/Grid/cGrid";
import SideBar from "../components/SideBar/SideBar";
// import StaticData from "../components/dataDisplay/StaticData";
// import CriticalData from "../components/dataDisplay/CriticalData";
import DataCollection from "../components/dataDisplay/DataCollection";

const Home = () => {

  return (
    <div>
      <div className="flex flex-col">
        <DataCollection />
        <CGrid />
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
