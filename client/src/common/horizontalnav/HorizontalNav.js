import React from "react";
import "./HorizontalNav.css";

const HorizontalNav = (props) => {

    const menuClick = (e) => {
        e.preventDefault();
        const href = e.target.href;
    }
    return (

        <ul>
            {props.menuOptions.map( ( { name, id }, index) => (
                <li key = { name + id + index }>
                    <a onClick = { e => menuClick (e) } href = { id } > { name } </a>
                </li>
            ))}
        </ul>
    )

}
export default HorizontalNav;
