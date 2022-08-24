import React, { Fragment, useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import AddItem from "./AddItemButton";
import PopUp from "./PopUp";
import EditStaticDataButton from "./EditStaticDataButton";

const DynamicObj = () => {
  const [isOpen, setIsOpen] = useState(false);
  const canvas = useRef(null);
  const fabricRef = useRef(null);

  useEffect(() => {
    canvas.current = initCanvas();

    fabricRef.current.on("mouse:up", (e) => {
      if (e.target != null) {
        console.log(fabricRef.current.getActiveObject().left);
        setIsOpen(true);
      }
    });

    // destroy fabric on unmount
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
    <div>
      <canvas id="canvas" />
      <div className="flex justify-center">
        {" "}
        <EditStaticDataButton />
        <AddItem ref={fabricRef} />
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
                  placeholder="Fuselage"
                />
                <div>
                  מיקום נוכחי - {245 + fabricRef.current.getActiveObject().left}
                </div>
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
