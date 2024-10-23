// src/Blog.js
import React from 'react';
import blog from '../Components/Assets/blog';
import './CSS/Blog.css';

const Blog = () => {
    return (
        <div className="blog-container">
            <h1>My Blog</h1>
            {blog.map((blog) => (
                <div key={blog.id} className="post">
                    <h2>{blog.title}</h2>
                  <img className='blog-image' src={blog.image}/>
                    <p className="date">{blog.date}</p>
                    <p>{blog.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Blog;
