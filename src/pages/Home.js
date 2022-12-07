import React, { useState } from "react";
import CGrid from "../components/Grid/cGrid";
import SideBar from "../components/SideBar/SideBar";
import DataCollection from "../components/DataDisplay/DataCollection";
import ObjectList from "../components/ObjectList/ObjectList";
import Options from "../components/Options/Options";
import { useRef } from "react";
import eventBus from "../components/Grid/eventBus";

const Home = () => {
  const fabricRef = useRef(null);
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  eventBus.on("setSideBarValue", (data) => {
    setSideBarOpen(!isSideBarOpen);
  });

  return (
    <div>
      <SideBar ref={fabricRef} />
      <div className="min-h-screen flex flex-col justify-center gap-16 items-center">
        <Options />
        <CGrid ref={fabricRef} />
        <div
          className={`flex justify-evenly w-4/5 ${
            !isSideBarOpen ? "ml-auto" : ""
          }`}
        >
          <DataCollection />
          <ObjectList />
        </div>
      </div>
    </div>
  );
};

const HomeWithforwardedRef = React.forwardRef(Home);
export default HomeWithforwardedRef;
