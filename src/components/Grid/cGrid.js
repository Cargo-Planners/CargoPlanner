import React, { useState, Fragment } from "react";
import DynamicObj from "./DynamicObj";
import eventBus from "./eventBus";

function CGrid(props, fabricRef) {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  eventBus.on("setSideBarValue", (data) => {
    setSideBarOpen(!isSideBarOpen);
  });
  return (
    <Fragment>
      <div
        className={`flex justify-center items-center w-4/5 min-h-[412.88px] ${
          !isSideBarOpen ? "ml-auto" : ""
        }`}
      >
        <div className="gridContainer flex flex-col mb-6">
          <div className="startEndGrid">
            <h2>245</h2>
            <h2>737</h2>
          </div>
          <DynamicObj ref={fabricRef} />
        </div>
      </div>
    </Fragment>
  );
}

const CGridWithforwardedRef = React.forwardRef(CGrid);
export default CGridWithforwardedRef;
