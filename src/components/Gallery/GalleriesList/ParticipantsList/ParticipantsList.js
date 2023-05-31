import React from "react";
import translate from "../../../../i18n/translate";
import {NavLink} from "react-router-dom";

const participantsList = (props) => {
	const participantsHTML = props.participants.map(author => {
		const addHistory = () => {
			localStorage.setItem('hasHistory', 1);
		};
		return (author.urls.length ? (
			<div className="col-md-6 singleImg" key={`${author.name}_${props.edition}`}>
				<div className='img-container' id={author.name.replace(/ /g, '_')}>
					<NavLink onClick={addHistory} to={{ // to know if the user comes from the website on this gallery
						pathname: `/gallery/${props.edition}`,
						search: `?author=${author.name.replace(/ /g, '_')}`
					}}>
						<img src={`/${author.urlsMedium[0]}`} alt=""/>
					</NavLink>
				</div>
				<NavLink onClick={addHistory} to={{
					pathname: `/galley/${props.edition}`,
					search: `?author=${author.name.replace(/ /g, '_')}`
				}}>
					<p className="authorName">{author.name}</p>
				</NavLink>
				<p className='authorCountry'>{translate(author.country)}</p>
			</div>
		) : null)
	})
	return (

		participantsHTML
	)
}

export default participantsList