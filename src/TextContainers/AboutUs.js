import React from "react";
import translate from "../i18n/translate"

const aboutUs = (props) => {
	return (
		<div className="internal who-we-are">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1>{translate('about_1')}</h1>
						<p>{translate('about_2')}</p>
						<p>{translate('about_3')}</p>
						<p>{translate('about_4')}</p>
						<p>{translate('about_5')}</p>
						<p>{translate('about_6')}</p>
						<p>{translate('about_7')}</p>
						<h2>{translate('about_8')}</h2>
						<p>{translate('about_9')}</p>
						<p>{translate('about_10')}</p>
						<p>{translate('about_11')}</p>
						<p>{translate('about_12')}</p>
						<p>{translate('about_13')}</p>
						<h2>{translate('about_14')}</h2>
						<p>{translate('about_15')}</p>
						<p>{translate('about_16')}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default aboutUs