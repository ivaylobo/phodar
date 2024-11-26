import React from "react";
import translate from "../../i18n/translate";
import classes from "../../styles/InternalStyles.module.css"

const cookies = () => {
	return (
		<div className={`${classes.internal}`}>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1><strong>{translate({id:'cookies'})}</strong></h1>
						<p>{translate({id:'cookies_1'})}</p>
						<p>{translate({id:'cookies_2'})}</p>
						<p>{translate({id:'cookies_3'})}</p>
						<p>{translate({id:'cookies_4'})}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default cookies