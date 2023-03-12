import React, { Fragment, useState } from "react";
import PopUp from "../Grid/PopUp";
import { useSelector, useDispatch } from "react-redux";
import { calculateWeight, updateWeight } from "../../redux/ObjectsDataSlice";
import eventBus from "../Grid/eventBus";
import ObjectDetails from "./ObjectDetails";

const ObjectList = (props, fabricRef) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();
  const dispatch = useDispatch();
  const objectListItems = useSelector(
    (state) => state.objectsData.objectListItems
  );
  let fsValue = "";

  const weightChangeHandler = (e, index) => {
    const value = e.target.value === "" ? 0 : parseInt(e.target.value);
    dispatch(updateWeight({ value, index }));
    dispatch(calculateWeight());
  };

  const activeCalculateWeight = () => {
    dispatch(calculateWeight());
  };

  const setFs = () => {
    eventBus.dispatch("setFsValue", { message: fsValue });
  };

  const togglePopup = (index) => {
    setIsOpen(!isOpen);
    setCurrentIndex(index);
  };

  return (
    <Fragment>
      <div className="flex flex-col bg-[#FAC11A] w-1/3   rounded-t-3xl ">
        <h1 className="text-white text-2xl font-bold text-center my-2">
          Objects
        </h1>
        <div className="flex items-center">
          <button
            onClick={activeCalculateWeight}
            className="bg-[#FFE9A0] my-4 mx-auto py-2 px-4 rounded-lg" // Might not need this Button! ignore for now.
          >
            Update Total Weight
          </button>
          <button
            className="bg-[#FFE9A0] my-4 mx-auto py-2 px-4 rounded-lg"
            onClick={setFs}
          >
            Update FS
          </button>
        </div>
        <div className="flex flex-col mt-2">
          <div className="flex mb-2 text-center">
            <p className="w-1/5">ID</p>
            <p className="w-1/5">Name</p>
            <p className="w-1/5">Weight</p>
            <p className="w-1/5">FS</p>
            <p className="w-1/5">cell</p>
          </div>
          <div className="flex flex-col sidebar overflow-auto max-h-[230px] min-h-[50px] h-auto bg-[#FAC11A] text-right py-3 rounded-lg">
            {objectListItems.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex mb-2">
                  {/* onClick={setPopUp} What is this? */}
                  <p
                    className="w-1/5 my-auto text-center cursor-pointer"
                    onClick={() => togglePopup(index)}
                  >
                    {index}
                  </p>
                  <p className="w-1/5 my-auto text-center">{item.type}</p>
                  <input
                    name="item"
                    className="w-1/5 bg-[#FFE9A0] placeholder:text-center text-black"
                    placeholder="Weight"
                    onChange={(e) => weightChangeHandler(e, index)}
                    type="number"
                    min="0"
                  />
                  <input
                    className="w-1/5 bg-[#FFE9A0] placeholder:text-center text-black"
                    placeholder={objectListItems[index].fs}
                    //onChange={(e) => (objectListItems[index].fs)}
                    type="number"
                    min="0"
                  />
                  <p className="w-1/5 my-auto text-center">{index}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isOpen ? (
        <PopUp
          content={<ObjectDetails item={objectListItems[currentIndex]} />}
          handleClose={togglePopup}
        />
      ) : null}
    </Fragment>
  );
};

const ObjectListWithforwardedRef = React.forwardRef(ObjectList);
export default ObjectListWithforwardedRef;
