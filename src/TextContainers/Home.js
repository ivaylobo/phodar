import React, {Fragment} from "react";
import translate from "../i18n/translate";
import GalleriesComponent from "../components/Gallery/GalleriesComponent";

const home = (props) => {
	return (
		<Fragment>
			<div className="summary">
				<div className="container">
					<div className="row">
						<div className="col-md-12 main">
							<div className="top">
								<h4>10</h4>

								<div className="next"><span>{translate('th')}</span><br/><span>{translate('edition')}</span></div>
							</div>
							<div className="bottom">
								<h5>{translate('motto:')}</h5>

								<h1>{translate('theme')}</h1>
							</div>
							<div className="links">
								{/*<NavLink className="buttonLink" to="/events">{translate('Events')}</NavLink>*/}
								<a href="#gallery" className="buttonLink"> {translate('GALLERY')}</a>
							</div>
							<div className="edition">
								<h6>competition</h6>
								<h6>2019</h6>
							</div>
						</div>
					</div>
				</div>
				<div className="opening" style={{display: 'none'}}>
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<p>{translate('CALL FOR entries')}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mainInfo">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h2><span>{translate('Phodar biennial')}</span> 2021</h2>
							<h3>{translate('DEAR_FANS')}</h3>
							<p>{translate('HOME_MAIN_TEXT')}</p>
							<br/>
							<p>{translate('HOME_MAIN_TEXT_1')}</p>
							<br/>
							<p>{translate('HOME_MAIN_TEXT_2')}</p>
							<br/>
							<p>{translate('HOME_MAIN_TEXT_3')}</p>
							<br/>
							<p>{translate('HOME_MAIN_TEXT_4', {theme: <strong>„{translate('theme')}”</strong>})}</p>
							<br/>
							<p>{translate('HOME_MAIN_TEXT_5')}</p>
							<br/>
							<p>{translate('HOME_MAIN_TEXT_6')}</p>
							<br/>
							<p>{translate('HOME_MAIN_TEXT_7')}</p>
						</div>
					</div>
				</div>
			</div>
			<GalleriesComponent/>
		</Fragment>

	)
}

export default home