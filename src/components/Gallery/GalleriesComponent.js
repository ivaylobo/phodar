import React, {Component} from "react";
import galleryObj from "./Galleries";
import translate from "../../i18n/translate";
import {NavLink} from "react-router-dom";
import {Route} from "react-router";
import EditionGallery from './EditionGallery/EditionGallery';
import GalleriesList from "./GalleriesList/GalleriesList";

class GalleriesComponent extends Component {

	state = {
		currentYear: galleryObj[galleryObj.length - 1].year
	}

	setCurrentYear = (year) => {
		this.setState({
			currentYear: year
		})
	}

	render() {
		const lastEdition = galleryObj[galleryObj.length - 1].year
		const editions = galleryObj.map(edition => {
			const year = edition.year;
			const yearPath = year !== lastEdition ? year : '';
			return (
				<li key={year} onClick={() => this.setCurrentYear(year)}>
					<NavLink exact to={'/' + yearPath}>
						<h4>{year}</h4>
					</NavLink>
				</li>)
		})
		return (

			<div className='gallery'>
				<div className="galleryContainer" id="gallery">
					<div className="container">
						<h2>{translate('Editions')}</h2>
						<div className="row">
							<div className="col-md-12">
								<ul className="years">
									{editions.reverse()}
								</ul>
							</div>
							<Route path={'/:edition?'} render={(props) => <EditionGallery {...props} lastEdition={lastEdition}/>}/>
						</div>
					</div>
				</div>
				<Route path={'/:edition?'} render={(props) => <GalleriesList {...props} lastEdition={lastEdition}/>}/>
			</div>

		)

	}
}

export default GalleriesComponent