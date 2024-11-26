import {createSlice} from "@reduxjs/toolkit";
import {LOCALES} from "../i18n";


const languageSlice = createSlice({
    name: 'language',
    initialState: {language: LOCALES.ENGLISH},
    reducers: {
        switchLang(state) {
            if (state.language === LOCALES.ENGLISH) {
                state.language = LOCALES.BULGARIAN
                return
            }

            state.language = LOCALES.ENGLISH
        }
    }
});

export const langActions = languageSlice.actions;

export default languageSlice.reducer;