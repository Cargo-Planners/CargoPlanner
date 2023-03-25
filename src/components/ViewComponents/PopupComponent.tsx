import React, { PropsWithChildren } from 'react';
import { Dialog } from '@mui/material';
import { useSelector } from 'react-redux';
import { State } from '../../redux/store';

type Props = {
  popupId: string;
};

export function PopupComponent({
  popupId,
  children,
}: PropsWithChildren<Props>) {
  const isOpen = useSelector(
    (state: State) =>
      state.popupReducer.popupList.find(({ id }) => id === popupId)?.isOpen ??
      false
  );

  return <Dialog open={isOpen}>{children}</Dialog>;
}
