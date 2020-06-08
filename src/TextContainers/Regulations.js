import React from "react";
import translate from "../i18n/translate";

const regulations = (props) => {
	return (
		<div className="internal regulations">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1>
							{translate('Regulations_1')}
							<strong>{translate('Regulations_2')}</strong>
						</h1>
						<h2>{translate('Regulations_3')}</h2>
						<p>{translate('Regulations_4', {topic: <strong>„{translate('topic')}”</strong>})}</p>
						<h2>{translate('Regulations_2')}</h2>
						<p>{translate('Regulations_5')}</p>
						<p>{translate('Regulations_6', {mail: <small>phodar.new@gmail.com</small>})}</p>
						<p className="only"><strong>{translate('Regulations_7')}</strong></p>
						<p>{translate('Regulations_8')}</p>
						<p>{translate('Regulations_9')}</p>
						<h2>{translate('Regulations_10')}</h2>
						<h3>{translate('Regulations_11')}</h3>
						<p>{translate('Regulations_12')}</p>
						<h3>{translate('Regulations_13')}</h3>
						<p>{translate('Regulations_14')}</p>
						<h3>{translate('Regulations_15')}</h3>
						<p>{translate('Regulations_16')}</p>
						<p>{translate('Regulations_17')}</p>
						<p>{translate('Regulations_18')}</p>
						<h2>{translate('awards')}</h2>
						<ul>
							<li>{translate('Grand Prix')} <span>750 {translate('Euro')}</span></li>
							<li>{translate('Award for Humanistic Photography')} <span>500 {translate('Euro')}</span></li>
							<li>{translate('Award in Section I')} <span>400 {translate('Euro')}</span></li>
							<li>{translate('Award in Section II')} <span>300 {translate('Euro')}</span></li>
							<li>{translate('Award in Section III')} <span>200 {translate('Euro')}</span></li>
						</ul>
						<p>{translate('Regulations_19')}</p>
						<h2>{translate('Regulations_20')}</h2>
						<p>{translate('Regulations_21')}</p>
						<p>{translate('Regulations_22')}</p>
						<p>{translate('Regulations_23')}</p>
					</div>
				</div>
			</div>
		</div>

	)
}

export default regulations