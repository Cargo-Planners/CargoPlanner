import React, { Fragment, useEffect, useRef, useState } from "react";
import { fabric } from "fabric";

const DeleteButton = (props, fabricRef) => {
  return <div></div>;
};

const DeleteItemWithforwardedRef = React.forwardRef(DeleteButton);
export default DeleteItemWithforwardedRef;
