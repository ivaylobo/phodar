import React from "react";
// import translate from "../../i18n/translate";
import classes from './Footer.module.css';

const Footer = () => {
    // Get current year
    const currentYear = new Date().getFullYear();

    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className={`col-md-12 ${classes.footerWrap}`}>
                        <div className="left">
                            {/*<h6>{translate({id:'Contacts:'})}</h6>*/}
                            <p>PHODAR Fondation BULGARIA 1510 Sofia, P.O.box: 55</p>
                            <p>phodar.new@gmail.com</p>
                        </div>
                        <div className={classes.social}>
                            <h4>Follow us</h4>
                            <a className={classes.facebook} target="_blank" href="https://www.facebook.com/phodar.biennial"> </a>
                        </div>
                        <div className={classes.copy}><span>© 1999-{currentYear} Phodar. All Rights Reserved.</span> <a className={classes.darina} href="https://www.behance.net/darinabojinova" target="_blank"> </a></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

