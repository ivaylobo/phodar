import React, {Component, Fragment} from "react";
import galleryObj from "../../Gallery/Galleries";
import Masonry from "react-masonry-component";
import Slider from "../Slider/Slider";

const masonryOptions = {
	transitionDuration: 300
};


class AuthorGallery extends Component {

	state = {
		showSlider: false,
		selectedItem: 0,
		blackBg: false
	}


	goBack = () => {
		this.setState({
			showSlider: false,
			selectedItem: 0
		})

		this.props.history.goBack();

	}

	toggleView = () => {
		this.setState(prevState => ({
			showSlider: !prevState.showSlider
		}))
	}

	toggleBg = () => {
		this.setState(prevState => ({
			blackBg: !prevState.blackBg
		}))
	}

	slideToImage = (num) => {
		this.setState({
			showSlider: true,
			selectedItem: num
		})
	}

	goToHomePage = () => {
		this.props.history.push("/gallery/")
	}

	render() {
		if (!this.props.location.search || this.props.location.search === '') {
			return (null)
		}
		const year = + this.props.location.pathname.slice(-4);
		let authorName = this.props.location.search.replace('?author=', '');
		const edition = galleryObj.find(edition => edition.year === year);
		if (authorName.indexOf('&fbclid') !== -1) {
			authorName = authorName.substring(0, authorName.lastIndexOf('&fbclid')) // fix for facebook links
			this.props.history.push({
				pathname: `/gallery/${edition.year}`,
				search: '?author=' + authorName
			})
		}
		if (typeof edition === 'undefined') {
			this.goToHomePage()
			return null
		}
		const authors = edition.authors;
		const currentAuthor = authors.find(author => author.name === authorName.replace(/_/g, ' '));

		if (typeof currentAuthor === 'undefined') {
			this.goToHomePage()
			return null
		}
		const imagesThumb = currentAuthor.urlsThumb.map((image, id) => {
			return (
				<div className='m-brick' key={id}>
					<img src={`/${image}`} alt="" onClick={() => this.slideToImage(id)}/>
				</div>
			)
		});

		const images = currentAuthor.urls.map((image, id) => {
			return (
					<img key={id} src={`/${image}`}  alt=""/>
			)
		});


		return (
			<Fragment>
				{currentAuthor ? <div className={`popup author ${this.state.blackBg ? 'black' : ''}`}>
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="information">
									<h2>{currentAuthor.name}</h2>
									<h4>{currentAuthor.title}</h4>
								</div>
								<div className="rightMenu">
									<link to={`#${currentAuthor.name.replace(/ /g, '_')}`} className="close" onClick={() => this.goBack(year)}></link>
									<div className={`countSwitch ${this.state.showSlider ? 'active' : ''}`} onClick={this.toggleView}></div>
									<div className="colored desktop" onClick={this.toggleBg}></div>
								</div>
								<div className="colored mobile" onClick={this.toggleBg}></div>
								{this.state.showSlider ?
									<div className="carouselHolder">
										<Slider sliderImages={images} thumbs={false} selectedItem={this.state.selectedItem}/>
									</div>
									:
									<Masonry
										className={'my-gallery-class'} // default ''
										elementType={'div'} // default 'div'
										options={masonryOptions} // default {}
										disableImagesLoaded={false} // default false
										updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
									>
										{imagesThumb}
									</Masonry>
								}

								<p className="collection-text">{currentAuthor.text}</p>

							</div>
						</div>
					</div>

				</div> : null}

			</Fragment>

		)
	}
}

export default AuthorGallery