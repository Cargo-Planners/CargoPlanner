import React, { Fragment, useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { useSelector, useDispatch } from "react-redux";
import $ from "jquery";
import {
  updateWidth,
  updateHeight,
  updateIndexObj,
} from "../../redux/ObjectsDataSlice";
import PopUp from "./PopUp";
import eventBus from "../Grid/eventBus";

const DynamicObj = (props, fabricRef) => {
  const [isOpen, setIsOpen] = useState(false);
  const canvas = useRef(null);
  let currentObj = useRef(null);
  let currentFus = useRef(0);
  const dispatch = useDispatch();
  const objectListItems = useSelector(
    (state) => state.objectsData.objectListItems
  );
  const widthChangeHandler = (e, index) => {
    const value = e.target.value === "" ? 0 : parseInt(e.target.value);
    dispatch(updateWidth({ value, index }));
  };
  const heightChangeHandler = (e, index) => {
    const value = e.target.value === "" ? 0 : parseInt(e.target.value);
    dispatch(updateHeight({ value, index }));
  };
  const indexChangeHandler = (e, index) => {
    const value = e.target.value === "" ? 0 : parseInt(e.target.value);
    dispatch(updateIndexObj({ value, index }));
  };
  useEffect(() => {
    canvas.current = initCanvas();
    fabricRef.current.on("mouse:up", (e) => {
      if ((e.target != null) && (fabricRef.current._activeObject.left - currentFus.current === 0)) {
        setIsOpen(true);
      }else {
      currentFus.current = fabricRef.current._activeObject.left;
      setIsOpen(false);
      }
    });

    eventBus.on("setFsValue", (data) => {
      if (fabricRef && data != null) {
        fabricRef.current._objects[fabricRef.current._objects.length - 1].left =
          parseInt(data.message);
        fabricRef.current._objects[
          fabricRef.current._objects.length - 1
        ].setCoords();
        fabricRef.current.renderAll();
      }
    });

    return () => {
      canvas.current.dispose();
      canvas.current = null;
    };
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const initCanvas = () =>
    (fabricRef.current = new fabric.Canvas("canvas", {
      height: document.getElementsByClassName("gridContainer")[0].offsetHeight,
      width: document.getElementsByClassName("gridContainer")[0].offsetWidth,
      selection: false,
      renderOnAddRemove: true,
    }));



  return (
    <div className="flex flex-col">
      <canvas id="canvas" />
      {isOpen && (
        <PopUp
          content={
            <Fragment>
              <h1 className="text-center mb-5 text-xl font-bold text-black">
                אפיין אובייקט
              </h1>
              {objectListItems.map((item, index) => (
                <div key={index} className="flex justify-center h-52">
                  <input
                    name="item"
                    className="lengthData w-28 h-10 bg-red-200 p-1 m-1 rounded-xl"
                    placeholder="אורך"
                    onChange={(e) => widthChangeHandler(e, index)}
                  />
                  <input
                    name="item"
                    className="heightData w-28 h-10 bg-green-200 p-1 m-1 rounded-xl"
                    placeholder="רוחב"
                    onChange={(e) => heightChangeHandler(e, index)}
                  />
                  <input
                    name="item"
                    className="w-28 h-10 bg-yellow-200 p-1 m-1 rounded-xl"
                    placeholder="אינדקס"
                    onChange={(e) => indexChangeHandler(e, index)}
                  />
                  <input
                    className="w-28 h-10 bg-blue-200 p-1 m-1 rounded-xl"
                    placeholder={245 + fabricRef.current._activeObject.left}
                  />
                </div>
              ))}
            </Fragment>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

const DynamicObjWithforwardedRef = React.forwardRef(DynamicObj);
export default DynamicObjWithforwardedRef;

