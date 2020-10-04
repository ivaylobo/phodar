import React from "react";
import translate from "../i18n/translate"

const cookies = (props) => {
	return (
		<div className="internal who-we-are">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1><strong>{translate('cookies')}</strong></h1>
						<p>{translate('cookies_1')}</p>
						<p>{translate('cookies_2')}</p>
						<p>{translate('cookies_3')}</p>
						<p>{translate('cookies_4')}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default cookies