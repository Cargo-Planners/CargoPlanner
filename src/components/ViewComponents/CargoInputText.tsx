import React from 'react';
import { CargoInput, InputProps } from './CargoInput';

type Props = {} & InputProps;

export const CargoInputText = ({ placeholder, value, label }: Props) => {
  return (
    <CargoInput label={label}>
      <input
        className='cargo-input'
        type='text'
        placeholder={placeholder}
        value={value}
      />
    </CargoInput>
  );
};
