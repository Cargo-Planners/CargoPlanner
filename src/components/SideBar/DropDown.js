import React from "react";
import { AiFillCar } from "react-icons/ai";
import { GiOldWagon } from "react-icons/gi";
import { TbOvalVertical } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/AddFixedCargoSlice";

const DropDown = () => {
  const dispatch = useDispatch();
  const items = { car: "רכב", wagon: "עגלה", plate: "פלטה" };

  const addItemToObjectList = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <div className="container flex flex-col gap-2">
        <div
          onClick={() => {
            addItemToObjectList(items.car);
          }}
          className="flex justify-start items-center gap-2 hover:bg-[#1E1E22] cursor-pointer"
        >
          <AiFillCar size={25} /> <p className="text-lg">הוסף רכב</p>
        </div>
        <div
          onClick={() => {
            addItemToObjectList(items.wagon);
          }}
          className="flex justify-start items-center gap-2 hover:bg-[#1E1E22] cursor-pointer"
        >
          <GiOldWagon size={25} /> <p className="text-lg">הוסף עגלה</p>
        </div>
        <div
          onClick={() => {
            addItemToObjectList(items.plate);
          }}
          className="flex justify-start items-center gap-2 hover:bg-[#1E1E22] cursor-pointer"
        >
          <TbOvalVertical size={25} /> <p className="text-lg">הוסף פלטה </p>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
