import React from 'react';
import { BasicInputProps, CargoInput, InputProps } from './CargoInput';

type Props = {} & BasicInputProps;

export const CargoInputRadio = ({ label }: Props) => {
  return (
    <CargoInput label={label}>
      <input type='checkbox' className='cargo-checkbox' />
    </CargoInput>
  );
};
