import React from "react";
// import translate from "../../i18n/translate";
import classes from './Footer.module.css';

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className={`col-md-12 ${classes.footerWrap}`}>
                        <div className="left">
                            {/*<h6>{translate({id:'Contacts:'})}</h6>*/}
                            <p>PHODAR Fondation BULGARIA 1510 Sofia, P.O.box: 55</p>
                            <p>info@phodar.net</p>
                        </div>
                        <div className={classes.social}>
                            <h4>Follow us</h4>
                            <a className={classes.facebook} target="_blanck" href="https://www.facebook.com/phodar.biennial"> </a>
                        </div>
                        <div className={classes.copy}><span>© 1999-2022 Phodar. All Rights Reserved.</span> <a className={classes.darina} href="https://www.behance.net/darinabojinova" target="_blanck"> </a></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer