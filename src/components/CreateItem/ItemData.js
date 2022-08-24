import React, { Fragment } from "react";

const ItemData = ({label}) => {
  return (
    <Fragment>
      <div className="flex flex-col">
        <h1 className="p-1">{label}</h1>
        <input className="w-3/4 mx-auto rounded-sm p-1" />
      </div>
    </Fragment>
  );
};

export default ItemData;
