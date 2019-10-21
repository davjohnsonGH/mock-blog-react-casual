import React from "react";
import "./HorizontalNav.css";

const HorizontalNav = (props) => {

    return (

        <ul>
            {props.menuOptions.map( ( { name }) => (
                <li>
                    <a>{ name }</a>
                </li>
            ))}
        </ul>
    )

}
export default HorizontalNav;
