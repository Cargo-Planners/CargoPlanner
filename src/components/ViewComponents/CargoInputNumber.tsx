import React from 'react';
import { CargoInput, InputProps } from './CargoInput';

type Props = {
  minValue?: number | string;
  maxValue?: number | string;
} & InputProps;

export const CargoInputNumber = ({
  minValue,
  maxValue,
  placeholder,
  value,
  label,
}: Props) => {
  const arr = ['a', 'b'];

  return (
    <CargoInput label={label}>
      <input
        className='cargo-input'
        type='number'
        placeholder={placeholder}
        min={minValue}
        max={maxValue}
        value={value}
      />
    </CargoInput>
  );
};
