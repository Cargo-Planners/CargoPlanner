import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWeight } from "../../redux/EditStaticDataButtonSlice";
import eventBus from "../Grid/eventBus";

const ObjectList = () => {
  const dispatch = useDispatch();
  const [totalWeight, setTotalWeight] = useState(0);
  const [values, setValues] = useState({});
  const objectListItems = useSelector(
    (state) => state.fixedCargo.objectListItems
  );
  let fsValue = "";

  const weightChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (value === "") {
      value = 0;
    }
    const newValues = {
      ...values,
      [name]: parseInt(value),
    };
    setValues(newValues);
    calcTotalValue(newValues);
  };

  const calcTotalValue = (newValues) => {
    let sum = Object.values(newValues).reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
    setTotalWeight(sum);
  };

  const calculateWeight = () => {
    dispatch(addWeight(totalWeight));
  };

  const setFs = () => {
    eventBus.dispatch("setFsValue", { message: fsValue });
  };

  return (
    <div className="bg-[#FAC11A] w-1/4 my-6 ml-16 mr-auto rounded-t-3xl ">
      <h1 className="text-white font-bold text-center my-2">מטענים</h1>
      <div className="flex flex-col mt-2">
        <div className="flex justify-evenly mb-2">
          <p>מס</p>
          <p>שם</p>
          <p>משקל</p>
          <p className="pl-4">FS</p>
        </div>
        <div className="flex flex-col sidebar overflow-auto max-h-[100px] min-h-[50px] h-auto bg-[#FAC11A] text-right p-3 rounded-lg">
          {objectListItems.map((item, index) => (
            <div className="flex flex-col">
              <div key={index} className={"flex mb-2 gap-2"}>
                <p className="w-1/4 m-auto text-center">{index}</p>
                <p className="w-1/4 m-auto text-center">{item}</p>
                <input
                  name={`item ${index}`}
                  onChange={(e) => weightChangeHandler(e)}
                  className="w-1/4 bg-[#6C614B] text-white"
                  placeholder="מש"
                />
                <input
                  className="w-1/4 bg-[#6C614B] text-white"
                  placeholder="0"
                  onChange={(e) => (fsValue = e.target.value - 245)}
                />
              </div>
              <button className="bg-[#6C614B] w-1/4 mx-auto rounded-lg text-center" onClick={setFs}>עדכן FS</button>
            </div>
          ))}
          <button
            onClick={calculateWeight}
            className="bg-[#6C614B] mt-4 mx-auto py-2 px-4 rounded-lg"
          >
            עדכן משקל מטען כולל
          </button>
        </div>
      </div>
    </div>
  );
};

export default ObjectList;
