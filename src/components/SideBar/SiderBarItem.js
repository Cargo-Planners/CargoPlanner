import React from "react";

const SiderBarItem = ({ Icon, buttonText }) => {
  return (
    <div className="flex justify-start gap-2 items-center hover:bg-[#185B6C]">
      <Icon size={18} />
      <button className="text-lg font-semibold text-[#D0F6FF] ">{buttonText}</button>
    </div>
  );
};

export default SiderBarItem;
