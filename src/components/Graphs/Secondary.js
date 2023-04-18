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

        const refPoint = board.create('point', [15, 102], { name: 'Point', size: 3, fixed: true });

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