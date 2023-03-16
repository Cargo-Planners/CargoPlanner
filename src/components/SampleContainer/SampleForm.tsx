import React from 'react';
import { CargoContainer } from '../ViewComponents/CargoContainer';
import { CargoInputNumber } from '../ViewComponents/CargoInputNumber';
import { CargoInputText } from '../ViewComponents/CargoInputText';
import { CargoInputSelect } from '../ViewComponents/CargoInputSelect';

type Props = {
  closeModal: () => void;
};

export const SampleForm = ({ closeModal }: Props) => {
  return (
    <CargoContainer showCloseIcon={true} close={closeModal}>
      <div className='w-[500px] h-[500px]'>
        <div className='flex justify-center'>
          <h1 className='text-center text-5xl font-bold my-4 mb-10'>My Form</h1>
        </div>
        <div className='w-2/5'>
          <CargoInputNumber
            minValue={0}
            maxValue={9}
            placeholder='Number'
            label='Number'
          />
        </div>
        <div className='w-2/5'>
          <CargoInputText placeholder='Text' label='Text' />
        </div>
        <div className='w-2/5'>
          <CargoInputSelect
            options={['Option1', 'Option2', 'Option3']}
            label='Options'
          />
        </div>
      </div>
    </CargoContainer>
  );
};
