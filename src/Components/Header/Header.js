import React from 'react';
import MainNavigation from "../MainNavigation/MainNavigation";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import logo from '../../assets/images/logo.svg';
import LanguageSwitch from "../LangaugeSwitch/LangaugeSwitch";
import MobileNav from "../MobileNav/MobileNav";
import {useState, useEffect} from "react";


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset !== 0 && !isScrolled) {
                setIsScrolled(true);
            } else if (window.pageYOffset === 0 && isScrolled) {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Initial check
        handleScroll();

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolled]);




    return (
        <header className={`${classes.header} ${isScrolled ? classes.scrolled : ''}`}>
            <div className={classes.headerRow}>
                <NavLink className={classes.logo} to='/'><img alt="home" src={logo}/><span>Phodar biennial</span></NavLink>
                <MobileNav />
                <MainNavigation/>
                <LanguageSwitch />
            </div>
        </header>
    );
}

export default Header;