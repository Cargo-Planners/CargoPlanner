import { useDispatch, useSelector } from 'react-redux';
import { updateFuelPod } from '../../redux/BasicDataSlice';

import { useState } from 'react';

function Radio() {
  const { fuelPod } = useSelector((state) => state.basicData);
  const dispatch = useDispatch();

  return (
    <form>
      <input
        className='check-box'
        type='checkbox'
        checked={fuelPod}
        onChange={(e) => {
          dispatch(updateFuelPod(e.target.checked));
        }}
      />
    </form>
  );
}
export default Radio;
