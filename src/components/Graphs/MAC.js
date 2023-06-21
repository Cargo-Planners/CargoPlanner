import React, { useEffect, useRef } from 'react';
import CenterOfGravitiyMac from '../../images/CenterOfGravitiyMac.png';
import JXG from 'jsxgraph';

import { useSelector } from 'react-redux';

export function MAC() {
  const objectsData = useSelector((state) => state.objectsData);
  const basicData = useSelector((state) => state.basicData);
  useEffect(() => {
    console.log({ objectsData, basicData });

    const point = {
      x: get_mac(basicData, objectsData),
      y: GetGrossWeight(objectsData, basicData) / 1000,
    };
    // console.log(`point MAC: (${point.x}, ${point.y})`)
    const title = 'weight limit chart (primary)';
    const board = JXG.JSXGraph.initBoard('jxgbox3', {
      boundingbox: [13.5, 180, 32, 70], // [x_min, y_max, x_max, y_min]
      grid: {
        gridX: 1,
        gridY: 1,
      },
      axis: true,
      showNavigation: false,
    });

    const xAxis = board.create(
      'axis',
      [
        [14, 75],
        [32, 75],
      ],
      { ticks: { visible: true, frequency: 1 } }
    );
    const yAxis = board.create(
      'axis',
      [
        [14, 75],
        [14, 180],
      ],
      { ticks: { visible: true } }
    );

    const red = board.create(
      'polygon',
      [
        [14, 76],
        [15, 76],
        [15, 101.5],
        [18.4, 118.5],
        [25.2, 175],
        [25.2, 175],
        [30, 175],
        [30, 115],
        [25.8, 76],
        [31.5, 76],
        [31.5, 180],
        [14, 180],
      ],
      {
        fillColor: 'white',
        fillOpacity: 0.5,
        borders: { strokeWidth: 1.25, strokeColor: "black" },
        borders: { strokeWidth: 0 },
        vertices: { visible: false },
        highlightFillColor: 'white',
        highlightStrokeColor: "black",
        highlight: false,
        highlightFillOpacity: 0.5,
        tabindex: null,
      }
    );
    const orange1 = board.create(
      'polygon',
      [
        [18.4, 118.5],
        [25.2, 175],
        [26.8, 175],
        [20.4, 125],
        [18.8, 120],
      ],
      {
        fillColor: "white",
        fillOpacity: 0.5,
        borders: { strokeWidth: 1.25, strokeColor: "black" },
        vertices: { visible: false },
        highlightFillColor: 'white',
        highlightStrokeColor: "black",
        highlight: false,
        highlightFillOpacity: 0.5,
        tabindex: null,
      }
    );
    const orange2 = board.create(
      'polygon',
      [
        [29.2, 175],
        [30, 175],
        [30, 130],
        [29.2, 133],
      ],
      {
        fillColor: 'white',
        fillOpacity: 0.5,
        borders: { strokeWidth: 1.25, strokeColor: "black" },
        vertices: { visible: false },
        highlightFillColor: 'white',
        highlightStrokeColor: "black",
        highlight: false,
        highlightFillOpacity: 0.5,
        tabindex: null,
      }
    );
    const green = board.create(
      'polygon',
      [
        [15, 76],
        [15, 101.5],
        [18.4, 118.5],
        [18.8, 120],
        [20.4, 125],
        [26.8, 175],
        [29.2, 175],
        [29.2, 133],
        [30, 130],
        [30, 115],
        [25.8, 76],
      ],
      {
        fillColor: 'white',
        fillOpacity: 0.5,
        borders: { strokeWidth: 1.25, strokeColor: "black" },
        vertices: { visible: false },
        highlightFillColor: 'white',
        highlightStrokeColor: "black",
        highlight: false,
        highlightFillOpacity: 0.5,
        tabindex: null,
      }
    );

    const refPoint = board.create('point', [point.x, point.y], {
      name: 'Point',
      size: 3,
      fixed: true,
    });

    const text_x_axis = board.create(
      'text',
      [35, 105, 'total fuel - 1,000 lbs'],
      { fontSize: 12, anchorY: 'middle' }
    );
    text_x_axis.setPosition(JXG.COORDS_BY_USER, [35, 72]);

    const text_y_axis = board.create(
      'text',
      [-3, 105, 'basic weight + cargo weight - 1,000 lbs'],
      { display: 'internal', rotate: 90, anchorX: 'middle', anchorY: 'bottom' }
    );
    text_y_axis.setPosition(JXG.COORDS_BY_USER, [-1, 105]);

    return () => board.removeObject(xAxis);
  }, [basicData, objectsData]);

  return (
    <div className='bigwrapper'>
      <div className='wrapper'>
        <div className='content'>
          <h2 className='title'>Center Of Gravity Limitation By %MAC</h2>
          <div id='jxgbox3' style={{ width: '400px', height: '400px' }} />
          <p className='subtitle'>CG Location - % MAC</p>
        </div>
        <div className='titleWrapper'>
          <p className='tiltedText'>AIRPLANE GROSS WEIGHT - 1,000 POUNDS</p>
        </div>
      </div>
    </div>
  );
}

export default MAC;

const outboard = 8758; // slider1 = outboard   max_pound: 8758
const inboard = 8065; // slider2 = inboard    max_pound: 8065
const auxiliary = 6127; // slider3 = auxiliary  max_pound: 6127
const external = 9377; // slider4 = external   max_pound: 9377
const fuselage = 0; // slider5 = fuselage   max_pound:

function GetGrossWeight(objectsData, basicData) {
  let weight = (basicData.cockpitCrew + basicData.inspectorsCrew) * 170;
  weight += basicData.emptyWeight;

  weight += basicData.fuselage + basicData.inboard + basicData.outboard;
  objectsData.itemList.forEach((el) => {
    weight += el.weight;
  });

  return weight;
}

function get_mac(basicData, objectsData) {
  let my_aircraft_index = basicData.index;
  let aircraftWeight = basicData.emptyWeight;

  console.log(`empty weight: ${basicData.emptyWeight}`);

  console.log(`starting index: ${my_aircraft_index}`);

  objectsData.itemList.forEach((el) => {
    console.log(`weight: ${el.weight}`);
    my_aircraft_index += ((el.fs - 533.46) * el.weight) / 50000;
    aircraftWeight += el.weight;
  });

  console.log(`cockpit total index: ${basicData.cockpitCrew * -1.2}`);

  console.log(`cockpit total index: ${basicData.inspectorsCrew * -0.8}`);

  const totalFuelWeight =
    basicData.fuselage + basicData.outboard + basicData.inboard - 1000;

  my_aircraft_index +=
    basicData.cockpitCrew * -1.2 +
    basicData.inspectorsCrew * -0.8 +
    1 +
    totalFuelWeight / 3000;

  console.log(`index after crew and objects: ${my_aircraft_index}`);

  aircraftWeight +=
    totalFuelWeight +
    170 * (basicData.inspectorsCrew + basicData.cockpitCrew) +
    250;

  console.log(basicData.fuselage + basicData.outboard + basicData.inboard);

  console.log(`total weight: ${aircraftWeight}`);

  const cg = ((my_aircraft_index - 100) * 50000) / aircraftWeight + 533.46;

  console.log(`cg: ${cg}`);

  const mac = ((cg - 487.4) * 100) / 164.5;

  console.log(`mac: ${mac}`);
  // console.log(`The MAC/GetMAC function returns enter GetMAC: ${mac}`)
  return mac;
}
