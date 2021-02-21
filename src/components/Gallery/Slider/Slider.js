import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


class Slider extends React.Component{
	state = {
		show: true
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if(!this.state.show){
			this.setState({
				show: true
			})
		}
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
		if(this.state.show){
			this.setState({
				show: false
			})
		}
	}


	render() {
		const selectedItem = this.props.selectedItem ? this.props.selectedItem : null;
		return (
			this.state.show ? <Carousel
				showThumbs={this.props.thumbs}
				selectedItem={selectedItem}
				showIndicators={true}
				autoPlay={true}
				infiniteLoop={true}
				swipeable={false}
				renderArrowPrev={(onClickHandler, hasPrev, label) =>
					hasPrev && (
						<div type="button" className="arrow-left" onClick={onClickHandler} title={label} >
						</div>
					)
				}
				renderArrowNext={(onClickHandler, hasNext, label) =>
					hasNext && (
						<div type="button" className="arrow-right" onClick={onClickHandler} title={label}>
						</div>
					)
				}
			>
				{this.props.sliderImages}
			</Carousel> : null
		)
	}
}

export default Slider