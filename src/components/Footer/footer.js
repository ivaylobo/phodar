import React from "react";
import translate from "../../i18n/translate";

const footer = (props) => {
	return(
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="float-left">
							<h6>{translate('Contacts:')}</h6>
							<p>PHODAR Fondation BULGARIA 1510 Sofia, P.O.box: 55</p>
							<p>phodar.new@gmail.com</p>
						</div>
						<div className="social">
							<h4>Follow us</h4>
							<a className="facebook" target="_blanck" href="https://www.facebook.com/groups/56397733682/"></a>
						</div>
						<div className="copy float-right"><span>© 2016 Phodar. All Rights Reserved.</span> <a className="darina"
																														href="https://www.behance.net/darinabojinova"
																														target="_blanck"></a></div>
						<div className="clear"></div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default footer