import React, { Fragment} from "react";
import DynamicObj from "./DynamicObj";

function CGrid() {

  return (
    <Fragment>
      <div className="flex justify-center mt-12 mr-20">
        <div className="gridContainer" >
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
