import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    objectList: [],
};

const AddObject2Array = createSlice({
    name: "fixedCargo",
    initialState,
    reducers: {
        addItemToArray: (state, action) => {
            state.objectList.push(action.payload);
            // switch (action.type) {
            //     case PREPEND_TODO:
            //         return { // returning a copy of orignal state 
            //             ...state, //spreading the original state
            //             objectList: [action.payload, ...state.objectList] // new todos array
            //         }
            //     case APPEND_TODO:
            //         return { // returning a copy of orignal state 
            //             ...state, //copying the original state
            //             objectList: [...state.objectList, action.payload] //new todos array 
            //         }
            //     default: return state;
            //}
        },
    },
});

export default AddObject2Array.reducer;

export const { addItemToArray } = AddObject2Array.actions;