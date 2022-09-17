import React from "react";
import OptionWrapper from "./OptionWrapper";
import Karnaf from "../../images/Karnaf.png";
import Reem from "../../images/Reem.png";
import Tzofit from "../../images/Tzofit.png";
import Shimshon from "../../images/Shimshon.png";

const ChoosePlatformComponent = () => {
  return (
    <div className="h-screen w-screen bg-[#FFD990] flex justify-center items-center">
      <div className="flex flex-col gap-10 z-10">
        <div className="grid grid-cols-2 gap-7 ">
          <OptionWrapper name="Karnaf - C - 130" img={Karnaf} />
          <OptionWrapper name="Shimshon - C - 130 j" img={Shimshon} />
          <OptionWrapper name="Tzofit - AirKing B - 200" img={Tzofit} />
          <OptionWrapper name="Reem - Boeing 707" img={Reem} />
        </div>
      </div>
    </div>
  );
};

export default ChoosePlatformComponent;
