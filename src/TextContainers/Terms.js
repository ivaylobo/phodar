import React from "react";
import translate from "../i18n/translate"
import {NavLink} from "react-router-dom";

const terms = (props) => {
	return (
		<div className="internal terms">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1><strong>{translate('terms')}</strong></h1>
						<h2>{translate('terms_1')}</h2>
						<p>{translate('terms_2')}</p>
						<p>{translate('terms_3', {link: <NavLink to="/">phodar.net</NavLink>})}</p>
						<p>{translate('terms_4', {topic: <strong>{translate('theme')}</strong>})}</p>
						<p>{translate('terms_5', {link: <NavLink to="/">phodar.net</NavLink>})}</p>
						<h2>{translate('terms_6')}</h2>
						<p>{translate('terms_7')}</p>
						<p>{translate('terms_8', {link: <NavLink to="/">phodar.net</NavLink>})}</p>
						<h2>{translate('terms_9')}</h2>
						<p>{translate('terms_10')}</p>
						<p>{translate('terms_11', {link: <NavLink to="/">phodar.net</NavLink>})}</p>
						<h2>{translate('terms_12')}</h2>
						<p>{translate('terms_13', {link: <NavLink to="/">phodar.net</NavLink>})}</p>
						<p>{translate('terms_14')}</p>
						<p>{translate('terms_15')}</p>
						<ul>
							<li><p>{translate('terms_16')}</p></li>
							<li><p>{translate('terms_17')}</p></li>
							<li><p>{translate('terms_18')}</p></li>
							<li><p>{translate('terms_19')}</p></li>
						</ul>
						<p>{translate('terms_20')}</p>
						<p>{translate('terms_21')}</p>
						<p>{translate('terms_22')}</p>
						<h2>{translate('terms_23')}</h2>
						<ol>
							<li><p>{translate('terms_24', {question: <strong>{translate('terms_24q')}</strong>})}</p></li>
							<li><p>{translate('terms_25', {question: <strong>{translate('terms_25q')}</strong>})}</p></li>
							<li><p>{translate('terms_26', {question: <strong>{translate('terms_26q')}</strong>})}</p></li>
							<li><p>{translate('terms_27', {question: <strong>{translate('terms_27q')}</strong>})}</p></li>
						</ol>
						<h2>{translate('terms_28')}</h2>
						<p>{translate('terms_29')}</p>
						<h2>{translate('terms_30')}</h2>
						<p>{translate('terms_31')}</p>
						<h2>{translate('terms_32')}</h2>
						<p>{translate('terms_33')}</p>
						<ul>
							<li><p>{translate('terms_34')}</p></li>
							<li><p>{translate('terms_35')}</p></li>
							<li><p>{translate('terms_36')}</p></li>
							<li><p>{translate('terms_37')}</p></li>
							<li><p>{translate('terms_38')}</p></li>
							<li><p>{translate('terms_39')}</p></li>
							<li><p>{translate('terms_40')}</p></li>
							<li><p>{translate('terms_41')}</p></li>
						</ul>
						<p>{translate('terms_42')}</p>
						<h2>{translate('terms_43')}</h2>
						<p>{translate('terms_44')}</p>
						<p>{translate('terms_45')}</p>
						<p>{translate('terms_46')}</p>
						<p>{translate('terms_47')}</p>
						<p>{translate('terms_48')}</p>
						<p>{translate('terms_49')}</p>
						<p>{translate('terms_50')}</p>
						<p>{translate('terms_51')}</p>
						{/*<ul>*/}
						{/*	<li><p>{translate('terms_9')}</p></li>*/}
						{/*	<li><p>{translate('terms_10')}</p></li>*/}
						{/*	<li><p>{translate('terms_11')}</p></li>*/}
						{/*	<li><p>{translate('terms_12')}</p></li>*/}
						{/*	<li><p>{translate('terms_13')}</p></li>*/}
						{/*</ul>*/}
						{/*<h2>{translate('terms_14')}</h2>*/}
						{/*<ol>*/}
						{/*	<li><strong>{translate('terms_15')}</strong> {translate('terms_16')}</li>*/}
						{/*	<li><strong>{translate('terms_17')}</strong> {translate('terms_18')}</li>*/}
						{/*	<li><strong>{translate('terms_19')}</strong> {translate('terms_20')}</li>*/}
						{/*	<li><strong>{translate('terms_21')}</strong>{translate('terms_22')}</li>*/}
						{/*</ol>*/}
						{/*<h2>{translate('terms_23')}</h2>*/}
						{/*<p>{translate('terms_24')}</p>*/}
						{/*<h2>{translate('terms_25')}</h2>*/}
						{/*<p>{translate('terms_26')}</p>*/}
						{/*<ul className="dashed">*/}
						{/*	<li>{translate('terms_27')}</li>*/}
						{/*	<li>{translate('terms_28')}</li>*/}
						{/*	<li>{translate('terms_30')}</li>*/}
						{/*	<li>{translate('terms_31')}</li>*/}
						{/*	<li>{translate('terms_32')}</li>*/}
						{/*	<li>{translate('terms_33')}</li>*/}
						{/*	<li>{translate('terms_34')}</li>*/}
						{/*	<li>{translate('terms_35')}</li>*/}
						{/*</ul>*/}
						{/*<p>{translate('terms_36')}</p>*/}
						{/*<h2>{translate('terms_38')}</h2>*/}
						{/*<p>{translate('terms_39')}</p>*/}
						{/*<h2>{translate('terms_40')}</h2>*/}
						{/*<p>{translate('terms_37')}</p>*/}
						{/*<p>{translate('terms_41')}</p>*/}

					</div>
				</div>
			</div>
		</div>
	)
}

export default terms