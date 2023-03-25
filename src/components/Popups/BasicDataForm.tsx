import React from 'react';
import {
  CargoContainer,
  CargoInputNumber,
  CargoInputText,
  CargoInputSelect,
  CargoInput,
  labelPositionEnum,
  CargoInputRadio,
} from '../ViewComponents';
import { MdLocalGasStation } from 'react-icons/md';

type Props = {
  close: (id: string) => void;
};

export const basicDataId = 'BASIC_DATA';

export const BasicDataForm = ({ close }: Props) => {
  function handleClose() {
    close(basicDataId);
  }

  return (
    <CargoContainer close={handleClose}>
      <div className='w-[60vh]'>
        <div className='flex justify-center'>
          <h1 className='text-center text-5xl font-bold'>My Form</h1>
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
                label='Empty Weight:'
              />
            </div>
            <div className='w-3/5'>
              <CargoInputText placeholder='Index' label='Aircraft Index:' />
            </div>
            <div className='w-3/5'>
              <CargoInputSelect
                options={['Option1', 'Option2', 'Option3']}
                label='Formation:'
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
                label='Cockpit Crew:'
              />
            </div>
            <div className='w-3/5'>
              <CargoInputNumber
                minValue={0}
                placeholder='0'
                label='Inspectors Crew:'
              />
            </div>
          </CargoInput>
        </div>
        <div>
          <CargoInput
            label='Fuel Distribution:'
            labelPosition={labelPositionEnum.TOP}
            labelSize={1.75}
          >
            <div className='w-3/5'>
              <CargoInputRadio label='Pod/No Pod:' />
            </div>
          </CargoInput>
        </div>
      </div>
      <MdLocalGasStation className='absolute right-10 bottom-5 w-[40px] h-[40px] hover:text-[#f9d63a] cursor-pointer' />
    </CargoContainer>
  );
};
