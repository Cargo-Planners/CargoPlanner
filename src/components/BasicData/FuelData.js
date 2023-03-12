import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSlider1,
  updateSlider2,
  updateSlider3,
  updateSlider4,
  updateSlider5,
} from "../../redux/EditBasicDataSlice";

import fuelTank from "../../images/fuelTank.png";
import Slider from "./Slider";
import close from "../../icons/close.png";

const FuelData = ({ setFuelModalIsOpen }) => {
  const dispatch = useDispatch();
  const { slider1, slider2, slider3, slider4, slider5, fuelPod } = useSelector(
    (state) => state.basicData
  );

  const [Slider1, setSlider1] = useState();
  const [Slider2, setSlider2] = useState();
  const [Slider3, setSlider3] = useState();
  const [Slider4, setSlider4] = useState();
  const [Slider5, setSlider5] = useState();

  const s1Height = {
    height: slider1 + "%",
  };
  const s2Height = {
    height: slider2 + "%",
  };
  const s3Height = {
    height: slider3 + "%",
  };
  const s4Height = {
    height: slider4 + "%",
  };

  const s5Height = {
    height: slider5 + "%",
  };

  return (
    <div
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#3A3A35",
          opacity: 0.95,
        },
        content: {
          backgroundColor: "#CFA015",
          display: "flex",

          borderRadius: "20px",
          width: "550px",
          margin: "auto",
          marginTop: "15vh",
          padding: "10px",
          position: "relative",
        },
      }}
    >
      <button onClick={() => setFuelModalIsOpen(false)} id="close-fuel">
        <img src={close} alt="" />
      </button>
      <h1 className=" text-5xl font-bold text-white text-center justify-self-center">
        Fuel Distribution
      </h1>
      <div id="fuel-silders">
        <Slider
          label="Outboard:"
          value={slider1}
          changeValue={(Slider1) => {
            setSlider1(Slider1);
            dispatch(updateSlider1(Slider1));
          }}
        />

        <Slider
          label="INB:"
          value={slider2}
          changeValue={(Slider2) => {
            setSlider2(Slider2);
            dispatch(updateSlider2(Slider2));
          }}
        />

        <Slider
          label="Fuselage:"
          value={slider3}
          changeValue={(Slider3) => {
            setSlider3(Slider3);
            dispatch(updateSlider3(Slider3));
          }}
        />

        <Slider
          label="INB:"
          value={slider4}
          changeValue={(Slider4) => {
            setSlider4(Slider4);
            dispatch(updateSlider4(Slider4));
          }}
        />
        <Slider
          label="Outboard:"
          value={slider5}
          changeValue={(Slider5) => {
            setSlider5(Slider5);
            dispatch(updateSlider5(Slider5));
          }}
        />
      </div>
      <h1 id="podState">{fuelPod ? "POD" : "NO POD"}</h1>{" "}
      <div id="plane-tanks" style={{ backgroundImage: `url(${fuelTank})` }}>
        <div id="outboard1" className="tank-container">
          <div id="tank-outBoard" style={s1Height}></div>
        </div>
        <div id="outboard2" className="tank-container">
          <div id="tank-outBoard" style={s5Height}></div>
        </div>

        <div id="inboard1" className="tank-container">
          <div id="tank-inBoard" style={s2Height}></div>
        </div>
        <div id="inboard2" className="tank-container">
          <div id="tank-inBoard" style={s4Height}></div>
        </div>
        <div id="fuselage" className="tank-container">
          <div id="tank-fuselage" style={s3Height}></div>
        </div>
      </div>
    </div>
  );
};

export default FuelData;
