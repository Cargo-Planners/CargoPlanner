import React from "react";
import Select from "react-select";
import TextBox from "./TextBox";
import FuelData from "./FuelData";
import "reactjs-popup/dist/index.css";

import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  updateState,
} from "../../redux/EditBasicDataSlice";

import plus from "../../icons/plusIcon.png";
import minus from "../../icons/minusIcon.png";

import DataBox from "../dataDisplay/DataBox";

const configs = [
  { value: "1", label: "תצורה 1" },
  { value: "2", label: "תצורה 2" },
  { value: "3", label: "תצורה 3" },
  { value: "4", label: "תצורה 4" },
];

const people = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
];

const BasicData = () => {
  const { countPeople } = useSelector((state) => state.basicData);
  const { emptyWeight } = useSelector((state) => state.basicData);
  const dispatch = useDispatch();
  return (
    <div id="main-css" className="coolGrad">
      <div className="window-css">
        <h1 className="col-span-2 justify-self-center text-2xl">נתוני בסיס</h1>

        <div>
          <TextBox label="משקל ריק" placeholder="הכנס משקל ריק" />
          <TextBox label="אינדקס מטוס" placeholder="הכנס אינדקס מטוס" />
          <div>
            <label className="text-lg">תצורות</label>
            <Select options={configs} placeholder="בחר תצורה" />
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
        <input id="next-button" type="submit" value="הבא" />
      </div>
    </div>
  );
};

export default BasicData;
