import React, { useEffect, useState } from "react";
import { useParams} from "react-router";
// helpers
import { fetchData } from "../common/common";
import { urls } from "../common/config";

import "./Main.css";

const Section = (props) => {
    const [ sectionData, setSectionData ] = useState([]);
    const { id } = useParams();
    const sectionName = props.menuOptions.length > 0 && props.menuOptions.filter( (section) => section.id === id )[0].name    
    const styles = {
        height: "200px"
    }

    useEffect (() => {

        fetchData (urls.baselocalhost + urls.blogs).then( (data) => { setSectionData(data.blogs) } );   

    }, [id])


    return (
        
        <div>
            <div className="header">
                <h2>{ sectionName }</h2>
            </div>
            <div className="row">
                <div className="leftcolumn">
                    {sectionData.length > 0 && sectionData.map(( { title, short_description, description }, index) => (
                        <div key = { title + index } className="card">
                            <h2>{title}</h2>
                            <h5>{ short_description }</h5>
                            <img className="fakeimg" style={ styles }/>                     
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
export default Section;



