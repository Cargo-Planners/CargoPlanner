import React from 'react';
import {
  CargoContainer,
  CargoInputNumber,
  CargoInputSelect,
  CargoInput,
  labelPositionEnum,
  CargoInputRadio,
} from '../ViewComponents';
import { useDispatch, useSelector } from 'react-redux';
import { updateBasicData } from '../../../redux/BasicDataSlice';
import { State } from '../../../redux/store';

type Props = {
  close: (id: string) => void;
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
      <div style={{ height: '100%' }}>
        <div className='flex justify-center'>
          <h1 className='text-center text-5xl font-bold'>Basic Data</h1>
        </div>

        <CargoInput
          label='Aircraft:'
          labelPosition={labelPositionEnum.TOP}
          labelSize={1.75}
        >
          <div className='w-3/5'>
            <CargoInputNumber
              placeholder={basicData.emptyWeight}
              label='Empty Weight:'
              onChange={(value) =>
                dispatchChangeBasicData({ key: 'emptyWeight', value: value })
              }
            />
          </div>
          <div className='w-3/5'>
            <CargoInputNumber
              placeholder={basicData.index}
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

        <CargoInput
          label='Crew:'
          labelPosition={labelPositionEnum.TOP}
          labelSize={1.75}
        >
          <div className='w-3/5'>
            <CargoInputNumber
              minValue={0}
              placeholder={basicData.cockpitCrew}
              label='Cockpit Crew:'
              onChange={(value) =>
                dispatchChangeBasicData({ key: 'cockpitCrew', value: value })
              }
            />
          </div>
          <div className='w-3/5'>
            <CargoInputNumber
              minValue={0}
              placeholder={basicData.loadmasters}
              label='Loadmasters:'
              onChange={(value) =>
                dispatchChangeBasicData({
                  key: 'loadmasters',
                  value: value,
                })
              }
            />
          </div>
        </CargoInput>

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
              label='Outboard:'
              placeholder={basicData.outboard}
              onChange={(value) =>
                dispatchChangeBasicData({ key: 'outboard', value: value })
              }
            />
          </div>
          <div className='w-3/5'>
            <CargoInputNumber
              placeholder={basicData.inboard}
              label='Inboard:'
              onChange={(value) =>
                dispatchChangeBasicData({ key: 'inboard', value: value })
              }
            />
          </div>
          <div className='w-3/5'>
            <CargoInputNumber
              label='Auxiliary:'
              placeholder={basicData.auxiliary}
              onChange={(value) =>
                dispatchChangeBasicData({ key: 'auxiliary', value: value })
              }
            />
          </div>
          <div className='w-3/5'>
            <CargoInputNumber
              label='External:'
              placeholder={basicData.external}
              onChange={(value) =>
                dispatchChangeBasicData({ key: 'external', value: value })
              }
            />
          </div>
        </CargoInput>
      </div>
    </CargoContainer>
  );
};
