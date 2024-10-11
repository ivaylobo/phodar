import React from 'react';
import { NavLink } from 'react-router-dom';
import {useState} from "react";
import translate from '../../i18n/translate';
import classes from './CookiesPopup.module.css';


const MainNavigation = () => {

    const [cookieState, setCookieState] = useState({
        agree: localStorage.getItem('cookies-accepted') === 'true'
    });

    const acceptCookies = () => {
        localStorage.setItem('cookies-accepted', 'true');
        setCookieState({
            agree: true
        })
    }
    return (
        !cookieState.agree ? <div className={classes.cookies}>
            <p>{translate({id: 'Cookies_popup', value: {cookies: <NavLink to='/cookies'>{translate({id: 'cookies'})}</NavLink>}}, )}</p>
            <button className={classes.acceptCookies} onClick={acceptCookies}>OK</button>
        </div> : null
    );
}

export default MainNavigation;
