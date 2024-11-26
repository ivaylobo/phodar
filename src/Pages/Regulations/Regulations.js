import React from 'react';
import translate from "../../i18n/translate";
import classes from "../../styles/InternalStyles.module.css"
import {NavLink} from "react-router-dom";

const Regulations = () => {
    return (
        <div className={`${classes.internal} ${classes.terms}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>
                            <strong>{translate({id: 'Regulations_2'})}</strong>
                        </h1>
                        <h2>{translate({id: 'terms_1'})}</h2>
                        <p>{translate({id: 'terms_2'})}</p>
                        <p>{translate({id: 'terms_3', value: {link: <NavLink className="active" to="/">phodar.net</NavLink>}})}</p>
                        <p>{translate({id: 'terms_4'})}</p>
                        <p>{translate({ id: 'terms_5', value: { link: <a className="active" href="https://entry.phodar.net" target="_blank" rel="noopener noreferrer">entry.phodar.net</a> } })}</p>
                        <h2>{translate({id: 'terms_6'})}</h2>
                        <p>{translate({id: 'terms_7'})}</p>
                        <h2>{translate({id: 'terms_9'})}</h2>
                        <p>{translate({id: 'terms_10'})}</p>
                        <p>{translate({id: 'terms_11', value: {link: <NavLink className="active" to="/">phodar.net</NavLink>}})}</p>
                        <p>{translate({id: 'terms_11_1'})}</p>
                        <h2>{translate({id: 'terms_12'})}</h2>
                        <p>{translate({id: 'terms_13', value: {link: <a className="active" href="https://entry.phodar.net" target="_blank" rel="noopener noreferrer">entry.phodar.net</a>}})}</p>
                        <p>{translate({id: 'terms_14'})}</p>
                        <p>{translate({id: 'terms_15'})}</p>
                        <ul>
                            <li>
                                <p><strong>{translate({id: 'terms_16'})}</strong></p>
                            </li>
                            <li>
                                <p><strong>{translate({id: 'terms_17'})}</strong></p>
                            </li>
                            <li>
                                <p><strong>{translate({id: 'terms_19'})}</strong></p>
                            </li>
                            <li>
                                <p><strong>{translate({id: 'terms_19_1'})}</strong></p>
                            </li>
                        </ul>
                        <p>{translate({id: 'terms_20'})}</p>
                        <p>{translate({id: 'terms_21'})}</p>
                        <p>{translate({id: 'terms_22'})}</p>
                        <h2>{translate({id: 'terms_23'})}</h2>
                        <ol>
                            <li><strong>{translate({id: 'terms_24q'})}</strong> {translate({id: 'terms_24'})}</li>
                            <li><strong>{translate({id: 'terms_25q'})}</strong> {translate({id: 'terms_25'})}</li>
                            <li><strong>{translate({id: 'terms_26q'})}</strong> {translate({id: 'terms_26'})}</li>
                            <li><strong>{translate({id: 'terms_27q'})}</strong> {translate({id: 'terms_27'})}</li>
                        </ol>
                        <h2>{translate({id: 'terms_28'})}</h2>
                        <p>{translate({id: 'terms_29'})}</p>
                        <h2>{translate({id: 'terms_30'})}</h2>
                        <p>{translate({id: 'terms_31'})}</p>
                        <h2>{translate({id: 'terms_32'})}</h2>
                        <p>{translate({id: 'terms_33'})}</p>
                        <ul>
                            <li><p>{translate({id: 'terms_34'})}</p></li>
                            <li><p>{translate({id: 'terms_35'})}</p></li>
                            <li><p>{translate({id: 'terms_36'})}</p></li>
                            <li><p>{translate({id: 'terms_37'})}</p></li>
                            <li><p>{translate({id: 'terms_38'})}</p></li>
                            <li><p>{translate({id: 'terms_39'})}</p></li>
                            <li><p>{translate({id: 'terms_40'})}</p></li>
                            <li><p>{translate({id: 'terms_41'})}</p></li>
                        </ul>
                        <p>{translate({id: 'terms_42'})}</p>
                        <h2>{translate({id: 'terms_43'})}</h2>
                        <p>{translate({id: 'terms_44'})}</p>
                        <p>{translate({id: 'terms_45'})}</p>
                        <h2>{translate({id: 'terms_46'})}</h2>
                        <p>{translate({id: 'terms_47'})}</p>
                        <p>{translate({id: 'terms_48'})}</p>
                        <p>{translate({id: 'terms_49'})}</p>
                        <p>{translate({id: 'terms_50'})}</p>
                        <p>{translate({id: 'terms_51'})}</p>
                        <a className={classes.buttonLink} href="https://entry.phodar.net" target="_blank" rel="noopener noreferrer">{translate({id: 'enter'})}</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Regulations;