import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

const israelGraph = () => {
    const dispatch = useDispatch();
    const objectListItems = useSelector(
        (state) => state.objectsData.objectListItems
    );
        
}

export default israelGraph;
