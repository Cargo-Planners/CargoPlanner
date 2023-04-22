import React, { useContext, useEffect, useState } from 'react';
import { fabric } from 'fabric';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateItemWidth,
  updateItemHeight,
  updateItemScale,
  updateItemWeight,
  updateItemPosition,
  updateItemFs,
  setItemsList,
} from '../../../redux/ObjectsDataSlice';
import UnitsService from '../../../services/UnitsService';
import { State } from '../../../redux/store';
import { CanvasCTX } from './CanvasContext';
import { Item } from '../../../models/ObjectItem';
import { PopupComponent, CargoContainer } from '../ViewComponents';
import { closePopup, openPopup } from '../../../redux/PopupSlice';
import { useFabric } from '../../../hooks/fabric';

export const Grid = () => {
  const { canvas } = useContext(CanvasCTX);
  const [selectedCargo, setSelectedCargo] = useState<Item>();

  const dispatch = useDispatch();

  const objectListItems = useSelector(
    (state: State) => state.objectsData.itemList
  );

  const unitsService = new UnitsService();

  const canvasRef = useFabric();

  let grid = canvas;
  let isObjectModified = false;
  let dispatchFunction = () => {};

  const widthChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const width = e.target.value === '' ? 0 : parseInt(e.target.value);
    const currentObj = grid?.getActiveObject();
    if (currentObj) {
      currentObj.scaleX = width / unitsService.ONE_UNIT_IN_INCHES;
      grid?.requestRenderAll();
      dispatch(
        updateItemWidth({
          id: currentObj.name!,
          updatedWidth: width,
        })
      );
    }
  };

  const heightChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const length = e.target.value === '' ? 0 : parseInt(e.target.value);
    const currentObj = grid?.getActiveObject();
    if (currentObj) {
      currentObj.scaleY = length / unitsService.ONE_UNIT_IN_INCHES;
      grid?.requestRenderAll();
      dispatch(
        updateItemHeight({
          id: currentObj.name!,
          updatedHeight: length,
        })
      );
    }
  };

  // const fsChangeHandler = (e, index) => {
  //   const value = e.target.value === '' ? 0 : parseInt(e.target.value);
  //   dispatch(updateItemIndex({ value, index }));
  // };

  const weightChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weight = e.target.value === '' ? 0 : parseInt(e.target.value);
    const activeObject = grid?.getActiveObject();

    if (activeObject) {
      dispatch(
        updateItemWeight({
          id: activeObject.name!,
          updatedWeight: weight,
        })
      );
    }
  };

  useEffect(() => {
    const listFromLocalStorage = localStorage.getItem('objectsList');
    const cargoList = listFromLocalStorage
      ? (JSON.parse(listFromLocalStorage) as Item[])
      : [];

    console.log(grid);

    dispatch(setItemsList(cargoList));

    const startingPosition = unitsService.startingPosition(
      grid?.width!,
      grid?.height!
    );

    grid?.add(
      ...cargoList.map(
        (cargo) =>
          new fabric.Rect({
            name: cargo.id,
            width: unitsService.oneUnitInPixels(grid?.width!),
            height: unitsService.oneUnitInPixels(grid?.width!),
            scaleX: cargo.width / unitsService.ONE_UNIT_IN_INCHES,
            scaleY: cargo.height / unitsService.ONE_UNIT_IN_INCHES,
            left:
              unitsService.inchesToPixels(cargo.position.x, grid?.width!) +
              startingPosition.left,
            top:
              unitsService.inchesToPixels(cargo.position.y, grid?.width!) +
              startingPosition.top,
            fill: cargo.fill,
          })
      )
    );

    refreshCanvasListeners();
    grid?.requestRenderAll();
  }, [grid]);

  useEffect(() => {
    if (selectedCargo) {
      dispatch(openPopup(selectedCargo.id));
    }
  }, [selectedCargo]);

  useEffect(() => {
    refreshCanvasListeners();
  }, [objectListItems]);

  const getValidCoord = (val: number, min: number, max: number) => {
    if (val >= min && val <= max) {
      return val;
    } else if (val < min) {
      return min;
    } else {
      return max;
    }
  };

  const refreshCanvasListeners = () => {
    grid?.off();

    grid?.on('selection:updated', (e: fabric.IEvent<MouseEvent>) => {
      if (e.selected) {
        grid?.setActiveObject(e.selected[0]);
      }
    });

    grid?.on('mouse:up', function () {
      if (isObjectModified) {
        isObjectModified = false;
        dispatchFunction();
      }
    });

    grid?.on('mouse:dblclick', (e: fabric.IEvent<MouseEvent>) => {
      if (e.target) {
        console.log(objectListItems);

        setSelectedCargo(
          objectListItems.find((cargo) => cargo.id === e.target!.name!)
        );
      }
    });

    grid?.on('object:scaling', function (e) {
      if (e.target) {
        isObjectModified = true;
        const startingPosition = unitsService.startingPosition(
          grid!.getWidth(),
          grid!.getHeight()
        );
        const leftMaxValue =
          unitsService.CARGO_WIDTH_AS_CANVAS_PERCENT * grid!.getWidth() +
          startingPosition.left;
        const topMaxValue =
          unitsService.CARGO_LENGTH_AS_CANVAS_PERCENT * grid!.getHeight() +
          startingPosition.top;

        const target = e.target as Required<typeof e.target>;

        e.target.top = getValidCoord(
          target.top,
          startingPosition.top,
          topMaxValue - target.height * target.scaleY
        );

        e.target.left = getValidCoord(
          target.left!,
          startingPosition.left,
          leftMaxValue - target.width * target.scaleX
        );

        const position = {
          x: unitsService.pixelsToInches(
            target.left - startingPosition.left,
            grid!.getWidth()
          ),
          y: unitsService.pixelsToInches(
            target.top - startingPosition.top,
            grid!.getWidth()
          ),
        };

        dispatchFunction = () => {
          dispatch(
            updateItemScale({
              id: target.name!,
              scaleX: target.scaleX,
              scaleY: target.scaleY,
            })
          );

          dispatch(
            updateItemFs({
              id: target.name!,
              updatedFs:
                position.x +
                245 +
                (unitsService.pixelsToInches(target.width, grid!.getWidth()) *
                  target.scaleX) /
                  2,
            })
          );
        };
      }
    });

    grid?.on('object:moving', function (e) {
      isObjectModified = true;

      if (e.target) {
        const startingPosition = unitsService.startingPosition(
          grid!.getWidth(),
          grid!.getHeight()
        );
        const leftMaxValue =
          unitsService.CARGO_WIDTH_AS_CANVAS_PERCENT * grid!.getWidth() +
          startingPosition.left;
        const topMaxValue =
          unitsService.CARGO_LENGTH_AS_CANVAS_PERCENT * grid!.getHeight() +
          startingPosition.top;

        const target = e.target as Required<typeof e.target>;

        e.target.top = getValidCoord(
          target.top,
          startingPosition.top,
          topMaxValue - target.height * target.scaleY
        );

        e.target.left = getValidCoord(
          target.left,
          startingPosition.left,
          leftMaxValue - target.width * target.scaleX
        );

        const position = {
          x: unitsService.pixelsToInches(
            e.target.left - startingPosition.left,
            grid!.getWidth()
          ),
          y: unitsService.pixelsToInches(
            e.target.top - startingPosition.top,
            grid!.getWidth()
          ),
        };

        dispatchFunction = () => {
          dispatch(
            updateItemPosition({
              id: target.name,
              updatedPosition: position,
            })
          );
          dispatch(
            updateItemFs({
              id: target.name,
              updatedFs:
                position.x +
                245 +
                (unitsService.pixelsToInches(target.width, grid!.getWidth()) *
                  target.scaleX) /
                  2,
            })
          );
        };
      }
    });
  };

  return (
    <div id='gridContainer' className='bg-[#fafafa] flex flex-col'>
      <canvas id='canvas' ref={canvasRef} />
      <PopupComponent popupId={selectedCargo?.id} width='60%' height='25%'>
        <CargoContainer
          close={() => {
            dispatch(closePopup(selectedCargo?.id ?? ''));
            setSelectedCargo(undefined);
          }}
        >
          <h1 className='text-center mb-5 text-xl font-bold text-black'>
            Modify Object
          </h1>
          {
            <div key={selectedCargo?.id} className='flex justify-center h-4rem'>
              <div className='grid grid-rows-2 place-items-center my-0'>
                <h1 className='self-end'>Height</h1>
                <input
                  name='item'
                  className='w-28 h-10 rounded-xl self-start'
                  placeholder={`${selectedCargo?.height.toFixed(3)}`}
                  onChange={(e) => heightChangeHandler(e)}
                />
              </div>
              <div className='grid grid-rows-2 place-items-center'>
                <h1 className='self-end'>Width</h1>
                <input
                  name='item'
                  className='w-28 h-10 p-1 m-1 rounded-xl self-start'
                  placeholder={`${selectedCargo?.width.toFixed(3)}`}
                  onChange={(e) => widthChangeHandler(e)}
                />
              </div>
              <div className='grid grid-rows-2 place-items-center'>
                <h1 className='self-end'>Fusealge</h1>
                <input
                  className='w-28 h-10 p-1 m-1 rounded-xl self-start'
                  placeholder={`${selectedCargo?.fs}`}
                />
              </div>
              <div className='grid grid-rows-2 place-items-center'>
                <h1 className='self-end'>Weight</h1>
                <input
                  name='item'
                  className='w-28 h-10 p-1 m-1 rounded-xl self-start'
                  placeholder={`${selectedCargo?.weight}`}
                  onChange={(e) => weightChangeHandler(e)}
                />
              </div>
            </div>
          }
        </CargoContainer>
      </PopupComponent>
    </div>
  );
};
