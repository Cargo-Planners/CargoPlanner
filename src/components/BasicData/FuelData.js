import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  updateSlider1,
  updateSlider2,
  updateSlider3,
  updateSlider4,
  updateSlider5,
} from "../../redux/EditBasicDataSlice";

import Slider from "./Slider";
import Radio from "./Radio";

const FuelData = () => {
  const dispatch = useDispatch();
  const { slider1, slider2, slider3, slider4, slider5 } = useSelector(
    (state) => state.basicData
  );

  const [Slider1, setSlider1] = useState();
  const [Slider2, setSlider2] = useState();
  const [Slider3, setSlider3] = useState();
  const [Slider4, setSlider4] = useState();
  const [Slider5, setSlider5] = useState();

  return (
    <div>
      <Radio />
      <Slider
        label="כמות דלק"
        value={slider1}
        changeValue={(Slider1) => {
          setSlider1(Slider1);
          dispatch(updateSlider1(Slider1));
        }}
      />
      <div id="fuel-silders">
        <label className="text-lg">פודי דלק</label>
        <Slider
          label="חיצוני"
          value={slider2}
          changeValue={(Slider2) => {
            setSlider2(Slider2);
            dispatch(updateSlider2(Slider2));
          }}
        />

        <Slider
          label="עזר"
          value={slider3}
          changeValue={(Slider3) => {
            setSlider3(Slider3);
            dispatch(updateSlider3(Slider3));
          }}
        />

        <Slider
          label="אין-בורד"
          value={slider4}
          changeValue={(Slider4) => {
            setSlider4(Slider4);
            dispatch(updateSlider4(Slider4));
          }}
        />
        <Slider
          label="אוט-בורד"
          value={slider5}
          changeValue={(Slider5) => {
            setSlider5(Slider5);
            dispatch(updateSlider5(Slider5));
          }}
        />
      </div>
    </div>
  );
};

export default FuelData;
