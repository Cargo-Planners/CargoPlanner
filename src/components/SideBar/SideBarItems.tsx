import React, { useState } from 'react';
import {
  FaCaretDown,
  FaTrash,
  FaPlaneDeparture,
  FaChartLine,
  FaFileExport,
  FaTimes,
} from 'react-icons/fa';
import { GiCargoCrate } from 'react-icons/gi';
import { fabric } from 'fabric';
import { addItem } from '../../redux/ObjectsDataSlice';
//@ts-ignore
import randomColor from 'randomcolor';
import eventBus from '../Grid/eventBus';
//@ts-ignore
import { v4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { routeConstants } from '../../Routes/constants';
import { openPopup, closePopup } from '../../redux/PopupSlice';
import { BasicDataForm, basicDataId } from '../Popups/BasicData/BasicDataForm';
import UnitsService from '../../services/UnitsService';
import { State } from '../../redux/store';
import { ObjectItem } from '../../models/ObjectItem';
import SiderBarItem from './SiderBarItem';
import { PopupComponent } from '../ViewComponents';
import DropDown from './DropDown';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';

export const X_ORIGIN = 22;
export const Y_ORIGIN = 315;
type Props = {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  fabricRef: any;
};

const SideBarItems = ({ showSideBar, setShowSideBar, fabricRef }: Props) => {
  const objectListItems = useSelector((state: State) => state.objectsData);
  const basicData = useSelector((state: State) => state.basicData);

  const [showDropDown, setShowDropDown] = useState(false);

  const setSideBar = () => {
    eventBus.dispatch('setSideBarValue', { message: '' });
  };

  const dispatch = useDispatch();

  const dispatchOpenPopup = (id: string) => {
    dispatch(openPopup(id));
  };

  const dispatchClosePopup = (id: string) => {
    dispatch(closePopup(id));
  };

  const addItemToObjectList = (item: ObjectItem) => {
    dispatch(addItem(item));
  };

  const addRectangle = () => {
    let color = randomColor();
    const id = v4();
    const oneUnitInPixels = UnitsService.oneUnitInPixels(
      fabricRef.current.width
    );
    const rect = new fabric.Rect({
      //@ts-ignore
      id: id,
      width: oneUnitInPixels,
      height: oneUnitInPixels,
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      left: X_ORIGIN,
      top: Y_ORIGIN - oneUnitInPixels,
      fill: color,
    });
    fabricRef.current.add(rect);
    addItemToObjectList({
      type: 'Object',
      name: '',
      id: id,
      canvasObj: rect,
      weight: 0,
      fs: 0,
      width: UnitsService.ONE_UNIT_IN_INCHES,
      height: UnitsService.ONE_UNIT_IN_INCHES,
      index: 0,
      fill: color,
      position: {
        x: rect.left! - X_ORIGIN,
        y: Math.abs(rect.top! - Y_ORIGIN),
        z: 0,
      },
    });

    fabricRef.current.setActiveObject(rect);
  };

  const togglePopup = () => {
    if (true) {
      Swal.fire({
        icon: 'success',
        title: 'כל הכבוד עכשיו אפשר לייצא קובץ pdf',
        text: `${objectListItems.dataCollection.fuel}${' '}${
          objectListItems.dataCollection.MAC
        }{" "}${objectListItems.dataCollection.MACRange}{" "}${
          objectListItems.dataCollection.ZFW
        }{" "}${objectListItems.dataCollection.fuel}{" "}${
          objectListItems.dataCollection.areaGraph
        }{" "}${
          objectListItems.dataCollection.index
        }{"inside the objectListItems"}${
          objectListItems.objectListItems[0].fill
        }{" "}${objectListItems.dataCollection.fuel}{" "}${
          objectListItems.dataCollection.fuel
        }{" "}${objectListItems.dataCollection.fuel}{" "}${basicData}`,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'המתמטיקה שלך לא משהו חשבת להשלים בגרויות?',
        text: 'ניסית אולי בני גורן?',
      });
    }
  };

  return (
    <div className='min-h-full flex flex-col justify-between'>
      <div className='flex flex-col gap-5'>
        <div className='flex'>
          {showSideBar ? (
            <button
              className='flex text-5xl text-[#1E1E22] items-center cursor-pointer'
              onClick={() => {
                setShowSideBar((prev: boolean) => !prev);
                setSideBar();
              }}
            >
              <div className='flex items-center gap-3 '>
                <FaTimes size={40} />
                <h2 className='text-xl font-bold text-[#000000]'>Gulliver</h2>
              </div>
            </button>
          ) : null}
        </div>
        <hr className='border-[#000000]' />
        <div onClick={addRectangle}>
          <SiderBarItem Icon={GiCargoCrate} buttonText='New Object' />
        </div>
        <div>
          <SiderBarItem Icon={FaTrash} buttonText='Erase All' />
        </div>
        <div
          onClick={() => {
            dispatchOpenPopup(basicDataId);
          }}
        >
          <SiderBarItem Icon={FaPlaneDeparture} buttonText='Basic Data' />
        </div>
        {
          <PopupComponent popupId={basicDataId} width='35vw' height='70vh'>
            <BasicDataForm
              close={dispatchClosePopup}
              open={dispatchOpenPopup}
            />
          </PopupComponent>
        }

        <Link to={routeConstants.GraphsRoute}>
          <div>
            <SiderBarItem Icon={FaChartLine} buttonText='Show Infographics' />
          </div>
        </Link>

        <div onClick={togglePopup}>
          <SiderBarItem Icon={FaFileExport} buttonText='Export To Loadsheet' />
        </div>
        <hr className='border-[#000000]' />
        <div onClick={() => setShowDropDown((prev) => !prev)}>
          <SiderBarItem Icon={FaCaretDown} buttonText='Existing Objects' />
        </div>
        {showDropDown && <DropDown />}
        <div className='flex  text-white'>
          {/* <button className="font-bold ">Help</button>
          <img className="my-auto h-5 w-5" src={helpIcon} alt="helpIcon" /> */}
        </div>
      </div>
      <div className='flex flex-row text-white'>
        <SettingsIcon className='spinningSettingsIcons cursor-pointer' />
      </div>
    </div>
  );
};

const SideBarItemsWithforwardedRef = React.forwardRef(SideBarItems);
export default SideBarItemsWithforwardedRef;