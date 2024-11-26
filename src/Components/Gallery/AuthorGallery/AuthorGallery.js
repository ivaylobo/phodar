import React, {useState, useEffect, Fragment} from "react";
import galleryObj from "../../Gallery/Galleries";
import translate from "../../../i18n/translate";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Slider from "../Slider/Slider";
import {useLocation, useNavigate} from "react-router-dom";
import classes from "./AuthorGallery.module.css";


const AuthorGallery = () => {
    const [showSlider, setShowSlider] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);
    const [blackBg, setBlackBg] = useState(false);
    const navigate = useNavigate();

    // const history = useHistory();
    const location = useLocation();

    const goBack = (year) => {
        setShowSlider(false);
        setSelectedItem(0);

        navigate(`/editions/${year}`);
        localStorage.removeItem('hasHistory');

    };

    const toggleView = () => {
        setShowSlider(prev => !prev);
    };

    const toggleBg = () => {
        setBlackBg(prev => !prev);
    };

    const slideToImage = (num) => {
        setShowSlider(true);
        setSelectedItem(num);
    };

    const goToHomePage = () => {
        // history.push("/gallery/");
    };

    const highResolution = window.devicePixelRatio >= 2 && window.innerWidth < 510;

    useEffect(() => {
        if (!location.search || location.search === '') return;
        const year = +location.pathname.slice(-4);
        if (!location.search.includes('?author=')) {
            //  history.push({ pathname: `/`, search: '' });
            return;
        }

        let authorName = location.search.replace('?author=', '');
        const edition = galleryObj.find(edition => edition.year === year);

        if (authorName.indexOf('&fbclid') !== -1) {
            authorName = authorName.substring(0, authorName.lastIndexOf('&fbclid'));
            // history.push({
            //     pathname: `/gallery/${edition.year}`,
            //     search: '?author=' + authorName
            // });
        }

        if (typeof edition === 'undefined') {
            goToHomePage();
        }

        const authors = edition?.authors || [];
        const currentAuthor = authors.find(author => author.name === authorName.replace(/_/g, ' '));

        if (typeof currentAuthor === 'undefined') {
            goToHomePage();
        }
    }, [location]);

    const year = +location.pathname.slice(-4);
    const edition = galleryObj.find(edition => edition.year === year);
    let authorName = location.search.replace('?author=', '');
    const currentAuthor = edition?.authors.find(author => author.name === authorName.replace(/_/g, ' '));

    const imagesThumb = currentAuthor?.urlsThumb.map((image, id) => (
        <img key={id} src={`/${image}`} alt="" onClick={() => slideToImage(id)}/>
    ));

    const imagesMedium = currentAuthor?.urlsMedium.map((image, id) => (
        <img key={id} src={`/${image}`} alt="" width="230px" onClick={() => slideToImage(id)}/>
    ));

    const images = currentAuthor?.urls.map((image, id) => (
        <img key={id} src={`/${image}`} alt=""/>
    ));

    return (
        <Fragment>
            {currentAuthor ? (
                <div className={`popup author ${blackBg ? 'black' : ''}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className={classes.information}>
                                    <h2>{currentAuthor.name}</h2>
                                    <h4>{currentAuthor.title}</h4>
                                </div>
                                <div className={classes.rightMenu}>
                                    <a
                                        href={`#${currentAuthor.name.replace(/ /g, '_')}`}
                                        className={classes.close}
                                        onClick={() => goBack(year)}
                                    ></a>
                                    <div
                                        className={`${classes.countSwitch} ${showSlider ? classes.active : ''}`}
                                        onClick={toggleView}
                                    ></div>
                                    <div className={`${classes.colored} ${classes.desktop}`} onClick={toggleBg}></div>
                                </div>
                                <div className={`${classes.colored} ${classes.mobile}`} onClick={toggleBg}></div>
                                {showSlider ? (
                                    <div className="carouselHolder">
                                        <Slider sliderImages={images} thumbs={false} selectedItem={selectedItem}/>
                                    </div>
                                ) : (
                                    <ResponsiveMasonry
                                        columnsCountBreakPoints={{ 480: 1, 600: 2, 800: 3}}>
                                        <Masonry
                                            className={'my-gallery-class'}
                                            gutter="10px"
                                        >
                                            {highResolution ? imagesMedium : imagesThumb}
                                        </Masonry>
                                    </ResponsiveMasonry>
                                )}

                                <p className="collection-text">{currentAuthor.text}</p>
                                {currentAuthor.translatedText ? (
                                    <div className="collection-text">
                                        {/*{translate(currentAuthor.translatedText, { breakLine: <hr /> })}*/}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </Fragment>
    );
};

export default AuthorGallery;
