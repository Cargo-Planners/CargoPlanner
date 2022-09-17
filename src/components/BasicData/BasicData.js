import React from "react";
import Select from "react-select";
import FuelData from "./FuelData";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCockpitCrew,
  decrementCockpitCrew,
  incrementInspectorsCrew,
  decrementInspectorsCrew,
  updateEmptyWeight,
  updateIndex,
  updateConfig,
} from "../../redux/EditBasicDataSlice";

import plus from "../../icons/plusIcon.png";
import minus from "../../icons/minusIcon.png";

import { useState } from "react";

const configs = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
];

const BasicData = ({ setModalIsOpen }) => {
  const {
    cockpitCrew,
    Crew,
    emptyWeight,
    index,
    config,
    fuelPod,
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
  } = useSelector((state) => state.basicData);

  const [Config, setConfig] = useState(null);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col w-11/12">
      <h1 className="text-center text-5xl font-bold my-4">Basic Data</h1>
      <div className="flex justify-around">
        <FuelData />
        <div>
          <div className="text-box-item">
            <input
              clasName="input-css"
              type="text"
              placeholder={emptyWeight}
              onChange={(event) => {
                dispatch(updateEmptyWeight(event.target.value));
              }}
            />
            <label className="text-lg">Empty Weight</label>
          </div>
          <div className="text-box-item">
            <input
              clasName="input-css"
              type="text"
              placeholder={index}
              onChange={(event) => {
                dispatch(updateIndex(event.target.value));
              }}
            />
            <label className="text-lg">Aircraft Index</label>
          </div>
          <div className="grid grid-cols-2 place-items-end ">
            <Select
              options={configs}
              defaultValue={config}
              onChange={(Config) => {
                setConfig(Config.value);
                dispatch(updateConfig(Config.value));
                console.log(Config.value);
              }}
              placeholder={"Option " + config}
            />
            <label className="text-lg">Formation</label>
          </div>
          <div className="place-items-start">
            <label className="text-lg "> Crew </label>
            <div id="counter-css">
              <button
                onClick={() => {
                  if (cockpitCrew > 0) dispatch(decrementCockpitCrew());
                }}
              >
                <img src={minus} alt="" />
              </button>
              <h1>{cockpitCrew}</h1>
              <button onClick={() => dispatch(incrementCockpitCrew())}>
                <img src={plus} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        id="next"
        onClick={() => {
          setModalIsOpen(false);
        }}
      >
        סגור
      </button>
    </div>
  );
};

export default BasicData;
