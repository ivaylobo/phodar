import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import translate from "../../i18n/translate";

class Popup extends Component {
	state = {
		agree: localStorage.getItem('cookies-accepted')
	}
	acceptCookies = () => {
		localStorage.setItem('cookies-accepted', 'true');
		this.setState({
			agree: true
		})
	}

	render(){
		return (
			!this.state.agree ? <div className="cookies">
				<p>{translate('Cookies_popup', {cookies: <NavLink to='/cookies'>{translate('cookies')}</NavLink>})}</p>
				<button className="accept-cookies" onClick={this.acceptCookies}>OK</button>
			</div> : null
		)
	}
}

export default Popup