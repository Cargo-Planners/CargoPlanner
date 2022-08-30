import React from "react";
import { useState } from "react";
import FuelSliders from "./FuelSliders";
import Slider from "./Slider";

const FuelData = () => {
  return (
    <div>
      <h2 className="text-lg">פודי דלק</h2>
      <div id="checkBoxes">
        <div>
          <input type="checkbox" />
          <label>כן</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>לא</label>
        </div>
      </div>
      <Slider label="כמות דלק" />
      <FuelSliders />
    </div>
  );
};

export default FuelData;
