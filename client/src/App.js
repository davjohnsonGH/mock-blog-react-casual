import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "@babel/polyfill";

const App = () => {

    const [blog, setBlog] = useState({});
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {

        const fetchBlog = async () => {
            const response = await fetch("http://localhost:3000/data/blog");
            const jsonData = await response.json();
            setBlog(jsonData);
        }
        
        
        const fetchBlogs = async () => {
            const response = await fetch("http://localhost:3000/data/blogs");
            const jsonData = await response.json();
            setBlogs(jsonData.blogs);
        }

        fetchBlogs();
        fetchBlog();        
        
    }, [])

    return (
        <div>
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
