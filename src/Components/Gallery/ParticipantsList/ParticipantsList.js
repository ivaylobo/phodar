import React from "react";
import translate from "../../../i18n/translate";
import {NavLink} from "react-router-dom";
import classes from "./ParticipantsList.module.css";

const participantsList = (props) => {
    const participantsHTML = props.participants.map(author => {
        const addHistory = () => {
            localStorage.setItem('hasHistory', 1);
        };
        return (author.urls.length ? (
            <div className={`col-md-6 ${classes.singleImg}`} key={`${author.name}_${props.edition}`}>
                <div className={classes.imgContainer} id={author.name.replace(/ /g, '_')}>
                    <NavLink onClick={addHistory} to={{ // to know if the user comes from the website on this gallery
                        pathname: `/editions/${props.edition}`,
                        search: `?author=${author.name.replace(/ /g, '_')}`
                    }}>
                        <img src={`/${author.urlsMedium[0]}`} alt=""/>
                    </NavLink>
                </div>
                <NavLink onClick={addHistory} to={{
                    pathname: `/editions/${props.edition}`,
                    search: `?author=${author.name.replace(/ /g, '_')}`
                }}>
                    <p className={classes.authorName}>{author.name}</p>
                </NavLink>
                <p className={classes.authorCountry}>{translate({id: author.country})}</p>
            </div>
        ) : null)
    })
    return (
        <div className="container">
            <div className="row">
                {participantsHTML}
            </div>
        </div>
    )
}

export default participantsList