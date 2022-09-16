import React from "react";
import CGrid from "../components/Grid/cGrid";
import SideBar from "../components/SideBar/SideBar";
import DataCollection from "../components/dataDisplay/DataCollection";
import ObjectList from "../components/ObjectList/ObjectList";
import Options from "../components/Options/Options";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col">
        <Options />
        <CGrid />
        <SideBar />
        <div className="flex gap-10">
          <DataCollection />
          <ObjectList />
        </div>
      </div>
    </div>
  );
};

export default Home;
