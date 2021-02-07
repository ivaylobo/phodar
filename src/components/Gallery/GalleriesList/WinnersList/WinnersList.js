import React from "react";
import translate from "../../../../i18n/translate";
import {NavLink} from "react-router-dom";


const winnersList = (props) => {
	const winnersHTML = props.winners.map((author, index) => {
		const award = translate(author.award);
		const counter = (props.allWinnersLength - index) % 3;
		return (
			author.urls.length > 1 ?
				(<div className="authorShort" key={`${author.name.replace(/ /g, '_')}_${props.edition}`}>
						<div className="container">
							<div className="row">
								<div className="col-md-12 authorContent" id={author.name.replace(/ /g, '_')}>
									<p className="active authorAward">{award}</p>
									<ul className={`container${counter}`}>
										{author.urlsThumb.map((picture, ind) => {

											const authorInfo = ind === 0 && counter !== 0 ? <div className="authorInfo">
												<NavLink to={{
													pathname: `/galleries/${props.edition}`,
													search: `?author=${author.name.replace(/ /g, '_')}`
												}}>
													<p className="authorName">{author.name}</p>
												</NavLink>
												{ind === 0 ? <p className='authorCountry'>{translate(author.country)}</p> : null}
											</div> : null;
											const smallImage = ind !== counter + 1 && (counter !== 2 || ind !== 0) ? (
												<NavLink to={{
													pathname: `/galleries/${props.edition}`,
													search: `?author=${author.name.replace(/ /g, '_')}`
												}}>
													<img src={`/${picture}`} width="230px" alt=""/>
												</NavLink>) : null;
											const authorName = ind === 0 && counter === 0 ?
												<NavLink to={{
													pathname: `/galleries/${props.edition}`,
													search: `?author=${author.name.replace(/ /g, '_')}`
												}}>
													<p className="authorName">{author.name}</p>
												</NavLink> : null;
											const bigImage = ind === counter + 1 || (counter === 2 && ind === 0) ? (
												<NavLink to={{
													pathname: `/galleries/${props.edition}`,
													search: `?author=${author.name.replace(/ /g, '_')}`
												}}>
													<img className='big-img' src={`/${author.urlsMedium[ind]}`} width="480px" alt=""/>
												</NavLink>) : null

											return (ind < 3 ?
												(<li key={ind}>
													{authorInfo}
													{smallImage}
													{authorName}
													{bigImage}
												</li>) : null)

										})}
									</ul>
								</div>
							</div>
						</div>
					</div>
				) : (
					author.urls.length ?
						(<div className="authorShortSingle" key={`${author.name}_${props.edition}`}>
							<div className="container">
								<div className="row">
									<div className="col-md-6 singleImg" id={author.name.replace(/ /g, '_')}>
										<p className="active authorAward">{translate(author.award)}</p>
										<div className="img-container">
											<NavLink to={{
												pathname: `/${props.edition}`,
												search: `?author=${author.name.replace(/ /g, '_')}`
											}}>
												<img src={`/${author.urlsMedium[0]}`} width="480px" alt=""/>
											</NavLink>
											<NavLink to={author.name.replace(/ /g, '_')}>
												<p className="authorName">{author.name}</p>
												<p className="authorCountry">{translate(author.country)}</p>
											</NavLink>
										</div>
									</div>
								</div>
							</div>
						</div>) : null
				)
		)
	});

	return winnersHTML;
}

export default winnersList
