import {useParams, useNavigate} from "react-router-dom";
import classes from "./Editions.module.css";
import Galleries from "../../Components/Gallery/Galleries";
import {useEffect, useState} from "react";
import translate from "../../i18n/translate";
import YearsMenu from "../../Components/YearsMenu/YearsMenu";
import EditionGallery from "../../Components/Gallery/EditionGallery/EditionGallery";
import GalleriesList from "../../Components/Gallery/GalleriesList/GalleriesList";


export default function Editions() {


    const years = Galleries.map(edition => {
        return edition.year;
    });
    const maxYear = Math.max(...years);
    const [currentYear, setCurrentYear] = useState(maxYear);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (years.includes(+params.edition) && +params.edition !== currentYear) {
            setCurrentYear(+params.edition);
        } else if (!years.includes(+params.edition)) {
            navigate(`/editions/${maxYear}`);
        }
    }, [params.edition, years, navigate, maxYear, currentYear]);


    return (
        <div className={classes.gallery}>
            <div className={classes.galleryContainer}>
                <div className="container">
                    <h2>{translate({id:'Editions'})}</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className={classes.years}>
                                <YearsMenu {...{ years, setCurrentYear, currentYear }} />
                            </ul>
                        </div>
                        <EditionGallery editionYear={currentYear} />
                    </div>
                </div>
            </div>
            <GalleriesList lastEdition={currentYear}/>
        </div>
    );
}
