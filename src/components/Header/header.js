import React from "react";
import logo from '../../assets/images/logo.svg'
import translate from "../../i18n/translate";
import {NavLink} from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

const header = (props) => {
	return (
			<header className={props.additionalClass}>
				<div className="headerRow">
					<NavLink className='logo' to='/'><img src={logo}/><span>Phodar biennial</span></NavLink>
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
					<ul className={props.switchMobileOpened ? 'active main-links' : 'main-links'}>
						<li>
							<NavLink onClick={props.hamburgerMobile} to='/' exact>{translate('series awards')}</NavLink>
						</li>
						<li>
							<NavLink onClick={props.hamburgerMobile} to='/gallery'>{translate('Past editions')}</NavLink>
						</li>
						<li>
							<NavLink onClick={props.hamburgerMobile} to='/aboutUs'>{translate('Who we are')}</NavLink>
						</li>
						<li>
							<NavLink onClick={props.hamburgerMobile} to='/terms'>{translate('terms')}</NavLink>
						</li>
						<li>
							<a className="bordered" href="https://entry.phodar.net/">{translate('enter')}</a>
						</li>
						{/*<li>*/}
						{/*	<NavLink to='/events'>{translate('Events')}</NavLink>*/}
						{/*</li>*/}
						{/*<li>*/}
						{/*	<NavLink to='/news'>{translate('NEWS')}</NavLink>*/}
						{/*</li>*/}
					</ul>
					<Dropdown value={props.lang} onChange={props.switchLang} placeholder="Select an option" options={[props.locales.ENGLISH, props.locales.BULGARIAN]}/>
					{/*<ul className='lang'>*/}
					{/*	<li className={props.lang === props.locales.ENGLISH ? 'active' : null} onClick={() => props.switchLang(props.locales.ENGLISH)}>en</li>*/}
					{/*	<li className={props.lang === props.locales.BULGARIAN ? 'active' : null} onClick={() => props.switchLang(props.locales.BULGARIAN)}>bg</li>*/}
					{/*</ul>*/}
				</div>
			</header>
	)
}

export default header