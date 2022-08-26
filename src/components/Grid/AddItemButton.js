import React from "react";
import { fabric } from "fabric";

const AddItem = (props, fabricRef) => {

  const addRectangle = () => {
    const rect = new fabric.Rect({
      width: 50,
      height: 50,
      opacity:0.5,
      fill: "red",
    });
    fabricRef.current.add(rect);
  };

  return (
    <button
      id="addObjBtn"
      {...props}
      ref={fabricRef}
      onClick={addRectangle}
      className="bg-[#bebaf8] p-4 rounded-xl text-white"
    >
      הוסף אובייקט
    </button>
  );
};



const AddItemWithforwardedRef = React.forwardRef(AddItem);
export default AddItemWithforwardedRef;
