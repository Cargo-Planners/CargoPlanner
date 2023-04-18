import React, { useEffect } from 'react';
import JXG from 'jsxgraph';
import "./Graphs.css";


import { useSelector } from "react-redux"
import { State } from "../../redux/store"


export function Primary() {

    const objectsData = useSelector((State) => State.objectsData);
    const basicData = useSelector((State) => State.basicData);
    useEffect(() => {

        const point = {
            x: (sumFule(basicData) / 1000), 
            y: (sumBsicWeightAndCargo(objectsData, basicData) / 1000)
        }
        // console.log(`point Primary: (${point.x}, ${point.y})`)

        const title = "weight limit chart (primary)"
        const board = JXG.JSXGraph.initBoard('jxgbox1', {
            boundingbox: [-5, 137, 71, 68], // [x_min, y_max, x_max, y_min]
            grid: {
                gridX: 5,
                gridY: 5
            },
            axis: true,
            showNavigation: false,
        });

        const xAxis = board.create('axis', [[0, 70], [68, 70]], { ticks: { visible: true } });

        const green = board.create('polygon', [[0, 70], [0, 98], [3, 98], [15, 112], [34, 120], [45, 108], [55, 100], [65, 90], [65, 70]], {
            fillColor: 'green',
            fillOpacity: 0.5,
            borders: { strokeWidth: 0 },
            vertices: { visible: false },
            highlightFillColor: 'green',
            highlightFillOpacity: 0.5,
            tabindex: null
        });
        const blue = board.create('polygon', [[0, 98], [0, 110], [2, 108], [25, 130], [35, 120], [65, 90], [55, 100], [45, 108], [34, 120], [15, 112], [3, 98]], {
            fillColor: 'blue',
            fillOpacity: 0.5,
            borders: { strokeWidth: 0 },
            vertices: { visible: false },
            highlightFillColor: 'blue',
            highlightFillOpacity: 0.5,
            tabindex: null
        });
        const yellow = board.create('polygon', [[25, 130], [44, 130], [65, 110], [65, 90]], {
            fillColor: 'yellow',
            fillOpacity: 0.5,
            borders: { strokeWidth: 0 },
            vertices: { visible: false },
            highlightFillColor: 'yellow',
            highlightFillOpacity: 0.5,
            tabindex: null
        });
        board.create('polygon', [[0, 119], [0, 135], [68, 135], [68, 70], [65, 70], [65, 110], [44, 130], [25, 130], [10, 125], [2, 119]], {
            name: 'area red',
            fillColor: 'red',
            fillOpacity: 0.5,
            borders: { strokeWidth: 0 },
            vertices: { visible: false },
            highlightFillColor: 'red',
            highlightFillOpacity: 0.5,
            tabindex: null
        });

        const refPoint = board.create('point', [point.x, point.y], { fixed: true, name: 'Point', size: 3 });
        return () => board.removeObject(xAxis);
    }, []);

    return (
        <div className='bigwrapper'>
            <div className="wrapper">
                <div className="content">
                    <h2 className="title">Weight Limitation Chart (Primary)</h2>
                    <div id="jxgbox1" style={{ width: '400px', height: '400px' }} />
                    <p className="subtitle">total Fuel - 1,000 Lbs</p>
                </div>
                <div className="titleWrapper">
                    <p className="tiltedText">Basic Weight + cargo Weight - 1,000 Lbs</p>
                </div>
            </div>
        </div>

    );
}

export default Primary;

const outboard = 8758 // slider1 = outboard   max_pound: 8758 
const inboard= 8065 // slider2 = inboard    max_pound: 8065 
const auxiliary = 6127 // slider3 = auxiliary  max_pound: 6127
const external = 9377 // slider4 = external   max_pound: 9377 
const fuselage = 0 // slider5 = fuselage   max_pound:

function sumFule(basicData) {
    const fule = (basicData.slider1/100 * outboard) + (basicData.slider2/100 * inboard) + (basicData.slider3/100 * auxiliary) + (basicData.slider5/100 * fuselage) + (basicData.slider4/100 * external)
    // console.log(`The sumFule function returns: ${fule}`)
    return fule
}

function sumBsicWeightAndCargo(objectsData, basicData) {

    let weight = basicData.emptyWeight
    objectsData.objectListItems.forEach(element => {
        weight += element.weight
    });
    // console.log(`The sumBsicWeightAndCargo function returns: ${weight}`)
    return weight
}