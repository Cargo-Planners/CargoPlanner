import React from "react";
import CGrid from "../components/Grid/cGrid";
import SideBar from "../components/SideBar/SideBar";
import DataCollection from "../components/dataDisplay/DataCollection";
import ObjectList from "../components/ObjectList/ObjectList";
import Options from "../components/Options/Options";
import { useRef } from "react";

const Home = () => {
  const fabricRef = useRef(null);

  return (
    <div>
      <div className="flex flex-col">
        <Options />
        <CGrid ref={fabricRef} />
        <SideBar ref={fabricRef}/>
        <div className="flex justify-evenly ">
          <DataCollection />
          <ObjectList />
        </div>
      </div>
    </div>
  );
};

const HomeWithforwardedRef = React.forwardRef(Home);
export default HomeWithforwardedRef;
