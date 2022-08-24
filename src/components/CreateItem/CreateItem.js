import React, { Fragment } from "react";
import Navbar from "./Navbar";
import ItemData from "./ItemData";

const CreateItem = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="flex flex-col justify-evenly bg-[#C4C4C4]  h-screen">
        <div className="flex flex-col text-center">
          <h1 className="font-bold text-black p-1">תיאור מילולי</h1>
          <textarea
            rows="5"
            className="w-10/12 min-h-[64px] max-h-[200px] mx-auto rounded-lg"
          />
        </div>
        <div className="flex text-center justify-around">
          <ItemData label="אורך(אינצ’)" />
          <ItemData label="רוחב(אינצ’)" />
          <ItemData label="משקל(LBS)" />
          <ItemData label="Fueselage" />
        </div>
      </div>
    </Fragment>
  );
};

export default CreateItem;
