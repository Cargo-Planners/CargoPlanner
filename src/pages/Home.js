import React, { useState } from 'react';
import CGrid from '../components/Grid/cGrid';
import SideBar from '../components/SideBar/SideBar';
import DataCollection from '../components/dataDisplay/DataCollection';
import ObjectList from '../components/ObjectList/ObjectList';
import Options from '../components/Options/Options';
import { useRef } from 'react';
import eventBus from '../components/Grid/eventBus';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fabric } from 'fabric';
import { setItemsList } from '../redux/ObjectsDataSlice';
import UnitsService from '../services/UnitsService';

const Home = () => {
  const fabricRef = useRef({ current: {} });
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    eventBus.on('setSideBarValue', (data) => {
      setSideBarOpen(!isSideBarOpen);
    });

    let objectsList = JSON.parse(localStorage.getItem('objectsList'));
    objectsList = objectsList ?? [];
    dispatch(setItemsList(objectsList));
    const startingPoint = UnitsService.startingPosition(
      fabricRef.current.width,
      fabricRef.current.height
    );
    objectsList.forEach((objectItem) => {
      fabricRef.current.add(
        new fabric.Rect({
          name: objectItem.id,
          width: UnitsService.oneUnitInPixels(fabricRef.current.width),
          height: UnitsService.oneUnitInPixels(fabricRef.current.width),
          scaleX: objectItem.width / UnitsService.ONE_UNIT_IN_INCHES,
          scaleY: objectItem.height / UnitsService.ONE_UNIT_IN_INCHES,
          opacity: objectItem.opacity,
          left:
            UnitsService.inchesToPixels(
              objectItem.position.x,
              fabricRef.current.width
            ) + startingPoint.left,
          top:
            UnitsService.inchesToPixels(
              objectItem.position.y,
              fabricRef.current.width
            ) + startingPoint.top,
          fill: objectItem.fill,
        })
      );
    });
  }, []);

  return (
    <div>
      <SideBar ref={fabricRef} />
      <div className='ml-[20vw] bg-[#fafafa] w-[60%] aspect-[1/0.36]'>
        <CGrid ref={fabricRef} />
      </div>
    </div>
  );
};

const HomeWithforwardedRef = React.forwardRef(Home);
export default HomeWithforwardedRef;
