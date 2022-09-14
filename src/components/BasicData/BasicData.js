import React from "react";
import Select from "react-select";
import FuelData from "./FuelData";
import "reactjs-popup/dist/index.css";

import { Link } from "react-router-dom";
import { routeConstants } from "../../Routes/constants";

import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  updateEmptyWeight,
  updateIndex,
  updateConfig,
} from "../../redux/EditBasicDataSlice";

import plus from "../../icons/plusIcon.png";
import minus from "../../icons/minusIcon.png";

import { useState } from "react";

const configs = [
  { value: "1", label: "תצורה 1" },
  { value: "2", label: "תצורה 2" },
  { value: "3", label: "תצורה 3" },
  { value: "4", label: "תצורה 4" },
];

const BasicData = ({ setModalIsOpen }) => {
  const { countPeople, emptyWeight } = useSelector((state) => state.basicData);

  const [EmptyWeight, setEmptyWeight] = useState(0);
  const [Index, setIndex] = useState(0);
  const [Config, setConfig] = useState(null);

  const dispatch = useDispatch();

  return (

    <div className="window-css">
      <h1 className="col-span-2 justify-self-center text-5xl font-bold">נתוני בסיס</h1>

      <div>
        <div className="text-box-item">
          <label className="text-lg">משקל ריק</label>
          <input
            clasName="input-css"
            placeholder="הכנס משקל ריק"
            type="text"
            onChange={(event) => {
              setEmptyWeight(event.target.value);
              dispatch(updateEmptyWeight(EmptyWeight));
            }}
          />
        </div>
        <div className="text-box-item">
          <label className="text-lg">אינדקס מטוס</label>
          <input
            clasName="input-css"
            placeholder="הכנס אינדקס מטוס"
            type="text"
            onChange={(event) => {
              setIndex(event.target.value);
              dispatch(updateIndex(Index));
            }}
          />
        </div>

        <div>
          <label className="text-lg">תצורות</label>
          <Select
            options={configs}
            defaultValue={Config}
            onChange={(Config) => {
              setConfig(Config.value);
              dispatch(updateConfig(Config));
            }}
            placeholder="בחר תצורה"
          />
        </div>
        <div id="people-css">
          <label className="text-lg"> אנשי צוות</label>
          <button onClick={() => dispatch(increment())}>
            <img src={plus} alt="" />
          </button>
          <h1>{countPeople}</h1>
          <button
            onClick={() => {
              if (countPeople > 0) dispatch(decrement());
            }}
          >
            <img src={minus} alt="" />
          </button>
        </div>
      </div>
      <FuelData />

      <button id="next" onClick={() => {
        setModalIsOpen(false);

      }}>
        סגור
      </button>
    </div>

  );
};

export default BasicData;
