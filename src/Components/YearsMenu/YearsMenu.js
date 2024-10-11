import {NavLink} from "react-router-dom";
import classes from "../../Pages/Editions/Editions.module.css";

const YearsMenu = ({years, currentYear, setCurrentYear}) => {
    return(
        years.reverse().map((year) => <li key={year} onClick={() => setCurrentYear(year)}>
            <NavLink className={+year === +currentYear ? classes.active : ''} to={'/editions/' + year}>
                <h4>{year}</h4>
            </NavLink>
        </li>)
    )
}

export default YearsMenu