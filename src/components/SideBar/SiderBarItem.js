import React from "react";

const SiderBarItem = ({ Icon, buttonText }) => {
  return (
    <div className="flex justify-start gap-2 items-center truncate hover:bg-[#1E1E22] hover:text-white">
      <Icon size={18} />
      <button className="text-lg font-bold">{buttonText}</button>
    </div>
  );
};

export default SiderBarItem;
