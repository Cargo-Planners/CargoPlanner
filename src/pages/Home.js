import React, { useState } from "react";
import CGrid from "../components/Grid/cGrid";
import SideBar from "../components/SideBar/SideBar";
import DataCollection from "../components/dataDisplay/DataCollection";
import ObjectList from "../components/ObjectList/ObjectList";
import Options from "../components/Options/Options";
import { useRef } from "react";
import eventBus from "../components/Grid/eventBus";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fabric } from "fabric";

const Home = () => {
  const fabricRef = useRef(null);
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  useEffect(() => {
    eventBus.on("setSideBarValue", (data) => {
      setSideBarOpen(!isSideBarOpen);
      console.log(isSideBarOpen);
    });
  }, []);

  return (
    <div>
      <SideBar ref={fabricRef} />
      <div className="grid grid-cols-13 w-4/5 ml-1/10 ml-auto bg-[#fafafa] overflow-hidden">
        <CGrid ref={fabricRef} />
        <ObjectList ref={fabricRef} />
        <DataCollection />
      </div>
    </div>
  );
};

const HomeWithforwardedRef = React.forwardRef(Home);
export default HomeWithforwardedRef;
