import React, { useState, Fragment } from 'react';
import DynamicObj from './DynamicObj';
import eventBus from './eventBus';

function CGrid(props, fabricRef) {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  eventBus.on('setSideBarValue', (data) => {
    setSideBarOpen(!isSideBarOpen);
  });
  return (
    <div className='gridContainer bg-[#fafafa] flex flex-col'>
      <DynamicObj ref={fabricRef} />
    </div>
  );
}

const CGridWithforwardedRef = React.forwardRef(CGrid);
export default CGridWithforwardedRef;
