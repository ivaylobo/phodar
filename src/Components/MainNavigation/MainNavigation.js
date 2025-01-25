import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import translate from '../../i18n/translate';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {mobileDropdownActions} from "../../Store/MobileNavStore";

const MainNavigation = () => {
    const dispatch = useDispatch();

    const isActive = useSelector((state) => state.mobileDropdown.opened);
    const closeNavOnClick = () => {
        if(isActive) dispatch(mobileDropdownActions.switchState(false));
    }
    return (
        <ul className={`${classes.mainLinks} ${isActive ? classes.active : ''}`}>
            <li>
                <NavLink
                    to='/'
                    end // indicates that the link ends with /
                    className={({ isActive }) => (isActive ? classes.active : '')}
                    onClick={closeNavOnClick}
                >
                    {translate({ id: 'home' })} {/* Adjusted the usage of translate */}
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/editions/'
                    className={({ isActive }) => (isActive ? classes.active : '')}
                    onClick={closeNavOnClick}
                >
                    {translate({id:'editions'})}
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/about'
                    className={({ isActive }) => (isActive ? classes.active : '')}
                    onClick={closeNavOnClick}
                >
                    {translate({id:'Who we are'})}
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/regulations'
                    className={({ isActive }) => (isActive ? classes.active : '')}
                    onClick={closeNavOnClick}
                >
                    {translate({id:'Regulations'})}
                </NavLink>
            </li>
            {/*<li><a className={classes.buttonLink} href="https://entry.phodar.net" target="_blank" rel="noopener noreferrer">{translate({id: 'enter'})}</a></li>*/}
        </ul>
    );
}

export default MainNavigation;
