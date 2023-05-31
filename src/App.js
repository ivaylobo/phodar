import React, {Component} from 'react';
import './styles/styles.css';
import './styles/bootstrap.min.css';
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import {I18nProvider, LOCALES} from "./i18n";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ScrollToTop from "./Auxillery/ScrollToTop";


import Home from "./TextContainers/Home";
import AboutUs from "./TextContainers/AboutUs";
import Events from "./TextContainers/Events";
import News from "./TextContainers/News";
import Cookies from "./TextContainers/Cookies";
import Terms from "./TextContainers/Terms";
import GalleriesComponent from "./components/Gallery/GalleriesComponent"
import AuthorGallery from "./components/Gallery/AuthorGallery/AuthorGallery";
import Popup from "./components/Popup/Popup";


class App extends Component {

	state = {
		lang: LOCALES.ENGLISH,
		switchMobileOpened: false,
		scrolledDown: false
	}

	switchLanguage = (lang) => {
		this.setState({
			lang: lang.value
		})
	}

	switchMenuMobile = () => {
		this.setState(prevSpate => ({
			switchMobileOpened: !prevSpate.switchMobileOpened
		}))
	}


	componentDidMount() {

		const isScrolledDown = () => {
			if(window.pageYOffset !== 0 && this.state.scrolledDown) {
				this.setState(prevSpate => ({
					scrolledDown: false
				}))
			}
			else if (window.pageYOffset === 0 && !this.state.scrolledDown) {
				this.setState(prevSpate => ({
					scrolledDown: true
				}))
			}
		}
		window.onscroll = function() {
			isScrolledDown();
		};
		isScrolledDown();
	}


	render() {
		return (
			<I18nProvider locale={this.state.lang}>
				<BrowserRouter>
					<ScrollToTop>
					<Route path="/" component={AuthorGallery}/>
					<div className={`wrap ${this.state.lang}`}>
						<Header switchLang={this.switchLanguage}
								lang={this.state.lang}
								locales={LOCALES}
								hamburgerMobile={this.switchMenuMobile}
								switchMobileOpened = {this.state.switchMobileOpened}
								additionalClass = {!this.state.scrolledDown ? 'scrolled': ''}
						/>
						<Switch>
							<Route path="/aboutUs" exact component={AboutUs}/>
							{/*<Route path="/regulations" exact component={Regulations}/>*/}
							<Route path="/events" exact component={Events}/>
							<Route path="/news" exact component={News}/>
							<Route path="/cookies" exact component={Cookies}/>
							<Route path="/terms" exact component={Terms}/>
							<Route path="/gallery/" component={GalleriesComponent}/>
							<Route path="/regulations/" component={() => {
								window.location.href = 'https://entry.phodar.net/';
								return null;
							}}/>
							<Route path="/" component={Home}/>
						</Switch>
						<Footer/>
					</div>
					<Route path="/" component={Popup}/>
					</ScrollToTop>
				</BrowserRouter>
			</I18nProvider>
		);
	}
}

export default App;
