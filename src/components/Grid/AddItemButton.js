import React from "react";
import { fabric } from "fabric";
import { addItem } from "../../redux/AddFixedCargoSlice";
import { useDispatch } from "react-redux";
import $ from "jquery";
import randomColor from "randomcolor";
import { addItemToArray } from "../../redux/AddObject2Array";

const AddItem = (props, fabricRef) => {
  const dispatch = useDispatch();
  const addItemToObjectList = (item) => {
    dispatch(addItem(item));
  };
  const addItemToArrayList = (item) => {
    dispatch(addItemToArray(item));
  };
  const addRectangle = () => {
    let color = randomColor();
    const rect = new fabric.Rect({
      width: 50,
      height: 50,
      opacity: 0.5,
      left: 0,
      fill: color,
    });
    fabricRef.current.add(rect);
    addItemToArrayList(fabricRef.current);
    addItemToObjectList("אובייקט " + fabricRef.current._objects.length);
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

// אורך רוחב INDEX משקל FS
