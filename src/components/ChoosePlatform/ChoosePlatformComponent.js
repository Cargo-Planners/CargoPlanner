import React from "react";
import OptionWrapper from "./OptionWrapper";
import karnafImg from "../../images/karnafIcon.png";

const ChoosePlatformComponent = () => {
  return (
    <div className="h-screen w-screen coolGrad flex justify-center items-center">
      <div className="flex flex-col gap-10 ">
        <h1 className="text-white text-5xl font-bold text-center">בחירת פלטפורמה</h1>
        <div className="flex flex-col gap-6">
          <OptionWrapper name="קרנף" img={karnafImg} />
          <OptionWrapper name="שמשון" img={karnafImg} />
          <OptionWrapper name="רעם" img={karnafImg} />
          <OptionWrapper name="צופית" img={karnafImg} />
        </div>
      </div>
    </div>
  );
};

export default ChoosePlatformComponent;
