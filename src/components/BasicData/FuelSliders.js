import React from "react";
import { useState } from "react";
import Slider from "./Slider";

const FuelSliders = () => {
  // const [sildersIsTrue, setSilders] = useState(false);
  return (
    <div id="fuel-silders">
      <label className="text-lg">פודי דלק</label>
      <Slider label="External" />
      <Slider label="Auxiliary" />
      <Slider label="Inboard" />
      <Slider label="Outboard" />
    </div>
  );
};

export default FuelSliders;
