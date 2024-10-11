import React from "react";
import Dropdown from 'react-dropdown';
import {useDispatch} from "react-redux";
import {langActions} from "../../Store/LangaugeSwitchStore";


const LanguageSwitch = () => {

    const dispatch = useDispatch()
    const dropdownChangeHandler= () => {
        dispatch(langActions.switchLang());
    }

    return <Dropdown value={'en'} onChange={dropdownChangeHandler} placeholder="Select an option" options={['en', 'bg']}/>
}

export default LanguageSwitch