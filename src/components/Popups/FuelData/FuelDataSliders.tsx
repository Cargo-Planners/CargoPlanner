import React from 'react';
//@ts-ignore
import fuelTank from '../../../images/fuelTank.png';
// @ts-ignore
import close from '../../icons/close.png';

export const FuelDataId = 'FUEL DATA';

type Props = {
  sliderData: {
    slider1: number;
    slider2: number;
    slider3: number;
    slider4: number;
    slider5: number;
  };
  fuelPod: boolean;
};

export const FuelDataSliders = ({ sliderData, fuelPod }: Props) => {
  const s1Height = {
    height: sliderData.slider1 + '%',
  };
  const s2Height = {
    height: sliderData.slider2 + '%',
  };
  const s3Height = {
    height: sliderData.slider3 + '%',
  };
  const s4Height = {
    height: sliderData.slider4 + '%',
  };

  const s5Height = {
    height: sliderData.slider5 + '%',
  };

  return (
    <div className='w-[900px] h-[600px]'>
      <h1 id='podState'>{fuelPod ? 'POD' : 'NO POD'}</h1>{' '}
      <div id='plane-tanks' style={{ backgroundImage: `url(${fuelTank})` }}>
        <div id='outboard1' className='tank-container'>
          <div id='tank-outBoard' style={s1Height}></div>
        </div>
        <div id='outboard2' className='tank-container'>
          <div id='tank-outBoard' style={s5Height}></div>
        </div>

        <div id='inboard1' className='tank-container'>
          <div id='tank-inBoard' style={s2Height}></div>
        </div>
        <div id='inboard2' className='tank-container'>
          <div id='tank-inBoard' style={s4Height}></div>
        </div>
        <div id='fuselage' className='tank-container'>
          <div id='tank-fuselage' style={s3Height}></div>
        </div>
      </div>
    </div>
  );
};
