import React, { useState } from "react";
import { FaObjectGroup, FaCaretDown } from "react-icons/fa";
import { GiCargoCrate } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { Link } from "react-router-dom";
import SiderBarItem from "./SiderBarItem";
import ObjectList from "./ObjectList";
import DropDown from "./DropDown";
import { routeContants } from "../../Routes/contants";

const SideBarItems = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="min-h-full flex flex-col justify-between">
      <div className="mt-12 flex flex-col gap-5">
        <hr />
        <Link to={routeContants.newItemRoute}>
          <SiderBarItem Icon={GiCargoCrate} buttonText="צור מטען חדש" />
        </Link>
        <hr />
        <SiderBarItem Icon={GoGraph} buttonText="גרפים" />
        <hr />
        <div onClick={() => setShowDropDown((prev) => !prev)}>
          <SiderBarItem Icon={FaCaretDown} buttonText="מטענים קבועים" />
        </div>
        {showDropDown && <DropDown />}
        <SiderBarItem Icon={FaObjectGroup} buttonText="רשימת מטענים" />
        <ObjectList />
      </div>
      <div className="flex flex-col">
        <button className="bg-white text-xl whitespace-nowrap font-bold p-4 text-center rounded-2xl text-[#3D3D3D] mb-5">
          תצוגה מלאה
        </button>
        <button className="bg-white text-xl whitespace-nowrap font-bold p-4 text-center rounded-2xl text-[#3D3D3D]">
          יצא למסמך
        </button>
      </div>
    </div>
  );
};

export default SideBarItems;
