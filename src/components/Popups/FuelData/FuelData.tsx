import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateSlider1,
  updateSlider2,
  updateSlider3,
  updateSlider4,
  updateSlider5,
} from '../../../redux/BasicDataSlice';

//@ts-ignore
import Slider from '../../BasicData/Slider';
// @ts-ignore
import close from '../../icons/close.png';
import { CargoContainer } from '../../ViewComponents';
import { FuelDataSliders } from './FuelDataSliders';

export const FuelDataId = 'FUEL DATA';

type Props = {
  close: (id: string) => void;
};

export const FuelData = ({ close }: Props) => {
  const dispatch = useDispatch();
  const { slider1, slider2, slider3, slider4, slider5, fuelPod } = useSelector(
    (state: any) => state.basicData
  );

  const [Slider1, setSlider1] = useState(0);
  const [Slider2, setSlider2] = useState(0);
  const [Slider3, setSlider3] = useState(0);
  const [Slider4, setSlider4] = useState(0);
  const [Slider5, setSlider5] = useState(0);

  const handleClose = () => {
    close(FuelDataId);
  };

  return (
    <CargoContainer close={handleClose}>
      <div className='w-full h-full flex items-center justify-center flex-col'>
        <h1 className=' text-5xl font-bold text-[#000000] text-center justify-self-center [mt-2%]'>
          Fuel Distribution
        </h1>
        <div id='fuel-silders'>
          <Slider
            label='Outboard:'
            value={slider1}
            changeValue={(Slider1: any) => {
              setSlider1(Slider1);
              dispatch(updateSlider1(Slider1));
            }}
          />

          <Slider
            label='INB:'
            value={slider2}
            changeValue={(Slider2: any) => {
              setSlider2(Slider2);
              dispatch(updateSlider2(Slider2));
            }}
          />

          <Slider
            label='Fuselage:'
            value={slider3}
            changeValue={(Slider3: any) => {
              setSlider3(Slider3);
              dispatch(updateSlider3(Slider3));
            }}
          />

          <Slider
            label='INB:'
            value={slider4}
            changeValue={(Slider4: any) => {
              setSlider4(Slider4);
              dispatch(updateSlider4(Slider4));
            }}
          />
          <Slider
            label='Outboard:'
            value={slider5}
            changeValue={(Slider5: any) => {
              setSlider5(Slider5);
              dispatch(updateSlider5(Slider5));
            }}
          />
        </div>
        <FuelDataSliders
          sliderData={{
            slider1: Slider1,
            slider2: Slider2,
            slider3: Slider3,
            slider4: Slider4,
            slider5: Slider5,
          }}
          fuelPod={fuelPod}
        />
      </div>
    </CargoContainer>
  );
};
