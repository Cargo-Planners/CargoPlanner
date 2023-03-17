import React from 'react';
import { CargoContainer } from '../ViewComponents/CargoContainer';
import { CargoInputNumber } from '../ViewComponents/CargoInputNumber';
import { CargoInputText } from '../ViewComponents/CargoInputText';
import { CargoInputSelect } from '../ViewComponents/CargoInputSelect';
import {
  CargoInput,
  labelPositionEnum,
  labelTextPositionEnum,
} from '../ViewComponents/CargoInput';

type Props = {
  closeModal: () => void;
};

export const SampleForm = ({ closeModal }: Props) => {
  return (
    <CargoContainer close={closeModal}>
      <div className='w-[60vh] '>
        <div className='flex justify-center'>
          <h1 className='text-center text-5xl font-bold my-4 mb-10'>My Form</h1>
        </div>
        <div>
          <CargoInput
            label='Aircraft:'
            labelPosition={labelPositionEnum.TOP}
            labelSize={1.75}
          >
            <div className='w-3/5'>
              <CargoInputNumber
                placeholder='Empty Weight'
                label='Empty Weight'
              />
            </div>
            <div className='w-3/5'>
              <CargoInputText placeholder='Index' label='Aircraft Index' />
            </div>
            <div className='w-3/5'>
              <CargoInputSelect
                options={['Option1', 'Option2', 'Option3']}
                label='Formation'
              />
            </div>
          </CargoInput>
        </div>
        <div>
          <CargoInput
            label='Crew:'
            labelPosition={labelPositionEnum.TOP}
            labelSize={1.75}
          >
            <div className='w-3/5'>
              <CargoInputNumber
                minValue={0}
                placeholder='0'
                label='Cockpit Crew'
              />
            </div>
            <div className='w-3/5'>
              <CargoInputNumber
                minValue={0}
                placeholder='0'
                label='Inspectors Crew'
              />
            </div>
          </CargoInput>
        </div>
      </div>
    </CargoContainer>
  );
};
