import { MdOutlineClose } from 'react-icons/md';
import React, { Children, PropsWithChildren } from 'react';
import './styles.css';

export type InputProps = {
  placeholder?: string;
  value?: string | number | readonly string[];
} & BasicInputProps;

export type BasicInputProps = {
  label?: string;
};

export const CargoInput = ({
  children,
  label,
}: PropsWithChildren<InputProps>) => {
  const input = children;

  return (
    <div className='cargo-input-holder'>
      <span className='input-label'>{label}</span>
      {input}
    </div>
  );
};
