import React from "react";

const SiderBarItem = ({ Icon, buttonText }) => {
  return (
    <div className="flex justify-start gap-2 items-center truncate hover:bg-[#1E1E22] hover:text-white">
      <button className="text-lg font-bold">{buttonText}</button>
      <Icon size={18} />
    </div>
  );
};

export default SiderBarItem;
