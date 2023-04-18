import React from 'react';
import Select from 'react-select';

import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  updateEmptyWeight,
  updateIndex,
} from '../../redux/BasicDataSlice';

import { useState } from 'react';

const TextBox = ({ func, label, placeholder }) => {
  const [EmptyWeight, setEmptyWeight] = useState(0);
  const [Index, setIndex] = useState(0);

  const { countPeople, emptyWeight, index } = useSelector(
    (state) => state.basicData
  );
  return (
    <div>
      <div id='text-box-item'>
        <label className='text-lg'>{label}</label>
        <input
          id='input-css'
          placeholder={placeholder}
          type='text'
          onChange={(event) => {
            func(event.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default TextBox;
