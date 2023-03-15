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
    <div className="flex justify-center self-center content-center col-span-1 row-span-2">
      <div className="flex flex-col bg-[#f9d63a] w-2/3 h-full rounded-lg border-[#252525] border-2">
        <h1 className="text-white text-2xl font-bold text-center my-2">
          Objects
        </h1>
        <div className="flex items-center">
          <button
            onClick={activeCalculateWeight}
            className="bg-[#f9d63a] my-4 mx-auto py-2 px-4 rounded-lg text-[#ffffff] font-bold border-[#252525] border-2" // Might not need this Button! ignore for now.
          >
            Update Total Weight
          </button>
          <button
            className="bg-[#f9d63a] my-4 mx-auto py-2 px-4 rounded-lg text-[#ffffff] font-bold"
            onClick={setFs}
          >
            Update FS
          </button>
        </div>
        <div className="flex flex-col mt-2">
          <div className="flex mb-2 text-center">
            <p className="w-1/5 text-white">ID</p>
            <p className="w-1/5 text-white">Name</p>
            <p className="w-1/5 text-white">Weight</p>
            <p className="w-1/5 text-white">FS</p>
            <p className="w-1/5 text-white">cell</p>
          </div>
          <div className="flex flex-col sidebar overflow-auto h-auto bg-[#f9d63a] text-right py-3 rounded-b-lg	overflow-hidden	">
            {objectListItems.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex mb-2">
                  {/* onClick={setPopUp} What is this? */}
                  <p
                    className="w-1/5 my-auto text-center cursor-pointer text-white"
                    onClick={() => togglePopup(index)}
                  >
                    {index}
                  </p>
                  <p className="w-1/5 my-auto text-center text-white ">
                    {item.type}
                  </p>
                  <input
                    name="item"
                    className="w-1/5 bg-[#ffffff] text-white pl-[5px]"
                    placeholder="Weight"
                    onChange={(e) => weightChangeHandler(e, index)}
                    type="number"
                    min="0"
                  />
                  <input
                    className="w-1/5 bg-[#ffffff] text-white pl-[5px]"
                    placeholder={objectListItems[index].fs}
                    //onChange={(e) => (objectListItems[index].fs)}
                    type="number"
                    min="0"
                  />
                  <p className="w-1/5 my-auto text-center text-white">
                    {index}
                  </p>
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
    </div>
  );
};

const ObjectListWithforwardedRef = React.forwardRef(ObjectList);
export default ObjectListWithforwardedRef;
