import React, {useState} from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = ({sliderImages, thumbs, selectedItem}) => {

    const [showSlider, setShowSlider] = useState(true);

    return (
        showSlider ? <Carousel
            showThumbs={thumbs}
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
            {sliderImages}
        </Carousel> : null
    )

}

export default Slider