import React from "react";

const SiderBarItem = ({ Icon, buttonText }) => {
  return (
    <div className="flex justify-start gap-2 items-center truncate hover:bg-white hover:text-black">
      <button className="text-lg font-bold ">{buttonText}</button>
      <Icon size={18} className="" />
    </div>
  );
};

export default SiderBarItem;
