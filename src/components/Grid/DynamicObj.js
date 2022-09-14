import React, { Fragment, useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import AddItem from "./AddItemButton";
import PopUp from "./PopUp";
import EditStaticDataButton from "./EditStaticDataButton";
import eventBus from "../Grid/eventBus"

const DynamicObj = () => {
  const [isOpen, setIsOpen] = useState(false);
  const canvas = useRef(null);
  const fabricRef = useRef(null);
  useEffect(() => {
    canvas.current = initCanvas();

    fabricRef.current.on("mouse:up", (e) => {
      if (e.target != null) {
        console.log(fabricRef.current._activeObject.left)
        setIsOpen(true);
      }
    });

    eventBus.on("setFsValue", (data) => {
      if (fabricRef && data != null) {
        fabricRef.current._objects[fabricRef.current._objects.length - 1].left = parseInt(data.message);
        fabricRef.current._objects[fabricRef.current._objects.length - 1].setCoords();
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
      <div className="flex justify-between">
        <EditStaticDataButton />
        <AddItem ref={fabricRef} objcolor={Math.floor(Math.random() * 16777215).toString(16)} />
      </div>
      {isOpen && (
        <PopUp
          content={
            <Fragment>
              <h1 className="text-center mb-5 text-xl font-bold text-black">
                אפיין אובייקט
              </h1>
              <div className="flex justify-center h-52">
                <input
                  className="w-28 h-10 bg-red-200 p-1 m-1 rounded-xl"
                  placeholder="אורך"
                />
                <input
                  className="w-28 h-10 bg-green-200 p-1 m-1 rounded-xl"
                  placeholder="רוחב"
                />
                <input
                  className="w-28 h-10 bg-yellow-200 p-1 m-1 rounded-xl"
                  placeholder="אינדקס"
                />
                <input
                  className="w-28 h-10 bg-blue-200 p-1 m-1 rounded-xl"
                  placeholder={245 + fabricRef.current._activeObject.left}
                />
              </div>
            </Fragment>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

export default DynamicObj;
