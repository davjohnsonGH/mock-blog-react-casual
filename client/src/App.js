import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "@babel/polyfill";
//helpers
import { fetchData } from "./common/common";
import { urls } from "./common/config";
// components 
import HorizontalNav from "./common/horizontalnav/HorizontalNav";

const App = () => {

    const [menuOptions, setMenuOptions] = useState([]);
    const [blog, setBlog] = useState({});
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {

        // fetch menu options
        fetchData (urls.baselocalhost + urls.menuoptions).then( (data) => { setMenuOptions(data) } );   
        // fetch blog
        fetchData (urls.baselocalhost + urls.blog).then( (data) => { setBlog(data) } );   
        // fetch blogs
        fetchData (urls.baselocalhost + urls.blogs).then( (data) => { setBlogs(data.blogs) } );   

    }, [])

    return (
        
        <div>
            <HorizontalNav menuOptions = { menuOptions }/>
            <h1>single blog</h1>
            <h2>{ blog.title }</h2>
            <h3>{ blog.short_description }</h3>
            <h4>{ blog.description }</h4>
            <p>{ blog.sentences }</p>
            <h1>mutiple blog</h1>       
            {blogs.map( ( { title, short_description, description, sentences }, index ) => (
                <div key= {title + index} >
                    <h2>{ title }</h2>
                    <h3>{ short_description }</h3>
                    <h4>{ description }</h4>
                    <p>{ sentences }</p>
                </div>
            ))}
         
        </div>
    )

}

render(<App />, document.getElementById("root"));
