import React from "react";
import { fabric } from "fabric";
import { addItem } from "../../redux/AddFixedCargoSlice";
import { useDispatch } from "react-redux";
import $ from "jquery";
import randomColor from "randomcolor";
const AddItem = (props, fabricRef) => {
  const dispatch = useDispatch();
  const addItemToObjectList = (item) => {
    dispatch(addItem(item));
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
    addItemToObjectList("אובייקט " + fabricRef.current._objects.length);
    $(
      `input[name="item ${fabricRef.current._objects.length - 2}"]`
    ).parentNode.style.backgroundColor = color;
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
