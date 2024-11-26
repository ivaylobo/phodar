import {createSlice} from "@reduxjs/toolkit";
const mobileNavSlice = createSlice({
    name: 'dropdownMobile',
    initialState: {opened: false},
    reducers: {
        switchState(state, action) {
            state.opened = action.payload
        }
    }
});

export const mobileDropdownActions = mobileNavSlice.actions;

export default mobileNavSlice.reducer;