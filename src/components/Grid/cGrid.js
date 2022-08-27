import React, { Fragment} from "react";
import DynamicObj from "./DynamicObj";

function CGrid() {

  return (
    <Fragment>
      <div className="container flex justify-center mt-2 mx-auto h-[400px]">
        <div className="gridContainer flex flex-col mt-10" >
          <div className="startEndGrid">
            <h2>737</h2>
            <h2>245</h2>
          </div>
          <DynamicObj />
        </div>
      </div>
    </Fragment>
  );
}

export default CGrid;
