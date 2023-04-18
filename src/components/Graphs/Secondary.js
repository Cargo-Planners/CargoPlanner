import { useEffect } from 'react';
import JXG, { Point } from 'jsxgraph';
import "./Graphs.css";

import { useSelector } from "react-redux"
import { State } from "../../redux/store"
import { green } from '@mui/material/colors';

function Secondary() {

    const objectsData = useSelector((State) => State.objectsData);
    const basicData = useSelector((State) => State.basicData);

    useEffect(() => {
        const title = "weight Limitation Chart (Secondary)"
        const board = JXG.JSXGraph.initBoard('jxgbox2', {
            boundingbox: [-5, 162, 36, 87], // [x_min, y_max, x_max, y_min]
            grid: {
                gridX: 5,
                gridY: 5
            },
            axis: true,
            showNavigation: false,
        });

        const xAxis = board.create('axis', [[0, 90], [36, 90]], { ticks: { visible: true } });

        const green = board.create('polygon', [[0, 90], [0, 99], [13, 124], [33, 153], [33, 90]], {
            name: 'green',
            fillColor: 'green',
            fillOpacity: 0.5,
            borders: { strokeWidth: 0 },
            vertices: { visible: false },
            highlightFillColor: 'green', 
            highlightFillOpacity: 0.5, 
            tabindex: null

        });
        const blue = board.create('polygon', [[0, 99], [13, 124], [33, 153], [33, 155], [25, 155], [2, 112], [0, 110]], {
            fillColor: 'blue',
            fillOpacity: 0.5,
            borders: { strokeWidth: 0 },
            vertices: { visible: false },
            highlightFillColor: 'blue',
            highlightFillOpacity: 0.5,
            tabindex: null
        });
        const red = board.create('polygon', [[0, 118], [0, 160], [35, 160], [35, 90], [33, 90], [33, 155], [25, 155]], {
            fillColor: 'red',
            fillOpacity: 0.5,
            borders: { strokeWidth: 0 },
            vertices: { visible: false },
            highlightFillColor: 'red',
            highlightFillOpacity: 0.5,
            tabindex: null

        });
        const point = {
            x: graph_x(basicData), 
            y: graph_y(objectsData, basicData)
        }
        // console.log(`point Secondary: (${point.x}, ${point.y})`)
        const refPoint = board.create('point', [point.x, point.y], { name: 'Point', size: 3, fixed: true });

        const erea_a = board.create('text', [20, 100, 'AREA A'], { fontSize: 12, anchorX: 'left', anchorY: 'bottom' });
        erea_a.setPosition(JXG.COORDS_BY_USER, [0, 92]);

        return () => board.removeObject(xAxis);
    }, []);

    return (
        <div className='bigwrapper'>
            <div className="wrapper">
                <div className="content">
                    <h2 className="title">Weight Limitation Chart (Secondary)</h2>
                    <div id="jxgbox2" style={{ width: '250px', height: '480px' }} />
                    <p className="subtitle">Outboard Fuel + Inbord Fuel - 1,000 Lbs</p>
                </div>
                <div className="titleWrapper">
                    <p className="tiltedText">Gross Weight - 1,000 Lbs</p>
                </div>
            </div>
        </div>
    );
}

export default Secondary;

const outboard = 8758 // slider1 = outboard   max_pound: 8758 
const inboard= 8065 // slider2 = inboard    max_pound: 8065 
const auxiliary = 6127 // slider3 = auxiliary  max_pound: 6127
const external = 9377 // slider4 = external   max_pound: 9377 
const fuselage = 0 // slider5 = fuselage   max_pound:


function graph_x(basicData){

    const axis_x = basicData.slider2*8065 < (basicData.slider1*8758-1300)?(basicData.slider2/100)*inboard:(basicData.slider1/100)*outboard-1300
    const axis_y = 20-((basicData.slider1/100)*outboard /1000)
    // console.log(`The graph_x function returns: ${(axis_x/1000)+ axis_y}`)
    return ((axis_x/1000)+ axis_y)
}

function graph_y(objectsData, basicData){

    // חסר ציוד חירום, תצורה
    const axis_x = (90 - (basicData.emptyWeight + (basicData.inspectorsCrew + basicData.cockpitCrew) * 170) /1000)
    // חסר את הדלק שבמטען
    const fule = (basicData.slider1/100 * outboard) + (basicData.slider2/100 * inboard)+(basicData.slider3/100 * auxiliary) + (basicData.slider4/100 * external)
    let weight_cargo = 0
    objectsData.objectListItems.forEach(element => {
        weight_cargo += element.weight
    });
    const axis_y = (fule + weight_cargo) / 1000 
    
    // console.log(`The graph_y function returns: ${(axis_x + axis_y + 70)}`)
    return (axis_x + axis_y + 70)
}