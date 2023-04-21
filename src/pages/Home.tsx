import React, { useState } from 'react';
import SideBar from '../components/SideBar/SideBar';
import { Grid } from '../components/Grid/Grid';
import MAC from '../components/Graphs/MAC';
import { fabric } from 'fabric';
import { CanvasCTX } from '../components/Grid/CanvasContext';

const Home = () => {
  const [canvasRef, setCanvasRef] = useState<fabric.Canvas>();
  const setCanvas = (canvas: fabric.Canvas) => {
    setCanvasRef(canvas);
  };

  return (
    <CanvasCTX.Provider
      value={{
        canvas: canvasRef,
        setCanvas,
      }}
    >
      <div>
        <SideBar />
        <div className='ml-[20vw] bg-[#fafafa] w-[60%] aspect-[1/0.36]'>
          <Grid />
          <MAC />
        </div>
      </div>
    </CanvasCTX.Provider>
  );
};

const HomeWithforwardedRef = React.forwardRef(Home);
export default HomeWithforwardedRef;
