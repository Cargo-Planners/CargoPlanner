import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateSlider1,
  updateSlider2,
  updateSlider3,
  updateSlider4,
  updateSlider5,
} from '../../redux/EditBasicDataSlice';

//@ts-ignore
import fuelTank from '../../images/fuelTank.png';
import Slider from './Slider';
// @ts-ignore
import close from '../../icons/close.png';

type Props = {
  setFuelModalIsOpen: (flag: boolean) => void;
};

const FuelData = ({ setFuelModalIsOpen }: Props) => {
  const dispatch = useDispatch();
  const { slider1, slider2, slider3, slider4, slider5, fuelPod } = useSelector(
    (state: any) => state.basicData
  );

  const s1Height = {
    height: slider1 + '%',
  };
  const s2Height = {
    height: slider2 + '%',
  };
  const s3Height = {
    height: slider3 + '%',
  };
  const s4Height = {
    height: slider4 + '%',
  };

  const s5Height = {
    height: slider5 + '%',
  };

  return (
    <div
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#3A3A35',
          opacity: 0.95,
        },
        //@ts-ignore
        content: {
          backgroundColor: '#CFA015',
          display: 'flex',
          borderRadius: '20px',
          width: '550px',
          margin: 'auto',
          marginTop: '15vh',
          padding: '10px',
          position: 'relative',
        },
      }}
    >
      <button onClick={() => setFuelModalIsOpen(false)} id='close-fuel'>
        <img src={close} alt='' />
      </button>
      <h1 className=' text-5xl font-bold text-white text-center justify-self-center'>
        Fuel Distribution
      </h1>
      <div id='fuel-silders'>
        <Slider
          label='Outboard:'
          value={slider1}
          changeValue={(Slider1: any) => {
            dispatch(updateSlider1(Slider1));
          }}
        />

        <Slider
          label='INB:'
          value={slider2}
          changeValue={(Slider2: any) => {
            dispatch(updateSlider2(Slider2));
          }}
        />

        <Slider
          label='Fuselage:'
          value={slider3}
          changeValue={(Slider3: any) => {
            dispatch(updateSlider3(Slider3));
          }}
        />

        <Slider
          label='INB:'
          value={slider4}
          changeValue={(Slider4: any) => {
            dispatch(updateSlider4(Slider4));
          }}
        />
        <Slider
          label='Outboard:'
          value={slider5}
          changeValue={(Slider5: any) => {
            dispatch(updateSlider5(Slider5));
          }}
        />
      </div>
      <h1 id='podState'>{fuelPod ? 'POD' : 'NO POD'}</h1>
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

export default FuelData;
