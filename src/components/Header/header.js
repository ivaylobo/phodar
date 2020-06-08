import React from "react";
import logo from '../../assets/images/logo.png'
import translate from "../../i18n/translate";
import {NavLink} from 'react-router-dom';

const header = (props) => {
	return (
			<header>
				<div className="headerRow">
					<NavLink to='/'><img className='logo' src={logo}/></NavLink>
					<div id="nav-trigger">
						<div id="close-nav" className={props.switchMobileOpened ? 'active' : ''} onClick={props.hamburgerMobile}>
							<div></div>
							<div></div>
						</div>
						<div id="open-nav"
							 className={props.switchMobileOpened ? '' : 'active'}
							 onClick={props.hamburgerMobile}>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
					<ul className='lang'>
						<li className={props.lang === props.locales.ENGLISH ? 'active' : null} onClick={() => props.switchLang(props.locales.ENGLISH)}>en</li>
						<li className={props.lang === props.locales.BULGARIAN ? 'active' : null} onClick={() => props.switchLang(props.locales.BULGARIAN)}>bg</li>
					</ul>
					<ul className={props.switchMobileOpened ? 'active main-links' : 'main-links'}>
						<li>
							<NavLink to='/aboutUs'>{translate('Who we are')}</NavLink>
						</li>
						<li>
							<NavLink to='/regulations'>{translate('Regulations')}</NavLink>
						</li>
						{/*<li>*/}
						{/*	<NavLink to='/events'>{translate('Events')}</NavLink>*/}
						{/*</li>*/}
						{/*<li>*/}
						{/*	<NavLink to='/news'>{translate('NEWS')}</NavLink>*/}
						{/*</li>*/}
					</ul>
					<div className="clear"></div>
				</div>
			</header>
	)
}

export default header