import translate from "../../i18n/translate";
import classes from './Home.module.css';
import {NavLink} from "react-router-dom";
import React, {Fragment, useState} from "react";
import BackgroundSlider from "react-background-slider";
import img1 from '../../assets/images/head_1.jpg';
import img2 from '../../assets/images/head_2.jpg';
import img4 from '../../assets/images/head_4.jpg';
import Galleries from '../../Components/Gallery/Galleries';

const Home = () => {
    const years = Galleries.map(edition => {
        return edition.year;
    });
    const maxYear = Math.max(...years);
    return (
        <Fragment>
            <div className={classes.summary}>
                <BackgroundSlider
                    images={[img1, img2, img4]}
                    duration={5}
                    transition={1}
                />
                <div className={`${classes.container} container`}>
                    <div className="row">
                        <div className={`col-md-12 ${classes.main}`}>
                            <div className={classes.top}>
                                <h4>13</h4>
                                <div className={classes.next}><span>{translate({id: 'edition'})}</span></div>
                            </div>
                            <h3>{translate({id: 'international photo competition'})}</h3>
                            <div className={classes.bottom}>
                                <h5>{translate({id: 'topic:'})}</h5>
                                <h1>{translate({id: 'Photographic reality'})}</h1>
                            </div>
                            <div className={classes.links}>
                                <NavLink className={classes.buttonLink} to={`/editions/${maxYear}`}>{translate({id: 'winners'})}</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.mainInfo}>
                <div className={`${classes.container} container`}>
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className={classes.headline}>{translate({id: "2025_1"})}</h3>
                            <p className={classes.highlight}><strong>{translate({id: "2025_4"})}</strong></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className={classes.program}>
                                <li><strong>{translate({id: "2025_5_1"})}</strong>{translate({id: "2025_5"})}</li>
                                <li><strong>{translate({id: "2025_6_1"})}</strong>{translate({id: "2025_6"})}</li>
                                <li><strong>{translate({id: "2025_7_1"})}</strong>{translate({id: "2025_7"})}</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <p>{translate({id: "2025_2"})}</p>
                            <p>{translate({id: "2025_3"})}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h2><span>{translate({id: 'HOME_MAIN_TEXT'})}</span></h2>
                            <h3>
                                {translate({id: 'HOME_MAIN_TEXT_1', value: {cash: <strong>$2.000</strong>}})} <br/>
                                {translate({
                                    id: 'Award for Humanistic Photography',
                                    value: {cash: <strong>$600</strong>}
                                })} <br/>
                                {translate({id: 'HOME_MAIN_TEXT_9', value: {cash: <strong>$600</strong>}})}
                            </h3>

                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-5">
                            <br/>
                            <h4>{translate({id: 'HOME_MAIN_TEXT_4'})}</h4>
                            <br/>
                            <h4>{translate({id: 'HOME_MAIN_TEXT_5'})}</h4>
                            <br/>
                            <h4>{translate({id: 'HOME_MAIN_TEXT_6'})}</h4>
                        </div>
                        <div className={`col-md-7 ${classes.rightText}`}>
                            <p>{translate({id: 'terms_4'})}</p>
                            <p>{translate({id: 'terms_4_5'})}</p>
                        </div>
                    </div>
                    {/*<div className="row">*/}
                    {/*    <div className="col-md-12">*/}
                    {/*        <a className={classes.buttonLink} href="https://entry.phodar.net" target="_blank" rel="noopener noreferrer">{translate({id: 'enter now'})}</a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className={classes.logoSofia}>
                <div className={`${classes.container} ${classes.partners} container`}>
                    <div className="row">
                        <div className={`col-md-3 ${classes.logos}`}>
                            <a href="https://kultura.sofia.bg/" target="_blank" rel="noreferrer"
                               className={`${classes.logoContainer} ${classes.cultura}`}>
                            </a>
                        </div>
                        <div className={`col-md-3 ${classes.logos}`}>
                            <a href="https://nationalgallery.bg/" target="_blank" rel="noreferrer"
                               className={`${classes.logoContainer} ${classes.ng}`}>
                            </a>
                        </div>
                        <div className={`col-md-3 ${classes.logos}`}>
                            <a rel="noreferrer" href="https://ncf.bg/bg" target="_blank"
                               className={`${classes.logoContainer} ${classes.nfk}`}>
                            </a>
                        </div>
                        <div className={`col-md-3 ${classes.logos}`}>
                            <a rel="noreferrer" href="https://obscuramag.com/" target="_blank"
                               className={`${classes.logoContainer} ${classes.obscura}`}>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.exhibitions}>
                <div className={`${classes.container} container`}>
                    <div className="row">
                        <div className="col-md-12">
                            <h2>{translate({id: 'showcase your photography in our festival exhibitions'})}</h2>
                            <div className={classes.allWrapper}>
                                <div className={`${classes.rowWrapper} ${classes.first}`}>
                                    <div className={classes.imageWrapper}></div>
                                    <div className={classes.imageWrapper}></div>
                                </div>
                                <div className={`${classes.rowWrapper} ${classes.second}`}>
                                    <div className={classes.imageWrapper}></div>
                                    <div className={classes.imageWrapper}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.photoBook}>
                <div className={`${classes.container} container`}>
                    <div className="row">
                        <div className={`${classes.flexMobile} col-md-12`}>
                            <div className={classes.photoBookWrapper}></div>
                            <div className={classes.photoBookText}>
                                <h3>{translate({id: "BE PART OF OUR EDITION PHOTO BOOK"})}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.pastEditions}>
                <div className={`${classes.container} container`}>
                    <div className="row">
                        <div className="col-md-12">
                            <h2>{translate({id: 'editions'})}</h2>
                            <h3>{translate({id: 'SEE THE FULL GALLERY OF WINNERS & PARTICIPANTS IN PAST EDITIONS'})}</h3>
                            <ul className={`${classes.desktop} ${classes.first}`}>
                                <li>
                                    <NavLink to='/editions/2023/'><span>2023</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/2019/'><span>2019</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/2013'><span>2013</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/2009'><span>2009</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/2005'><span>2005</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/2001'><span>2001</span></NavLink>
                                </li>
                            </ul>
                            <ul className={`${classes.desktop} ${classes.second}`}>
                                <li>
                                    <NavLink to='/editions/2021/'><span>2021</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/2015/'><span>2015</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/2011'><span>2011</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/2007'><span>2007</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/2003'><span>2003</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/1999'><span>1999</span></NavLink>
                                </li>
                            </ul>
                            <ul className={classes.mobile}>
                                <li>
                                    <NavLink to='/editions/2023/'><span>2023</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/2021/'><span>2021</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/2019/'><span>2019</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/2015'><span>2015</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/2013'><span>2013</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/2011'><span>2011</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/2009'><span>2009</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/2007'><span>2007</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/2003'><span>2003</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/2001'><span>2001</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editions/1999'><span>1999</span></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Home