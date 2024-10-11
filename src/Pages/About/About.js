import React from 'react';
import translate from "../../i18n/translate";
import classes from "../../styles/InternalStyles.module.css"

const About = () => {
    return (
        <div className={classes.internal}>
            <div className={`${classes.container} container`}>
                <div className="row">
                    <div className="col-md-12">
                        <h1>{translate({id: 'about_1'})}</h1>
                        <p>{translate({id:'about_2'})}</p>
                        <p>{translate({id:'about_3'})}</p>
                        <p>{translate({id:'about_4'})}</p>
                        <p>{translate({id:'about_5'})}</p>
                        <p>{translate({id:'about_6'})}</p>
                        <p>{translate({id:'about_7'})}</p>
                        <h2>{translate({id: 'about_8'})}</h2>
                        <p>{translate({id:'about_9'})}</p>
                        <p>{translate({id:'about_10'})}</p>
                        <p>{translate({id:'about_11'})}</p>
                        <p>{translate({id:'about_12'})}</p>
                        <p>{translate({id:'about_13'})}</p>
                        <h2>{translate({id: 'about_14'})}</h2>
                        <p>{translate({id: 'about_15'})}</p>
                        <p>{translate({id: 'about_16'})}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
