import React, { useContext, useEffect } from 'react';
import { fabric } from 'fabric';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateItemScale,
  updateItemPosition,
  updateItemFs,
  setItemsList,
  setSelectedCargoById,
} from '../../../redux/ObjectsDataSlice';
import UnitsService from '../../../services/UnitsService';
import { State } from '../../../redux/store';
import { CanvasCTX } from './CanvasContext';
import { Cargo } from '../../../models/ObjectItem';
import { openPopup } from '../../../redux/PopupSlice';
import { useFabric } from '../../../hooks/fabric';

export const Grid = () => {
  const { canvas } = useContext(CanvasCTX);

  const selectedCargo = useSelector(
    (state: State) => state.objectsData.selectedCargo
  );

  const dispatch = useDispatch();

  const objectListItems = useSelector(
    (state: State) => state.objectsData.cargoList
  );

  const unitsService = new UnitsService();

  const canvasRef = useFabric();

  let grid = canvas;
  let isObjectModified = false;
  let dispatchFunction = () => {};

  useEffect(() => {
    const listFromLocalStorage = localStorage.getItem('objectsList');
    const cargoList = listFromLocalStorage
      ? (JSON.parse(listFromLocalStorage) as Cargo[])
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

    grid?.on('selection:created', (e: fabric.IEvent<MouseEvent>) => {
      console.log(e.selected);

      if (e.selected) {
        grid?.setActiveObject(e.selected[0]);
        dispatch(setSelectedCargoById(grid?.getActiveObject()?.name));
      }
    });

    grid?.on('selection:updated', (e: fabric.IEvent<MouseEvent>) => {
      if (e.selected) {
        grid?.setActiveObject(e.selected[0]);
        dispatch(setSelectedCargoById(grid?.getActiveObject()?.name));
      }
    });

    grid?.on('selection:cleared', () => {
      dispatch(setSelectedCargoById(undefined));
    });

    grid?.on('mouse:up', function () {
      if (isObjectModified) {
        isObjectModified = false;
        dispatchFunction();
      }
    });

    grid?.on('mouse:dblclick', (e: fabric.IEvent<MouseEvent>) => {
      if (e.target) {
        // setSelectedCargo(
        //   objectListItems.find((cargo) => cargo.id === e.target!.name!)
        // );
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
    <div id='gridContainer' className='flex flex-col w-full aspect-[25/9]'>
      <canvas id='canvas' ref={canvasRef} />
    </div>
  );
};