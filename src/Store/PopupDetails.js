import {createSlice} from "@reduxjs/toolkit";

const popupDetailsSlice = createSlice({
    name: 'popupDetails',
    initialState: {
        currentYear: null,
        currentAuthor: ''
    },
    reducers: {
        setCurrentYear(state, action) {
            console.log(112233)
            if(state.currentYear !== action.payload)
            state.currentYear = action.payload;
        }
    }
});

export const popupDetailsActions = popupDetailsSlice.actions;

export default popupDetailsSlice.reducer;