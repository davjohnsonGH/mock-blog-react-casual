import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "@babel/polyfill";

const App = () => {

    const [blog, setBlog] = useState([]);

    useEffect( () => {

        const fetchUsers = async () => {
            const response = await fetch("http://localhost:3000/data");
            const jsonData = await response.json();
            setBlog(jsonData.blog);
        }
        
        fetchUsers();
        
    }, [])

    return (
        <div>
            <h1>fullstack react playground</h1>
            {blog.map( ( { title, short_description, description, sentences }, index ) => (
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
