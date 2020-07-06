import React from 'react';
import { homepage } from './homepage.const.js';
import './App.css';


export default function App({ match }) {
    const {
        blogs
    } = homepage
    const post = blogs.posts[match.params.id];

    return (


        <div className="container">
            <img className="w-100" src={post.image} />
            <h1>{post.title}</h1>
            <p>{post.description}</p>
        </div>
    );
}
