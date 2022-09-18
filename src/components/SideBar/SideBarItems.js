import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { GiCargoCrate } from "react-icons/gi";
import { Link } from "react-router-dom";
import SiderBarItem from "./SiderBarItem";
import DropDown from "./DropDown";
import { routeConstants } from "../../Routes/constants";
import settingsIcon from "../../icons/settingsIcon.png";
import helpIcon from "../../icons/helpIcon.png";

const SideBarItems = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="min-h-full flex flex-col justify-between">
      <div className="mt-12 flex flex-col gap-5">
        <hr />
        <Link to={routeConstants.newItemRoute}>
          <SiderBarItem Icon={GiCargoCrate} buttonText="New Object" />
        </Link>
        <hr />
        <div onClick={() => setShowDropDown((prev) => !prev)}>
          <SiderBarItem Icon={FaCaretDown} buttonText="Existing Objects" />
        </div>
        {showDropDown && <DropDown />}
        <div className="flex  ">
          <button className="font-bold">Help</button>
          <img className="my-auto h-5 w-5" src={helpIcon} alt="helpIcon" />
        </div>
      </div>
      <div className="flex ">
      <button className="font-bold">Settings</button>
        <img className="my-auto h-5 w-5" src={settingsIcon} alt="settingIcon" />
      </div>
    </div>
  );
};

export default SideBarItems;

// Ignore For Now!
//  <SiderBarItem Icon={GoGraph} buttonText="גרפים" />
//  <SiderBarItem Icon={FaObjectGroup} buttonText="רשימת מטענים" />
