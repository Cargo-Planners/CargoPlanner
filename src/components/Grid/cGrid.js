import React, { useState, Fragment } from 'react';
import DynamicObj from './DynamicObj';
import eventBus from './eventBus';

function CGrid(props, fabricRef) {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  eventBus.on('setSideBarValue', (data) => {
    setSideBarOpen(!isSideBarOpen);
  });
  return (
    <div
      className='flex justify-center bg-[#fafafa]'
      // className={`flex justify-center items-center w-4/5 min-h-[412.88px] ${
      //   !isSideBarOpen ? "ml-auto" : ""
      // }`}
    >
      <div
        // style={{ marginRight: "1.5vw", marginBottom: "5rem" }}
        className='gridContainer flex flex-col mb-6 mt-[25px]'
      >
        <h2 id='gridStart'>245</h2>
        <h2
          id='gridEnd'
          style={{
            left:
              document.getElementsByClassName('gridContainer')[0]?.clientWidth *
              0.79,
          }}
        >
          737
        </h2>
        <DynamicObj ref={fabricRef} />
      </div>
    </div>
  );
}

const CGridWithforwardedRef = React.forwardRef(CGrid);
export default CGridWithforwardedRef;
