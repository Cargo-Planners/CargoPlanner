import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Position } from '../../../models/ObjectItem';
import {
  updateItemFs,
  updateItemLength,
  updateItemName,
  updateItemPosition,
  updateItemWeight,
  updateItemWidth,
} from '../../../redux/ObjectsDataSlice';
import { State } from '../../../redux/store';
import UnitsService from '../../../services/UnitsService';
import { CanvasCTX } from '../Grid/CanvasContext';

export const ObjectView = () => {
  const selectedCargo = useSelector(
    (state: State) => state.objectsData.selectedCargo
  );

  const dispatch = useDispatch();

  const grid = useContext(CanvasCTX).canvas;

  const unitsService = new UnitsService();

  useEffect(() => {}, [selectedCargo]);

  const lengthChangeHandler = (length: number) => {
    const currentObj = grid?.getActiveObject();

    if (currentObj) {
      currentObj.scaleX = length / unitsService.ONE_UNIT_IN_INCHES;
      grid?.requestRenderAll();
      dispatch(
        updateItemLength({
          id: currentObj.name!,
          updatedLength: length,
        })
      );
    }
  };

  const widthChangeHandler = (width: number) => {
    const currentObj = grid?.getActiveObject();

    if (currentObj) {
      currentObj.scaleY = width / unitsService.ONE_UNIT_IN_INCHES;
      grid?.requestRenderAll();
      dispatch(
        updateItemWidth({
          id: currentObj.name!,
          updatedWidth: width,
        })
      );
    }
  };

  const fsChangeHandler = (fs: number) => {
    const currentObj = grid?.getActiveObject();

    if (currentObj) {
      dispatch(
        updateItemFs({
          id: currentObj.name!,
          updatedFs: fs,
        })
      );
    }
  };

  const weightChangeHandler = (weight: number) => {
    const currentObj = grid?.getActiveObject();

    if (currentObj) {
      dispatch(
        updateItemWeight({
          id: currentObj.name!,
          updatedWeight: weight,
        })
      );
    }
  };

  const positionChangeHandler = (position: Partial<Position>) => {
    const currentObj = grid?.getActiveObject();

    if (currentObj) {
      dispatch(
        updateItemPosition({
          id: currentObj.name!,
          updatedPosition: position,
        })
      );
    }
  };

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      {selectedCargo ? (
        <>
          <div className='flex flex-column justify-center items-center h-[10%] w-full'>
            <input
              value={selectedCargo.name}
              type='text'
              placeholder='Cargo Name'
              className='border-[#808080] border-[2px] rounded-[0.25rem] hover:border-[#404040] hover:border-[2px] pl-[5px]'
              onChange={({ target }) =>
                dispatch(
                  updateItemName({
                    id: selectedCargo.id,
                    name: target.value,
                  })
                )
              }
            />
          </div>
          <div className='h-4/5 w-full flex flex-col items-start '>
            <div className='flex flex-row justify-center w-full'>
              <input
                value={selectedCargo.position.x}
                type='text'
                placeholder='X'
                className='border-[#808080] border-[2px] rounded-[0.25rem] hover:border-[#404040] hover:border-[2px] pl-[5px]'
                onChange={({ target }) =>
                  positionChangeHandler({ x: +target.value })
                }
              />
              <input
                value={selectedCargo.width}
                type='text'
                placeholder='Width'
                className='border-[#808080] border-[2px] rounded-[0.25rem] hover:border-[#404040] hover:border-[2px] pl-[5px]'
                onChange={({ target }) => widthChangeHandler(+target.value)}
              />
              <input
                value={selectedCargo.weight}
                type='text'
                placeholder='Weight'
                className='border-[#808080] border-[2px] rounded-[0.25rem] hover:border-[#404040] hover:border-[2px] pl-[5px]'
                onChange={({ target }) => weightChangeHandler(+target.value)}
              />
            </div>
            <div className='flex flex-row justify-center w-full pt-[15px]'>
              <input
                value={selectedCargo.position.y}
                type='text'
                placeholder='Y'
                className='border-[#808080] border-[2px] rounded-[0.25rem] hover:border-[#404040] hover:border-[2px] pl-[5px]'
                onChange={({ target }) =>
                  positionChangeHandler({ y: +target.value })
                }
              />
              <input
                value={selectedCargo.length}
                type='text'
                placeholder='Length'
                className='border-[#808080] border-[2px] rounded-[0.25rem] hover:border-[#404040] hover:border-[2px] pl-[5px]'
                onChange={({ target }) => lengthChangeHandler(+target.value)}
              />
              <input
                value={selectedCargo.fs}
                type='text'
                placeholder='Fuselage'
                className='border-[#808080] border-[2px] rounded-[0.25rem] hover:border-[#404040] hover:border-[2px] pl-[5px]'
                onChange={({ target }) => fsChangeHandler(+target.value)}
              />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
