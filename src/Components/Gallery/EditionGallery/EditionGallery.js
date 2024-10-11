import React from "react";
import Galleries from "../Galleries";
import {NavLink} from "react-router-dom";
import translate from "../../../i18n/translate";
import Slider from "../Slider/Slider";
import classes from "./EditionGallery.module.css";

const EditionGallery = ({editionYear}) => {
    const currentEdition = Galleries.find((edition) => +editionYear === edition.year);
    const winners = currentEdition.authors.filter(author => author.award && author.award !== '');
    const winnersHTML = winners.map(winner => {
        return (
            <li key={winner.name}>
                <NavLink to={{
                    pathname: `/editions/${editionYear}`,
                    search: `?author=${winner.name.replace(/ /g, '_')}`
                }}
                         className='my-active'>
                    <span>{translate({id: winner.award})}</span> <strong>{winner.name}</strong>
                    <span>{translate({id: winner.country})}</span>
                </NavLink>
            </li>
        )
    });

    const sliderImages = currentEdition.galleryUrls.map(url => {
        return (
            <NavLink to={{
                pathname: `/editions/${editionYear}`,
                search: `?author=${url[1].replace(/ /g, '_')}`
            }}
                     key={url[0]}>
                <img src={`/${url[0]}`} alt="product"/>
            </NavLink>
        )
    });

    return (
        <div className={`col-md-12 ${classes.menuBar}`}>
            <p>{translate({id: 'winners'})}</p>
            <div className={classes.sectionContainer}>

                <div className={classes.leftPart}>
                    <h2>{currentEdition.year}</h2>

                    <h3>{translate({id: currentEdition.edition})}</h3>

                    <h3><span className="active">{translate({id: 'motto:'})}</span>
                        <span>{translate({id: currentEdition.motto})}</span></h3>

                </div>

                <ul className={classes.awards}>
                    {winnersHTML}
                </ul>
            </div>

            <div className="carouselHolder">
                <Slider sliderImages={sliderImages} thumbs={false} selectedItem={0}/>
            </div>

        </div>
    )
}

export default EditionGallery