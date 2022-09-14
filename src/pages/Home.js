import React, { useState } from "react";
import CGrid from "../components/Grid/cGrid";
import SideBar from "../components/SideBar/SideBar";
import DataCollection from "../components/dataDisplay/DataCollection";
import ObjectList from "../components/ObjectList/ObjectList";
import Options from "../components/Options/Options"
import BasicData from "../components/BasicData/BasicData";

import Modal from 'react-modal';

const Home = () => {
  return (
    <div>
      <div className="flex flex-col">

        <Options />
        <CGrid />
        <ObjectList />
        <SideBar /> <DataCollection />
      </div>
    </div>
  );
};

export default Home;
