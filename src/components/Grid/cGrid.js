import React, { Fragment } from "react";
import DynamicObj from "./DynamicObj";

function CGrid(props, fabricRef) {
  return (
    <Fragment>
      <div className="container flex justify-center mt-2 mx-auto h-[400px]">
        <div className="gridContainer flex flex-col mt-10">
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
