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
import { v4 } from "uuid";

export const X_ORIGIN = 22;
export const Y_ORIGIN = 265;

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
    const id = v4();
    const rect = new fabric.Rect({
      id: id,
      width: 50,
      height: 50,
      opacity: 0.5,
      left: X_ORIGIN,
      top: Y_ORIGIN,
      fill: color,
    });
    fabricRef.current.add(rect);
    addItemToObjectList({
      type: "Object",
      id: id,
      canvasObj: rect,
      weight: 0,
      fs: 0,
      width: 50,
      height: 50,
      index: 0,
      fill: color,
      x: rect.left - X_ORIGIN,
      y: Math.abs(rect.top - Y_ORIGIN),
      z: 0,
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
