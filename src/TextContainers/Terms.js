import React from "react";
import translate from "../i18n/translate"

const terms = (props) => {
	return (
		<div className="internal terms">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1><strong>{translate('terms')}</strong></h1>
						<h2>{translate('terms_1')}</h2>
						<p>{translate('terms_2')}</p>
						<p>{translate('terms_3')}</p>
						<h2>{translate('terms_4')}</h2>
						<p>{translate('terms_5')}</p>
						<h2>{translate('terms_6')}</h2>
						<p>{translate('terms_7')}</p>
						<p>{translate('terms_8')}</p>
						<ul>
							<li><p>{translate('terms_9')}</p></li>
							<li><p>{translate('terms_10')}</p></li>
							<li><p>{translate('terms_11')}</p></li>
							<li><p>{translate('terms_12')}</p></li>
							<li><p>{translate('terms_13')}</p></li>
						</ul>
						<h2>{translate('terms_14')}</h2>
						<ol>
							<li><strong>{translate('terms_15')}</strong> {translate('terms_16')}</li>
							<li><strong>{translate('terms_17')}</strong> {translate('terms_18')}</li>
							<li><strong>{translate('terms_19')}</strong> {translate('terms_20')}</li>
							<li><strong>{translate('terms_21')}</strong>{translate('terms_22')}</li>
						</ol>
						<h2>{translate('terms_23')}</h2>
						<p>{translate('terms_24')}</p>
						<h2>{translate('terms_25')}</h2>
						<p>{translate('terms_26')}</p>
						<ul className="dashed">
							<li>{translate('terms_27')}</li>
							<li>{translate('terms_28')}</li>
							<li>{translate('terms_30')}</li>
							<li>{translate('terms_31')}</li>
							<li>{translate('terms_32')}</li>
							<li>{translate('terms_33')}</li>
							<li>{translate('terms_34')}</li>
							<li>{translate('terms_35')}</li>
						</ul>
						<p>{translate('terms_36')}</p>
						<h2>{translate('terms_38')}</h2>
						<p>{translate('terms_39')}</p>
						<h2>{translate('terms_40')}</h2>
						<p>{translate('terms_37')}</p>
						<p>{translate('terms_41')}</p>

					</div>
				</div>
			</div>
		</div>
	)
}

export default terms