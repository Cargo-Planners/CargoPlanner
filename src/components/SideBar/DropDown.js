import React from "react";
import { AiFillCar } from "react-icons/ai";
import { GiOldWagon } from "react-icons/gi";
import { TbOvalVertical } from "react-icons/tb";

const DropDown = () => {
  return (
    <div>
      <div class="container flex flex-col gap-2">
        <div className="flex justify-start items-center gap-2 hover:bg-[#185B6C]">
          <AiFillCar size={25} /> <p className="text-lg">רכב</p>
        </div>
        <div className="flex justify-start items-center gap-2 hover:bg-[#185B6C]">
          <GiOldWagon size={25} /> <p className="text-lg">עגלה</p>
        </div>
        <div className="flex justify-start items-center gap-2 hover:bg-[#185B6C]">
          <TbOvalVertical size={25} /> <p className="text-lg">פלטות</p>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
