import React from "react";
import translate from "../../../i18n/translate";
import Galleries from "../Galleries";
import {NavLink} from "react-router-dom";
import Slider from "../Slider/Slider";


const editionGallery = (props) => {
	const editionYear = typeof props.match.params.edition !== 'undefined' ? props.match.params.edition : Galleries[Galleries.length - 1].year
	const currentEdition = Galleries.find((edition) => +editionYear === edition.year);
	if(typeof currentEdition === 'undefined'){
		props.history.push("/galleries/")
		return null
	}
	const winners = currentEdition.authors.filter(author => author.award && author.award !== '');

	const winnersHTML = winners.map(winner => {
		return (
			<li key={winner.name}>
				<NavLink to={{
					pathname: `/galleries/${editionYear}`,
					search: `?author=${winner.name.replace(/ /g, '_')}`
				}}
						 activeClassName='my-active'>
					<span>{translate(winner.award)}</span> <strong>{winner.name}</strong> <span>{translate(winner.country)}</span>
				</NavLink>
			</li>
		)
	})

	const sliderImages = currentEdition.galleryUrls.map(url => {
		return (
			<NavLink to={{
				pathname: `/galleries/${editionYear}`,
				search: `?author=${url[1].replace(/ /g, '_')}`
			}}
					 key={url[0]}>
				<img src={`/${url[0]}`} alt="product"/>
			</NavLink>
		)
	})


	return (
		<div className="col-md-12 menuBar">
			<p>{translate('winners')}</p>

			<div className="leftPart">
				<h2>{currentEdition.year}</h2>

				<h3>{translate(currentEdition.edition)}</h3>

				<h3><span className="active">{translate('motto:')}</span> <span>{translate(currentEdition.motto)}</span></h3>

			</div>
			<ul className="awards">
				{winnersHTML}
			</ul>
			<div className="carouselHolder">
				<Slider sliderImages={sliderImages} thumbs={false} selectedItem={0}/>
			</div>
		</div>
	)
}

export default editionGallery