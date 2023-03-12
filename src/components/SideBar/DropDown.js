import React from "react";
import { AiFillCar } from "react-icons/ai";
import { GiOldWagon } from "react-icons/gi";
import { TbOvalVertical } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/ObjectsDataSlice";

const DropDown = () => {
  const dispatch = useDispatch();

  const addItemToObjectList = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <div className="container flex flex-col gap-2">
        <div
          onClick={() => {
            addItemToObjectList({ type: "Car", weight: 0, fs: 0 });
          }}
          className="flex justify-start items-center gap-2 hover:bg-white text-white hover:text-black cursor-pointer"
        >
          <AiFillCar size={25} /> <p className="text-lg ">Add Car</p>
        </div>
        <div
          onClick={() => {
            addItemToObjectList({ type: "Cart", weight: 0, fs: 0 });
          }}
          className="flex justify-start items-center gap-2 hover:bg-white text-white hover:text-black cursor-pointer"
        >
          <GiOldWagon size={25} /> <p className="text-lg">Add Cart</p>
        </div>
        <div
          onClick={() => {
            addItemToObjectList({ type: "Board", weight: 0, fs: 0 });
          }}
          className="flex justify-start items-center gap-2 hover:bg-white text-white hover:text-black cursor-pointer"
        >
          <TbOvalVertical size={25} /> <p className="text-lg">Add Board</p>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
