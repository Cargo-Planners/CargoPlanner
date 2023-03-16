import React from 'react';
import { BasicInputProps, CargoInput, InputProps } from './CargoInput';

type Props = {
  options: string[] | number[];
  defaultOption?: string | number;
} & BasicInputProps;

export const CargoInputSelect = ({ options, label }: Props) => {
  return (
    <CargoInput label={label}>
      <select className='cargo-input'>
        {options.map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
    </CargoInput>
  );
};
