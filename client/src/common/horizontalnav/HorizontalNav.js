import React from "react";
import "./HorizontalNav.css";

const HorizontalNav = (props) => {

    return (

        <ul>
            {props.menuOptions.map( ( { name, id }, index) => (
                <li key = { name + id + index }>
                    <a> { name } </a>
                </li>
            ))}
        </ul>
    )

}
export default HorizontalNav;
