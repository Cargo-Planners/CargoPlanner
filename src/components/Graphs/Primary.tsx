import React, { useEffect } from 'react';
import JXG from 'jsxgraph';
import './Graphs.css';

import { useSelector } from 'react-redux';
import { State } from '../../redux/store';
import { CalcService } from '../../services/CalcService';

export function Primary() {
  const objectsData = useSelector((state: State) => state.objectsData);
  const basicData = useSelector((state: State) => state.basicData);

  const calcService = new CalcService();

  useEffect(() => {
    const point = {
<<<<<<< HEAD:src/components/Graphs/Primary.js
      x: sumFule(basicData) / 1000,
      y: sumBsicWeightAndCargo(objectsData, basicData) ,
    };
    console.log(`point Primary: (${point.x}, ${point.y})`)
=======
      x: calcService.fuelWeightForFlight(basicData) / 1000,
      y: calcService.zeroFuelWeight(basicData, objectsData.cargoList) / 1000,
    };
>>>>>>> 3e4a1af36f1636e6c015c17a44f0b0d1c3a6132e:src/components/Graphs/Primary.tsx

    const board = JXG.JSXGraph.initBoard('jxgbox1', {
      boundingbox: [-5, 137, 71, 68],
      grid: true,
      axis: true,
      showNavigation: false,
    });

    board.create(
      'axis',
      [
        [0, 70],
        [68, 70],
      ],
      { ticks: { visible: true } }
    );

    board.create(
      'polygon',
      [
        [0, 70],
        [0, 98],
        [3, 98],
        [15, 112],
        [34, 120],
        [45, 108],
        [55, 100],
        [65, 90],
        [65, 70],
      ],
      {
        fillColor: 'green',
        fillOpacity: 0.5,
        borders: { strokeWidth: 0 },
        vertices: { visible: false },
        highlightFillColor: 'green',
        highlightFillOpacity: 0.5,
        tabindex: null,
      }
    );
    board.create(
      'polygon',
      [
        [0, 98],
        [0, 110],
        [2, 108],
        [25, 130],
        [35, 120],
        [65, 90],
        [55, 100],
        [45, 108],
        [34, 120],
        [15, 112],
        [3, 98],
      ],
      {
        fillColor: 'blue',
        fillOpacity: 0.5,
        borders: { strokeWidth: 0 },
        vertices: { visible: false },
        highlightFillColor: 'blue',
        highlightFillOpacity: 0.5,
        tabindex: null,
      }
    );
    board.create(
      'polygon',
      [
        [25, 130],
        [44, 130],
        [65, 110],
        [65, 90],
      ],
      {
        fillColor: 'yellow',
        fillOpacity: 0.5,
        borders: { strokeWidth: 0 },
        vertices: { visible: false },
        highlightFillColor: 'yellow',
        highlightFillOpacity: 0.5,
        tabindex: null,
      }
    );
    board.create(
      'polygon',
      [
        [0, 119],
        [0, 135],
        [68, 135],
        [68, 70],
        [65, 70],
        [65, 110],
        [44, 130],
        [25, 130],
        [10, 125],
        [2, 119],
      ],
      {
        name: 'area red',
        fillColor: 'red',
        fillOpacity: 0.5,
        borders: { strokeWidth: 0 },
        vertices: { visible: false },
        highlightFillColor: 'red',
        highlightFillOpacity: 0.5,
        tabindex: null,
      }
    );

    board.create('point', [point.x, point.y], {
      fixed: true,
      name: 'Point',
      size: 3,
    });
  }, []);

  return (
    <div className='bigwrapper'>
      <div className='wrapper'>
        <div className='content'>
          <h2 className='title'>Weight Limitation Chart (Primary)</h2>
          <div id='jxgbox1' style={{ width: '400px', height: '400px' }} />
          <p className='subtitle'>total Fuel - 1,000 Lbs</p>
        </div>
        <div className='titleWrapper'>
          <p className='tiltedText'>Basic Weight + cargo Weight - 1,000 Lbs</p>
        </div>
      </div>
    </div>
  );
}

export default Primary;
<<<<<<< HEAD:src/components/Graphs/Primary.js

const outboard = 8758; // slider1 = outboard   max_pound: 8758
const inboard = 8065; // slider2 = inboard    max_pound: 8065
const auxiliary = 6127; // slider3 = auxiliary  max_pound: 6127
const external = 9377; // slider4 = external   max_pound: 9377
const fuselage = 0; // slider5 = fuselage   max_pound:

function sumFule(basicData) {
  const fule = basicData.auxiliary + basicData.inboard + basicData.outboard -1000;
  // console.log(`The sumFule function returns: ${fule}`)
  return fule;
}

function sumBsicWeightAndCargo(objectsData, basicData) {
  // Emergancy equipment = 250
  const axis_x = ((basicData.cockpitCrew + basicData.loadMasters) * 170 + basicData.emptyWeight + 250) /1000 
  let weight_cargo = 0;
  objectsData.itemList.forEach((element) => {
    weight_cargo += element.weight;
  })
  const axis_y = weight_cargo / 1000


  // console.log(`The sumBsicWeightAndCargo function returns: ${weight}`)
  return axis_x + axis_y;
}
=======
>>>>>>> 3e4a1af36f1636e6c015c17a44f0b0d1c3a6132e:src/components/Graphs/Primary.tsx
