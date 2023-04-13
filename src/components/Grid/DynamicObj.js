import React, { Fragment, useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateItemWidth,
  updateItemHeight,
  updateItemIndex,
  updateItemScale,
  updateItemWeight,
  updateItemPosition,
  updateItemFs,
  updateItemCenterOfGravity,
} from '../../redux/ObjectsDataSlice';
import PopUp from './PopUp';
import eventBus from './eventBus';
import { X_ORIGIN, Y_ORIGIN } from '../SideBar/SideBarItems';
import { MdOutlineClose } from 'react-icons/md';
import { State } from '../../redux/store';
import UnitsService from '../../services/UnitsService';
import { current } from '@reduxjs/toolkit';

const DynamicObj = (props, fabricRef) => {
  const [isOpen, setIsOpen] = useState(false);
  const canvas = useRef(null);
  let currentObj = useRef(null);
  let updatedIndex = 0;
  const dispatch = useDispatch();
  const objectListItems = useSelector((state) => state.objectsData.itemList);

  let isObjectModified = false;
  let dispatchFunction = () => {};

  const widthChangeHandler = (e) => {
    const width = e.target.value === '' ? 0 : parseInt(e.target.value);
    currentObj = fabricRef.current.getActiveObject();
    if (currentObj !== null) {
      currentObj.scaleX = width / UnitsService.ONE_UNIT_IN_INCHES;
      currentObj.setCoords();
      fabricRef.current.requestRenderAll();
    }
    dispatch(
      updateItemWidth({
        id: currentObj.id,
        updatedWidth: width,
      })
    );
  };

  const heightChangeHandler = (e) => {
    const length = e.target.value === '' ? 0 : parseInt(e.target.value);
    currentObj = fabricRef.current.getActiveObject();
    if (currentObj !== null) {
      currentObj.scaleY = length / UnitsService.ONE_UNIT_IN_INCHES;
      currentObj.setCoords();
      fabricRef.current.requestRenderAll();
    }
    dispatch(
      updateItemHeight({
        id: currentObj.name,
        updatedHeight: length,
      })
    );
  };

  const fsChangeHandler = (e, index) => {
    const value = e.target.value === '' ? 0 : parseInt(e.target.value);
    dispatch(updateItemIndex({ value, index }));
  };

  const weightChangeHandler = (e) => {
    const value = e.target.value === '' ? 0 : parseInt(e.target.value);
    console.log(fabricRef.current._activeObject.name);
    dispatch(
      updateItemWeight({
        id: fabricRef.current._activeObject.name,
        updatedWeight: value,
      })
    );
  };

  const centerOfGravityChangeHandler = (e, whichCoord) => {
    const changes = {
      [whichCoord]: e.target.value === '' ? 0 : +e.target.value,
    };

    const currentObj = fabricRef.current.getActiveObject();

    dispatch(
      updateItemCenterOfGravity({
        id: currentObj.name,
        updatedCenterOfGravity: changes,
      })
    );
  };

  useEffect(() => {
    canvas.current = initCanvas();
    eventBus.on('setFsValue', (data) => {
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
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    refreshCanvasListeners();
  }, [objectListItems]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const getValidCoord = (val, min, max) => {
    if (val >= min && val <= max) {
      return val;
    } else if (val < min) {
      return min;
    } else {
      return max;
    }
  };

  const refreshCanvasListeners = () => {
    if (fabricRef.current !== null) {
      fabricRef.current.__eventListeners = {};

      fabricRef.current.on('selection:updated', (e) => {
        fabricRef.current.setActiveObject(e.selected[0]);
      });

      fabricRef.current.on('mouse:up', function (e) {
        if (isObjectModified) {
          isObjectModified = false;
          dispatchFunction();
        }
      });

      fabricRef.current.on('mouse:dblclick', (e) => {
        if (e.target !== null) {
          setIsOpen(true);
          console.log(
            objectListItems.find(
              (objectItem) => objectItem.id === e.target.name
            )
          );
        }
      });

      fabricRef.current.on('object:scaling', function (e) {
        isObjectModified = true;

        dispatchFunction = () => {
          dispatch(
            updateItemScale({
              id: fabricRef.current._activeObject.name,
              scaleX: e.target.scaleX,
              scaleY: e.target.scaleY,
            })
          );
        };
      });

      fabricRef.current.on('object:moving', function (e) {
        isObjectModified = true;

        const startingPosition = UnitsService.startingPosition(
          fabricRef.current.width,
          fabricRef.current.height
        );
        const leftMaxValue =
          UnitsService.CARGO_WIDTH_AS_CANVAS_PERCENT * fabricRef.current.width +
          startingPosition.left;
        const topMaxValue =
          UnitsService.CARGO_LENGTH_AS_CANVAS_PERCENT *
            fabricRef.current.height +
          startingPosition.top;

        e.target.top = getValidCoord(
          e.target.top,
          startingPosition.top,
          topMaxValue - e.target.height * e.target.scaleY
        );

        e.target.left = getValidCoord(
          e.target.left,
          startingPosition.left,
          leftMaxValue - e.target.width * e.target.scaleX
        );

        const position = {
          x: UnitsService.pixelsToInches(
            e.target.left - startingPosition.left,
            fabricRef.current.width
          ),
          y: UnitsService.pixelsToInches(
            e.target.top - startingPosition.top,
            fabricRef.current.width
          ),
        };

        dispatchFunction = () => {
          dispatch(
            updateItemPosition({
              id: fabricRef.current._activeObject.name,
              updatedPosition: position,
            })
          );
          dispatch(
            updateItemFs({
              id: fabricRef.current._activeObject.name,
              updatedFs: position.x + 245,
            })
          );
        };
      });
    }
  };

  const initCanvas = () => {
    fabricRef.current = new fabric.Canvas('canvas', {
      height: document.getElementsByClassName('gridContainer')[0].offsetHeight,
      width: document.getElementsByClassName('gridContainer')[0].offsetWidth,
      selection: false,
      renderOnAddRemove: true,
    });

    refreshCanvasListeners();

    return fabricRef.current;
  };

  return (
    <div className='flex flex-col'>
      <canvas id='canvas' />
      {isOpen && (
        <PopUp
          content={
            <Fragment>
              <MdOutlineClose
                className='absolute top-5 right-5 w-[40px] h-[40px] border-none cursor-pointer'
                onClick={() => setIsOpen(false)}
              />
              <h1 className='text-center mb-5 text-xl font-bold text-black'>
                Modify Object
              </h1>
              {objectListItems.map(
                (item, index) =>
                  fabricRef.current.getActiveObject()?.name === item.id && (
                    <div key={index} className='flex justify-center h-4rem'>
                      <div className='grid grid-rows-2 place-items-center my-0'>
                        <h1 className='self-end'>Height</h1>
                        <input
                          name='item'
                          className='w-28 h-10 bg-red-200 rounded-xl self-start'
                          placeholder={`${objectListItems[index].height.toFixed(
                            3
                          )}`}
                          onChange={(e) => heightChangeHandler(e)}
                        />
                      </div>
                      <div className='grid grid-rows-2 place-items-center'>
                        <h1 className='self-end'>Width</h1>
                        <input
                          name='item'
                          className='w-28 h-10 bg-green-200 p-1 m-1 rounded-xl self-start'
                          placeholder={`${objectListItems[index].width.toFixed(
                            3
                          )}`}
                          onChange={(e) => widthChangeHandler(e)}
                        />
                      </div>
                      <div className='grid grid-rows-2 place-items-center'>
                        <h1 className='self-end'>Fusealge</h1>
                        <input
                          className='w-28 h-10 bg-blue-200 p-1 m-1 rounded-xl self-start'
                          placeholder={`${objectListItems[index].fs}`}
                        />
                      </div>
                      <div className='grid grid-rows-2 place-items-center'>
                        <h1 className='self-end'>Weight</h1>
                        <input
                          name='item'
                          className='w-28 h-10 bg-green-200 p-1 m-1 rounded-xl self-start'
                          placeholder={`${objectListItems[index].weight}`}
                          onChange={(e) => weightChangeHandler(e)}
                        />
                      </div>
                      <div className='grid grid-rows-2 place-items-center'>
                        <h1 className='self-end'>Center Gravity</h1>
                        <div className='flex flex-row-reverse items-start m-0'>
                          <input
                            name='item'
                            className='w-28 h-10 bg-green-200 p-1 m-1 rounded-xl self-start'
                            placeholder='Y'
                            value={objectListItems[index].centerOfGravity.y}
                            onChange={(e) =>
                              centerOfGravityChangeHandler(e, 'y')
                            }
                          />
                          <input
                            name='item'
                            className='w-28 h-10 bg-green-200 p-1 m-1 rounded-xl self-start'
                            placeholder='X'
                            value={objectListItems[index].centerOfGravity.x}
                            onChange={(e) =>
                              centerOfGravityChangeHandler(e, 'x')
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )
              )}
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
