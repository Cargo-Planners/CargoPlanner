import React from 'react';
import {
  CargoContainer,
  CargoInputNumber,
  CargoInputSelect,
  CargoInput,
  labelPositionEnum,
  CargoInputRadio,
} from '../../ViewComponents';
import { useDispatch, useSelector } from 'react-redux';
import { updateBasicData } from '../../../redux/BasicDataSlice';
import { State } from '../../../redux/store';

type Props = {
  close: (id: string) => void;
  open: (id: string) => void;
};

export const basicDataId = 'BASIC_DATA';

export const BasicDataForm = ({ close }: Props) => {
  const dispatch = useDispatch();

  function handleClose() {
    close(basicDataId);
  }

  const dispatchChangeBasicData = (data: { key: string; value: any }): void => {
    dispatch(updateBasicData({ changes: { [data.key]: data.value } }));
  };

  const basicData = useSelector((state: State) => state.basicData);

  return (
    <CargoContainer close={handleClose}>
      <div className='w-full'>
        <div className='flex justify-center'>
          <h1 className='text-center text-5xl font-bold'>Basic Data</h1>
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
                onChange={(value) =>
                  dispatchChangeBasicData({ key: 'emptyWeight', value: value })
                }
              />
            </div>
            <div className='w-3/5'>
              <CargoInputNumber
                placeholder='Index'
                label='Aircraft Index:'
                onChange={(value) =>
                  dispatchChangeBasicData({ key: 'index', value: value })
                }
              />
            </div>
            <div className='w-3/5'>
              <CargoInputSelect
                options={['Option1', 'Option2', 'Option3']}
                label='Configuration:'
                onChange={(value) =>
                  dispatchChangeBasicData({ key: 'config', value: value })
                }
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
                onChange={(value) =>
                  dispatchChangeBasicData({ key: 'cockpitCrew', value: value })
                }
              />
            </div>
            <div className='w-3/5'>
              <CargoInputNumber
                minValue={0}
                placeholder='0'
                label='Inspectors Crew:'
                onChange={(value) =>
                  dispatchChangeBasicData({
                    key: 'inspectorsCrew',
                    value: value,
                  })
                }
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
              <CargoInputRadio
                label='Pod/No Pod:'
                onChange={(value) =>
                  dispatchChangeBasicData({ key: 'fuelPod', value: value })
                }
              />
            </div>
            <div className='w-3/5'>
              <CargoInputNumber
                label='outboard:'
                placeholder={basicData.outboard}
                onChange={(value) =>
                  dispatchChangeBasicData({ key: 'outboard', value: value })
                }
              />
            </div>
            <div className='w-3/5'>
              <CargoInputNumber
                placeholder={basicData.inboard}
                label='inboard:'
                onChange={(value) =>
                  dispatchChangeBasicData({ key: 'inboard', value: value })
                }
              />
            </div>
            <div className='w-3/5'>
              <CargoInputNumber
                label='fuselage:'
                placeholder={basicData.auxiliary}
                onChange={(value) =>
                  dispatchChangeBasicData({ key: 'fuselage', value: value })
                }
              />
            </div>
          </CargoInput>
        </div>
      </div>
    </CargoContainer>
  );
};
