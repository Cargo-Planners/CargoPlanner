import React, { PropsWithChildren } from 'react';
import { Dialog } from '@mui/material';
import { useSelector } from 'react-redux';
import { State } from '../../redux/store';
import './styles.css';

type Props = {
  popupId: string;
  width: string;
  height: string;
};

export function PopupComponent({
  popupId,
  width,
  height,
  children,
}: PropsWithChildren<Props>) {
  const isOpen = useSelector(
    (state: State) =>
      state.popupData.popupList.find(({ id }) => id === popupId)?.isOpen ??
      false
  );

  return (
    <Dialog
      open={isOpen}
      PaperProps={{ className: 'w-full' }}
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: width,
            height: '100%',
            maxHeight: height,
            borderRadius: '1rem',
          },
        },
      }}
    >
      {children}
    </Dialog>
  );
}
