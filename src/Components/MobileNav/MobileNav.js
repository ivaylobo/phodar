import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from './MobileNav.module.css'
import {mobileDropdownActions} from "../../Store/MobileNavStore";

const MobileNav = () => {
    const dispatch = useDispatch()
    const isActive = useSelector((state) => state.mobileDropdown.opened);

    const handleNavClick = (stateStr) => {
        dispatch(mobileDropdownActions.switchState(stateStr))
    }


    return (
        <div className={classes.navTrigger} >
            <div onClick={handleNavClick.bind(false, false)} className={`${classes.closeNav} ${isActive ? classes.active : ''}`  } >
                <div></div>
                <div></div>
            </div>
            <div onClick={handleNavClick.bind(false, true)} className={`${classes.openNav} ${!isActive ? classes.active : ''}` } >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default MobileNav;