import { MdOutlineClose } from 'react-icons/md';
import React, { Children, PropsWithChildren } from 'react';
import './styles.css';

type Props = {
  showCloseIcon: boolean;
  close: () => void;
};

export const CargoContainer = ({
  children,
  showCloseIcon,
  close,
}: PropsWithChildren<Props>) => {
  const content = children;

  return (
    <div className='container'>
      <MdOutlineClose
        className='close-icon'
        style={{ display: showCloseIcon ? 'auto' : 'none' }}
        onClick={close}
      />
      {content}
    </div>
  );
};
