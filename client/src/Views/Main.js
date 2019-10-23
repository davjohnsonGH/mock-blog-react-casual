import React, { useEffect, useState } from "react";
// helpers
import { fetchData } from "../common/common";
import { urls } from "../common/config";

import "./Main.css";

const Main = () => {
    const [ mainData, setMainData ] = useState([]);
    const styles = {
        height: "200px"
    }

    useEffect (() => {
        fetchData (urls.baselocalhost + urls.blogs).then( (data) => { setMainData(data.blogs) } );   
    }, []) 


    return (
        
        <div>
            <div className="header">
                <h2>Main</h2>
            </div>
            <div className="row">
                <div className="leftcolumn">
                    {mainData.length > 0 && mainData.map(( { title, short_description, description }, index) => (
                        <div key = { title + index } className="card">
                            <h2>{title}</h2>
                            <h5>{ short_description }</h5>
                            <div className="fakeimg" style={ styles }>Image</div>
                            <p>{ description }</p>
                        </div>
                    )) }
                </div>                  
            </div>
            <div className="footer">
                <h2>Footer</h2>
            </div>
        </div>
    )
}
export default Main;
