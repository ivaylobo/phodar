import React, {Component} from 'react';
import './styles/styles.css';
import './styles/bootstrap.min.css';
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import {I18nProvider, LOCALES} from "./i18n";
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Home from "./TextContainers/Home";
import AboutUs from "./TextContainers/AboutUs";
import Regulations from "./TextContainers/Regulations";
import Events from "./TextContainers/Events";
import News from "./TextContainers/News";
import Cookies from "./TextContainers/Cookies";
import AuthorGallery from "./components/Gallery/AuthorGallery/AuthorGallery";
import Popup from "./components/Popup/Popup";


class App extends Component {

	state = {
		lang: LOCALES.ENGLISH,
		switchMobileOpened: false
	}

	switchLanguage = (lang) => {
		this.setState({
			lang
		})
	}

	switchMenuMobile = () => {
		this.setState(prevSpate => ({
			switchMobileOpened: !prevSpate.switchMobileOpened
		}))
	}

	render() {
		return (
			<I18nProvider locale={this.state.lang}>
				<BrowserRouter>
					<Route path="/" component={AuthorGallery}/>
					<div className="wrap">
						<Header switchLang={this.switchLanguage}
								lang={this.state.lang}
								locales={LOCALES}
								hamburgerMobile={this.switchMenuMobile}
								switchMobileOpened = {this.state.switchMobileOpened}
						/>
						<Switch>
							<Route path="/aboutUs" exact component={AboutUs}/>
							<Route path="/regulations" exact component={Regulations}/>
							<Route path="/events" exact component={Events}/>
							<Route path="/news" exact component={News}/>
							<Route path="/cookies" exact component={Cookies}/>
							<Route path="/" component={Home}/>
						</Switch>
						<Footer/>
					</div>
					<Route path="/" component={Popup}/>
				</BrowserRouter>
			</I18nProvider>
		);
	}
}

export default App;
