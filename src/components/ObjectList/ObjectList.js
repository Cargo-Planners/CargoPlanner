import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWeight } from "../../redux/EditStaticDataButtonSlice";
import eventBus from "../Grid/eventBus";
// import PopUp from "../Grid/PopUp";
// import { fabric } from "fabric";

const ObjectList = (props, fabricRef) => {
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

  const setPopUp = () => {
    eventBus.dispatch("setPopup", {});
  };


  return (
    <Fragment>
      <div className="flex flex-col bg-[#FAC11A] w-1/3  my-6 rounded-t-3xl">
        <h1 className="text-white text-2xl font-bold text-center my-2">
          Objects
        </h1>
        <div className="flex flex-col mt-2">
          <div className="flex mb-2 text-center">
            <p className="w-1/5">Num</p>
            <p className="w-1/5">Name</p>
            <p className="w-1/5">Weight</p>
            <p className="w-1/5">FS</p>
            <p className="w-1/5">cell</p>
          </div>
          <div className="flex flex-col sidebar overflow-auto max-h-[230px] min-h-[50px] h-auto bg-[#FAC11A] text-right p-3 rounded-lg">
            {objectListItems.map((item, index) => (
              <div className="flex flex-col">
                <div
                  key={index}
                  className={"flex mb-2 gap-2"}
                  onClick={setPopUp}
                >
                  <p className="w-1/5 m-auto text-center">{index}</p>
                  <p className="w-1/5 m-auto text-center">{item}</p>
                  <input
                    name={`item`}
                    onChange={(e) => weightChangeHandler(e)}
                    className="w-1/5 bg-transparent text-white"
                    placeholder="Weight"
                  />
                  <input
                    className="w-1/5 bg-transparent text-white"
                    placeholder="FS"
                    onChange={(e) => (fsValue = e.target.value - 245)}
                  />
                  <p className="w-1/5 m-auto text-center">{index}</p>
                </div>
                <button
                  className="bg-[#6C614B] w-1/4 mx-auto rounded-lg text-center"
                  onClick={setFs}
                >
                  Update FS
                </button>
              </div>
            ))}
            <button
              onClick={calculateWeight}
              className="bg-[#6C614B] mt-4 mx-auto py-2 px-4 rounded-lg"
            >
              Update Total Weight
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ObjectList;
