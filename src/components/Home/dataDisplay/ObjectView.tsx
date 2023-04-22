import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateItemFs,
  updateItemHeight,
  updateItemName,
  updateItemWeight,
  updateItemWidth,
} from '../../../redux/ObjectsDataSlice';
import { State } from '../../../redux/store';
import UnitsService from '../../../services/UnitsService';
import { CanvasCTX } from '../Grid/CanvasContext';
import {
  CargoInputNumber,
  CargoInputText,
  labelPositionEnum,
  labelTextPositionEnum,
} from '../ViewComponents';
import { FaEdit, FaSave } from 'react-icons/fa';

export const ObjectView = () => {
  const selectedCargo = useSelector(
    (state: State) => state.objectsData.selectedCargo
  );
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

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
        updateItemWidth({
          id: currentObj.name!,
          updatedWidth: length,
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
        updateItemHeight({
          id: currentObj.name!,
          updatedHeight: width,
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

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      {selectedCargo ? (
        <>
          <div className='flex flex-column justify-space-between items-center h-[10%] w-[50%]'>
            {isEditMode ? (
              <>
                <CargoInputText
                  placeholder={selectedCargo.name}
                  onChange={(name: string) =>
                    dispatch(
                      updateItemName({
                        id: grid?.getActiveObject()!.name!,
                        name: name,
                      })
                    )
                  }
                />
                <FaSave size={20} onClick={() => setIsEditMode(false)} />
              </>
            ) : (
              <>
                <h1 className='w-full'>
                  {selectedCargo.name === '' ? 'untitled' : selectedCargo.name}
                </h1>
                <FaEdit size={20} onClick={() => setIsEditMode(true)} />
              </>
            )}
          </div>
          <div className='h-4/5 w-full flex flex-col items-start '>
            <CargoInputNumber
              label='Width'
              labelTextPosition={labelTextPositionEnum.LEFT}
              labelPosition={labelPositionEnum.TOP}
              minValue={0}
              maxValue={140}
              placeholder={selectedCargo.height}
              onChange={(width: number) => widthChangeHandler(width)}
            />
            <CargoInputNumber
              label='Length'
              labelTextPosition={labelTextPositionEnum.LEFT}
              labelPosition={labelPositionEnum.TOP}
              minValue={0}
              maxValue={800}
              placeholder={selectedCargo.width}
              onChange={(length: number) => lengthChangeHandler(length)}
            />
            <CargoInputNumber
              label='Fuesalge'
              labelTextPosition={labelTextPositionEnum.LEFT}
              labelPosition={labelPositionEnum.TOP}
              minValue={0}
              maxValue={845}
              placeholder={selectedCargo.fs}
              onChange={(fs: number) => fsChangeHandler(fs)}
            />
            <CargoInputNumber
              label='Weight'
              labelTextPosition={labelTextPositionEnum.LEFT}
              labelPosition={labelPositionEnum.TOP}
              minValue={0}
              placeholder={selectedCargo.weight}
              onChange={(weight: number) => weightChangeHandler(weight)}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
