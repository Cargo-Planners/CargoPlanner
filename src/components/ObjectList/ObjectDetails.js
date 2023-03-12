import React, { Fragment } from "react";

const ObjectDetails = ({ item }) => {
  return (
    <Fragment>
      <h1 className="text-center mb-5 text-xl font-bold text-black">
        Object Details
      </h1>
      <div className="flex justify-center h-4rem">
        <div className="grid grid-rows-2 place-items-center my-0">
          <h1 className="self-end">Height</h1>
          <input
            name="item"
            className="lengthData w-28 h-10 bg-red-200 rounded-xl self-start"
            value={item.height}
          />
        </div>
        <div className="grid grid-rows-2 place-items-center">
          <h1 className="self-end">Width</h1>
          <input
            name="item"
            className="heightData w-28 h-10 bg-green-200 p-1 m-1 rounded-xl self-start"
            value={item.width}
          />
        </div>
        <div className="grid grid-rows-2 place-items-center">
          <h1 className="self-end">Index</h1>
          <input
            name="item"
            className="w-28 h-10 bg-yellow-200 p-1 m-1 rounded-xl self-start"
            value={item.index}
          />
        </div>
        <div className="grid grid-rows-2 place-items-center">
          <h1 className="self-end">Fusealge</h1>
          <input
            className="w-28 h-10 bg-blue-200 p-1 m-1 rounded-xl self-start"
            value={item.fs}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ObjectDetails;
