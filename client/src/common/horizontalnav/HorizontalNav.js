import React from "react";
import "./HorizontalNav.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// views 
import Main from "../../Views/Main";
import Section from "../../Views/Section";
  
const HorizontalNav = (props) => {

    return (
        <Router>
            <ul>
                {props.menuOptions.map( ( { name, id }, index) => (
                    <li key = { name + id + index }>
                        <Link to = {index === 0 ? '/' : id } > { name } </Link>
                    </li>
                ))}
            </ul>
            <Switch>
                <Route exact path = "/"> 
                    <Main/>
                </Route>
            </Switch>
            <Switch>
                <Route path="/:id" children={<Section menuOptions={ props.menuOptions }/>} />
            </Switch>            
        </Router>
    )

}
export default HorizontalNav;
