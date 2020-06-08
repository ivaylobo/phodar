import React from "react";
import translate from "../../../../i18n/translate";
import {NavLink} from "react-router-dom";

const participantsList = (props) => {
	const participantsHTML = props.participants.map(author => {
		return (author.urls.length ? (
			<div className="col-md-6 singleImg" key={`${author.name}_${props.edition}`}>
				<div className='img-container'>
					<NavLink to={{
						pathname: `/${props.edition}`,
						search: `?author=${author.name.replace(/ /g, '_')}`
					}}>
						<img src={author.urlsMedium[0]} alt=""/>
					</NavLink>
				</div>
				<NavLink to={{
					pathname: `/${props.edition}`,
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