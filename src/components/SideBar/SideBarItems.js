import React, { useState } from "react";
import { FaCaretDown, FaTimes } from "react-icons/fa";
import { GiCargoCrate } from "react-icons/gi";
import SiderBarItem from "./SiderBarItem";
import DropDown from "./DropDown";
import settingsIcon from "../../icons/settingsIcon.png";
import helpIcon from "../../icons/helpIcon.png";
import { fabric } from "fabric";
import { addItem } from "../../redux/ObjectsDataSlice";
import { useDispatch } from "react-redux";
import randomColor from "randomcolor";
import eventBus from "../Grid/eventBus";

const SideBarItems = ({ showSideBar, setShowSideBar }, fabricRef) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const setSideBar = () => {
    eventBus.dispatch("setSideBarValue", { message: "" });
  };

  const dispatch = useDispatch();
  const addItemToObjectList = (item) => {
    dispatch(addItem(item));
  };
  const addRectangle = () => {
    let color = randomColor();
    const rect = new fabric.Rect({
      width: 50,
      height: 50,
      opacity: 0.5,
      left: 0,
      fill: color,
    });
    fabricRef.current.add(rect);
    addItemToObjectList({
      type: "Object",
      weight: 0,
      fs: 0,
      width: 50,
      height: 50,
      index: 0,
      fill: color,
    });
  };

  return (
    <div className="min-h-full flex flex-col justify-between">
      <div className="flex flex-col gap-5">
        <div className="flex">
          {showSideBar ? (
            <button
              className="flex text-5xl text-[#1E1E22] items-center cursor-pointer"
              onClick={() => {
                setShowSideBar((prev) => !prev);
                setSideBar();
              }}
            >
              <div className="flex items-center gap-3 ">
                <FaTimes size={40} />
                <h2 className="text-xl font-bold text-[#1E1E22]">Gulliver</h2>
              </div>
            </button>
          ) : null}
        </div>
        <hr />
        <div onClick={addRectangle}>
          <SiderBarItem Icon={GiCargoCrate} buttonText="New Object" />
        </div>
        <hr />
        <div onClick={() => setShowDropDown((prev) => !prev)}>
          <SiderBarItem Icon={FaCaretDown} buttonText="Existing Objects" />
        </div>
        {showDropDown && <DropDown />}
        <div className="flex  text-white">
          <button className="font-bold ">Help</button>
          <img className="my-auto h-5 w-5" src={helpIcon} alt="helpIcon" />
        </div>
      </div>
      <div className="flex text-white">
        <button className="font-bold ">Settings</button>
        <img className="my-auto h-5 w-5" src={settingsIcon} alt="settingIcon" />
      </div>
    </div>
  );
};

const SideBarItemsWithforwardedRef = React.forwardRef(SideBarItems);
export default SideBarItemsWithforwardedRef;
