import React, {Fragment} from "react";
import translate from "../i18n/translate";
import {NavLink} from "react-router-dom";
import BackgroundSlider from "react-background-slider";
import img1 from '../assets/images/head_1.jpg'
import img2 from '../assets/images/head_2.jpg'
import img3 from '../assets/images/head_3.jpg'
import img4 from '../assets/images/head_4.jpg'

const home = (props) => {
	return (
		<Fragment>
			<div className="summary">
				<BackgroundSlider
					images={[img1, img2, img3, img4]}
					duration={5} transition={1}/>
				<div className="container">
					<div className="row">
						<div className="col-md-12 main">
							<div className="top">
								<h4>11</h4>
								<div className="next"><span>{translate('edition')}</span></div>
							</div>
							<h3>{translate('international photo competition')}</h3>
							<div className="bottom">
								<h5>{translate('topic:')}</h5>

								<h1>{translate('theme')}</h1>
							</div>
							<div className="links">
								{/*<NavLink className="buttonLink" to="/events">{translate('Events')}</NavLink>*/}
								<a href="/gallery/2021" className="buttonLink" aria-disabled={true}>{translate('winners')}</a>
								{/*<small className="deadline">{translate('deadline')}</small>*/}
							</div>
						</div>
					</div>
				</div>
				{/*<div className="opening">*/}
				{/*	<div className="container">*/}
				{/*		<div className="row">*/}
				{/*			<div className="col-md-12">*/}
				{/*				<p>{translate('CALL FOR entries')}</p>*/}
				{/*			</div>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</div>*/}
			</div>
			<div className="mainInfo">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h2><span>{translate('HOME_MAIN_TEXT')}</span></h2>
						</div>
					</div>
					<br/>
					<br/>
					<div className="row">
						<div className="col-md-5">
							<h3>{translate('HOME_MAIN_TEXT_1', {cash: <strong>$2.000</strong>})} <br/>
								{translate('Award for Humanistic Photography')} <strong>$500</strong></h3>
							<br/>
							<br/>
							<h4>{translate('HOME_MAIN_TEXT_2_4')}</h4>
							<br/>
							<br/>
							<h4>{translate('HOME_MAIN_TEXT_2_3')}</h4>
							<br/>
							<br/>
							<h4>{translate('HOME_MAIN_TEXT_3', {dollar: <strong>$</strong>})}</h4>
						</div>
						<div className="col-md-7 right-text">
							<p>{translate('translation14')}</p>
							<p>{translate('translation15')}</p>
							<p>{translate('translation16')}</p>
							<p>{translate('translation17')}{translate('translation18')}</p>
						</div>
					</div>
					{/*<div className="row">*/}
					{/*	<div className="col-md-5">*/}
					{/*		<br/>*/}
					{/*		/!*<h4>{translate('HOME_MAIN_TEXT_4', {theme: <strong>„{translate('theme')}”</strong>})}</h4>*!/*/}
					{/*		/!*<br/>*!/*/}
					{/*		/!*<h4>{translate('HOME_MAIN_TEXT_5')}</h4>*!/*/}
					{/*		/!*<br/>*!/*/}
					{/*		/!*<h4>{translate('HOME_MAIN_TEXT_6')}</h4>*!/*/}
					{/*	</div>*/}
					{/*	<div className="col-md-7 right-text">*/}
					{/*		<p>{translate('translation15')}</p>*/}
					{/*		<p>{translate('translation16')}</p>*/}
					{/*		<p>{translate('translation17')}{translate('translation18')}</p>*/}
					{/*	</div>*/}
					{/*</div>*/}
					<div className="row">
						<div className="col-md-12">
							<NavLink onClick={props.hamburgerMobile} className="buttonLink" to='/gallery/2019'>{translate('editions')}</NavLink>
						</div>
					</div>
				</div>
			</div>
			<div className="logo-sofia">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="logo-container">
								<h3>{translate('sofia_logo')}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="exhibitions">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h2>{translate('showcase your photography in our festival exhibitions')}</h2>
							<div className="all-wrapper">
								<div className="row-wrapper first">
									<div className="image-wrapper"></div>
									<div className="image-wrapper"></div>
								</div>
								<div className="row-wrapper second">
									<div className="image-wrapper"></div>
									<div className="image-wrapper"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="photo-book">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="photo-book-wrapper"></div>
							<div className="photo-book-text">
								<h3>{translate("BE PART OF OUR EDITION PHOTO BOOK")}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="past-editions">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h2>{translate('editions')}</h2>
							<h3>{translate('SEE THE FULL GALLERY OF WINNERS & PARTICIPANTS IN PAST EDITIONS')}</h3>
							<ul className="desktop first">
								<li>
									<NavLink to='/gallery/2021/' exact><span>2021</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/2015/' exact><span>2015</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/2011' exact><span>2011</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/2007' exact><span>2007</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/2003' exact><span>2003</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/1999' exact><span>1999</span></NavLink>
								</li>
							</ul>
							<ul className="desktop second">
								<li>
									<NavLink to='/gallery/2019/' exact><span>2019</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/2013' exact><span>2013</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/2009' exact><span>2009</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/2005' exact><span>2005</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/2001' exact><span>2001</span></NavLink>
								</li>
							</ul>
							<ul className="mobile">
								<li>
									<NavLink to='/gallery/2021/' exact><span>2021</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/2019/' exact><span>2019</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/2015/' exact><span>2015</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/2013' exact><span>2013</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/2011' exact><span>2011</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/2009' exact><span>2009</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/2007' exact><span>2007</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/2005' exact><span>2005</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/2003' exact><span>2003</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/2001' exact><span>2001</span></NavLink>
								</li>
								<li>
									<NavLink to='/gallery/1999' exact><span>1999</span></NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Fragment>

	)
}

export default home