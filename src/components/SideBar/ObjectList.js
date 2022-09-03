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
    <div className="w-auto my-6">
      <div className="flex flex-col">
        <div className="flex justify-evenly mb-2">
          <p>שם</p>
          <p>משקל(KG)</p>
          <p className="pl-4">מרחק(FS)</p>
        </div>
        <div className="flex flex-col min-h-[50px] h-auto bg-[#72C4D8] text-right p-3 rounded-lg">
          {objectListItems.map((item, index) => (
            <div key={index} className={'flex mb-2 gap-2'}>
              <p className="w-1/3">{item}</p>
              <input
                name={`item ${index}`}
                onChange={(e) => weightChangeHandler(e)}
                className="w-1/3 bg-[#8EDBED]"
                placeholder="משקל"
              />
              <input
                className="w-1/3 bg-[#8EDBED]"
                placeholder="0"
                onChange={(e) => (fsValue = (e.target.value - 245))}
              />
              <button onClick={setFs}>שלח</button>
            </div>
          ))}
          <button
            onClick={calculateWeight}
            className="bg-[#8EDBED] mt-4 mx-auto py-2 px-4 rounded-lg"
          >
            עדכן משקל מטען כולל
          </button>
        </div>
      </div>
    </div>
  );
};

export default ObjectList;
