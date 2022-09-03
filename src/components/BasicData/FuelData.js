import React from "react";
import { useState } from "react";
import FuelSliders from "./FuelSliders";
import Slider from "./Slider";
import Radio from "./Radio";

const FuelData = () => {
  return (
    <div>
      <Radio />
      <Slider label="כמות דלק" />
      <FuelSliders />
    </div>
  );
};

export default FuelData;
