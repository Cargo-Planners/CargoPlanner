import React, { Fragment, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SideBarItems from "./SideBarItems";

const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center h-0 py-2">
        {showSidebar ? (
          <button
            className="flex text-5xl fixed right-2 top-2  text-white items-center cursor-pointer z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <div className="flex items-center gap-3 bg-[#8EDBED] pl-7">
              <FaTimes size={40} />
              <h2 className="text-xl font-bold text-[#185B6C]">
                תכנון תא מטען
              </h2>
            </div>
          </button>
        ) : (
          <button
            className="flex text-5xl fixed right-2 top-2  text-[#8EDBED] items-center cursor-pointer z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <FaBars size={40} />
          </button>
        )}
        <div
          className={`sidebar fixed top-0 overflow-auto right-0 w-[20%] bg-[#8EDBED] text-white h-full p-5 ease-in-out duration-100 ${
            showSidebar ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <SideBarItems />
        </div>
      </div>
    </Fragment>
  );
};

export default SideBar;
