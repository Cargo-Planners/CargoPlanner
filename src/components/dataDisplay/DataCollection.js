import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import eventBus from '../Grid/eventBus';

const DataCollection = () => {
  const dataCollection = useSelector(
    (state) => state.objectsData.dataCollection
  );

  return (
    <div className='flex justify-start w-full w-full '>
      <div
        id='data-col-win2'
        className='flex justify-start self-center rounded-3xl w-4/5'
      >
        <h1 id='data-col-h1' className='mb-10'>
          General Data Collection
        </h1>
        <div
          id='data-col-h2'
          className='font-semibold text-[#000000] mb-0 ml-[10px] '
        >
          {Object.keys(dataCollection).map((key) => {
            return (
              <h2 className='flex flex-row text-[#000000] font-bold	text-[1.5rem] mb-[10px]'>
                {key}: &nbsp;
                <span className='font-normal'>{dataCollection[key]}</span>
              </h2>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DataCollection;
