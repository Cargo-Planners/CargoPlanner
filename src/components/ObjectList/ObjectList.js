import React, { Fragment, useState } from 'react';
import PopUp from '../Grid/PopUp';
import { useSelector, useDispatch } from 'react-redux';
import { calculateWeight } from '../../redux/ObjectsDataSlice';
import eventBus from '../Grid/eventBus';
import ObjectDetails from './ObjectDetails';

const ObjectList = (props, fabricRef) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();
  const dispatch = useDispatch();
  const objectListItems = useSelector(
    (state) => state.objectsData.objectListItems
  );
  let fsValue = '';

  const weightChangeHandler = (e, index) => {
    const value = e.target.value === '' ? 0 : parseInt(e.target.value);
    // dispatch(updateWeight({ value, index }));
    dispatch(calculateWeight());
  };

  const activeCalculateWeight = () => {
    dispatch(calculateWeight());
  };

  const setFs = () => {
    eventBus.dispatch('setFsValue', { message: fsValue });
  };

  const togglePopup = (index) => {
    setIsOpen(!isOpen);
    setCurrentIndex(index);
  };

  return (
    <div className='flex content-center col-span-1 row-span-2 bg-[#f7f7f7] col-start-12 col-end-14'>
      <div className='flex flex-col bg-[#fffae1] w-full h-screen rounded-tl-lg border-[#000000] border-2 overflow-hidden'>
        <h1 className='text-[#000000] text-2xl font-bold text-center my-2'>
          Objects
        </h1>
        <div className='flex items-center'>
          <button
            onClick={activeCalculateWeight}
            className='bg-[#ffffff] hover:bg-[#f9d63a] my-4 mx-auto py-2 px-4 rounded-lg text-[#000000] font-bold border-[#000000] border-2' // Might not need this Button! ignore for now.
          >
            Update Total Weight
          </button>
          <button
            className='bg-[#ffffff] hover:bg-[#f9d63a] my-4 mx-auto py-2 px-4 rounded-lg text-[#000000] font-bold border-[#000000] border-2'
            onClick={setFs}
          >
            Update FS
          </button>
        </div>
        <div className='flex flex-col mt-2 h-5/6'>
          <div className='flex mb-2 text-center'>
            <p className='w-1/5 text-[#000000] font-semibold'>ID</p>
            <p className='w-1/5 text-[#000000] font-semibold'>Name</p>
            <p className='w-1/5 text-[#000000] font-semibold'>Weight</p>
            <p className='w-1/5 text-[#000000] font-semibold'>FS</p>
            <p className='w-1/5 text-[#000000] font-semibold'>cell</p>
          </div>
          <div className='flex flex-col text-right py-3 rounded-b-lg overflow-auto h-full hide-scroll-bar'>
            {objectListItems.map((item, index) => (
              <div key={index} className='flex flex-col'>
                <div className='flex mb-2'>
                  {/* onClick={setPopUp} What is this? */}
                  <p
                    className='w-1/5 my-auto text-center cursor-pointer text-[#000000] font-medium'
                    onClick={() => togglePopup(index)}
                  >
                    {index}
                  </p>
                  <p className='w-1/5 my-auto text-center text-[#000000] font-medium'>
                    {item.type}
                  </p>
                  <input
                    name='item'
                    className='w-1/5 bg-[#ffffff] text-center text-[#000000] pl-[10px] border-[#424242] border rounded'
                    placeholder='Weight'
                    onChange={(e) => weightChangeHandler(e, index)}
                    type='number'
                    min='0'
                  />
                  <input
                    className='w-1/5 bg-[#ffffff] text-center text-[#000000] pl-[10px] border-[#424242] border rounded'
                    placeholder={objectListItems[index].fs}
                    //onChange={(e) => (objectListItems[index].fs)}
                    type='number'
                    min='0'
                  />
                  <p className='w-1/5 my-auto text-center text-[#000000] font-medium'>
                    {index}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isOpen ? (
        <PopUp
          content={<ObjectDetails item={objectListItems[currentIndex]} />}
          handleClose={togglePopup}
        />
      ) : null}
    </div>
  );
};

const ObjectListWithforwardedRef = React.forwardRef(ObjectList);
export default ObjectListWithforwardedRef;
