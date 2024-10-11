import { configureStore } from "@reduxjs/toolkit";
import mobileDropdownReducer from "./MobileNavStore";
import switchLangReducer from "./LangaugeSwitchStore"
import popupDetailsReducer from "./PopupDetails";

const store = configureStore({
    reducer: {
        mobileDropdown: mobileDropdownReducer,
        switchLang: switchLangReducer,
        popupDetails: popupDetailsReducer
    }
});

export default store;