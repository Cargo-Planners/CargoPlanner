import React from "react";
import OptionWrapper from "./OptionWrapper";
import karnafImg from "../../images/karnafIcon.png";

import Karnaf from "../../images/Karnaf.png";
import Ram from "../../images/Ram.png";
import Zufit from "../../images/Zufit.png";
import Shimshon from "../../images/Shimshon.png";
const ChoosePlatformComponent = () => {
  return (
    <div className="h-screen w-screen bg-[#FFD990] flex justify-center items-center">
      <div className="flex flex-col gap-10 z-10">
        <div className="grid grid-cols-2 flex flex-col gap-7 ">
          <OptionWrapper name="קרנף - C - 130" img={Karnaf} />
          <OptionWrapper name="שמשון - C - 130 j" img={Ram} />
          <OptionWrapper name="צופית - AirKing B - 200" img={Zufit} />
          <OptionWrapper name="ראם - Boeing 707 " img={Shimshon} />
        </div>
      </div>
    </div>
  );
};

export default ChoosePlatformComponent;
