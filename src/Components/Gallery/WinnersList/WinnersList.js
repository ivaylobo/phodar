import React from "react";
import translate from "../../../i18n/translate";
import { NavLink } from "react-router-dom";
import classes from "./WinnersList.module.css";

const WinnersList = (props) => {
    const addHistory = () => {
        localStorage.setItem('hasHistory', 1);
    };

    const winnersHTML = props.winners.map((author, index) => {
        const award = translate({ id: author.award });
        const single = author.urls.length === 1;

        // Compute dynamic class for container
        const containerClass = classes['container' + ((props.allWinnersLength - index) % 3)];

        return (
            <div className={`${classes.authorShort} ${single ? classes.single : ''}`} key={`${author.name.replace(/ /g, '_')}_${props.edition}`}>
                <div className="container">
                    <div className="row">
                        <div className={`col-md-12 ${classes.authorContent}`} id={author.name.replace(/ /g, '_')}>
                            <p className={classes.authorAward}>{award}</p>
                            <ul className={`${classes.authorImages} ${containerClass}`}>
                                {author.urlsThumb.slice(0, 3).map((picture, index) => {
                                    // Compute dynamic class for each <li> based on the index
                                    const liClass = classes[`image-li-${index}`];

                                    return (
                                        <li key={index} className={`${classes.infoContainer} ${liClass}`}>

                                                <div className={classes.authorInfo}>
                                                    <NavLink
                                                        onClick={addHistory}
                                                        to={{
                                                            pathname: `/editions/${props.edition}`,
                                                            search: `?author=${author.name.replace(/ /g, '_')}`
                                                        }}
                                                    >
                                                        <p className={classes.authorName}>{author.name}</p>
                                                    </NavLink>
                                                    <p className={classes.authorCountry}>{translate({ id: author.country })}</p>
                                                </div>

                                            <NavLink
                                                onClick={addHistory}
                                                to={{
                                                    pathname: `/editions/${props.edition}`,
                                                    search: `?author=${author.name.replace(/ /g, '_')}`
                                                }}
                                            >
                                                {index === 1 || single ? (
                                                    <img className="big-img" src={`/${author.urlsMedium[index]}`} alt={author.name} />
                                                ) : (
                                                    <img className="small-img" src={`/${author.urlsThumb[index]}`} alt={author.name} />
                                                )}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return <>{winnersHTML}</>;
};

export default WinnersList;
