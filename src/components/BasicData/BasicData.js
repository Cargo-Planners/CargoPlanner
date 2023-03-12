import React from "react";
import Select from "react-select";
import FuelData from "./FuelData";
import Radio from "./Radio";
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
import Fuel from "../../icons/Fuel.png";
import close from "../../icons/close.png";

import { useState } from "react";
import Modal from "react-modal";

const configs = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
];

const BasicData = ({ setModalIsOpen }) => {
  const { cockpitCrew, inspectorsCrew, emptyWeight, index, config, fuelPod } =
    useSelector((state) => state.basicData);

  const [Config, setConfig] = useState(null);
  const [fuelModalIsOpen, setFuelModalIsOpen] = useState(false);

  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          setModalIsOpen(false);
        }}
        id="close"
      >
        <img src={close} alt="" />
      </button>
      <h1 className="text-center text-5xl font-bold my-4  ">Basic Data</h1>

      <label className="label-font-w">Aircraft:</label>
      <div className="box-item">
        <label className="label-font-b">Empty Weight:</label>
        <input
          className="input-css"
          type="text"
          placeholder={emptyWeight}
          onChange={(event) => {
            dispatch(updateEmptyWeight(event.target.value));
          }}
        />
      </div>
      <div className="box-item">
        <label className="label-font-b">Aircraft Index:</label>
        <input
          className="input-css"
          type="text"
          placeholder={index}
          onChange={(event) => {
            dispatch(updateIndex(event.target.value));
          }}
        />
      </div>
      <div className="box-item">
        <label className="label-font-b">Formation:</label>
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
      </div>
      <label className="label-font-w">Crew:</label>

      <div id="counter-css">
        <label className="label-font-b">Cockpit Crew:</label>
        <div id="counter-comp-css">
          <button
            onClick={() => {
              if (cockpitCrew > 0) dispatch(decrementCockpitCrew());
            }}
          >
            <img src={minus} alt="" className="plus-minus" />
          </button>
          <h1 className="text-xl">{cockpitCrew}</h1>
          <button onClick={() => dispatch(incrementCockpitCrew())}>
            <img src={plus} alt="" className="plus-minus" />
          </button>
        </div>
      </div>

      <div id="counter-css">
        <label className="label-font-b">Inspectors Crew:</label>
        <div id="counter-comp-css">
          <button
            onClick={() => {
              if (inspectorsCrew > 0) dispatch(decrementInspectorsCrew());
            }}
          >
            <img src={minus} alt="" className="plus-minus" />
          </button>
          <h1 className="text-xl">{inspectorsCrew}</h1>
          <button onClick={() => dispatch(incrementInspectorsCrew())}>
            <img src={plus} alt="" className="plus-minus" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 mb-6 mt-4">
        <label className="label-font-w">Fuel Distribution:</label>
        <button onClick={() => setFuelModalIsOpen(true)}>
          <img src={Fuel} alt="" id="fuel-img" />
        </button>

        <label className="label-font-b">POD/NO POD:</label>
        <Radio />
      </div>

      <Modal
        isOpen={fuelModalIsOpen}
        appElement={document.getElementById("root") || undefined}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#3A3A35",
          },
          content: {
            backgroundColor: "#3D3E43",
            display: "flex",
            justifyContent: "center",
            borderRadius: "20px",
            width: "1050px",
            height: "800px",
            margin: "auto",
            marginTop: "3vh",
            padding: "10px",
            position: "relative",
          },
        }}
      >
        <FuelData setFuelModalIsOpen={setFuelModalIsOpen} />
      </Modal>
    </div>
  );
};

export default BasicData;
