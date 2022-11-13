import React, { Fragment, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SideBarItems from "./SideBarItems";
import eventBus from "../Grid/eventBus";

const SideBar = (props, fabricRef) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const setSideBar = () => {
    eventBus.dispatch("setSideBarValue", { message:"" });
  };
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center h-0 py-2 z-0">
        {showSidebar ? (
          <button
            className="flex text-5xl fixed left-2 top-2  text-[#1E1E22] items-center cursor-pointer z-10"
            onClick={() => {setShowSidebar(!showSidebar); setSideBar();}}
          >
            <div className="flex items-center gap-3 bg-[#FAC11A]">
              <FaTimes size={40} />
              <h2 className="text-xl font-bold text-[#1E1E22]">Gulliver</h2>
            </div>
          </button>
        ) : (
          <button
            className="flex text-5xl fixed left-2 top-2  text-[#1E1E22] items-center cursor-pointer z-10"
            onClick={() => {setShowSidebar(!showSidebar); setSideBar();}}
          >
            <FaBars size={40} />
          </button>
        )}
        <div
          className={`sidebar fixed top-0 overflow-auto left-0 w-[15%] bg-[#FAC11A] text-white h-full p-5 ease-in-out duration-100 ${
            showSidebar ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        >
          <SideBarItems ref={fabricRef} />
        </div>
      </div>
    </Fragment>
  );
};

const SideBarWithforwardedRef = React.forwardRef(SideBar);
export default SideBarWithforwardedRef;
