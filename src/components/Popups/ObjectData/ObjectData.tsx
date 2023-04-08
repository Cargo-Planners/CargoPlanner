import React from 'react';
import { ObjectItem } from '../../../models/ObjectItem';
import {
  CargoContainer,
  CargoInputNumber,
  labelPositionEnum,
  labelTextPositionEnum,
} from '../../ViewComponents';

type Props = {
  close: (id: string) => void;
  object: ObjectItem;
};

export const objectsDataId = 'OBJECT_POPUP';

export const BasicDataForm = ({ close, object }: Props) => {
  function handleClose() {
    close(objectsDataId);
  }

  return (
    <CargoContainer close={handleClose}>
      <div className='w-full'>
        <div className='flex justify-center'>
          <h1 className='text-center text-5xl font-bold'>{object.name}</h1>
        </div>

        <div className='flex flex-row w-full'>
          <CargoInputNumber
            label='Length'
            labelPosition={labelPositionEnum.TOP}
            labelTextPosition={labelTextPositionEnum.CENTER}
            placeholder={object.height}
            value={object.height}
          />
        </div>
      </div>
    </CargoContainer>
  );
};
