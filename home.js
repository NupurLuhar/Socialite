import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.log(error));
    }, []);

    return ( <
        div >
        <
        h1 > Home Feed < /h1> {
            posts.map(post => ( <
                div key = { post._id } >
                <
                h3 > { post.userId.username } < /h3> <
                p > { post.content } < /p> <
                img src = { post.image }
                alt = "Post" / >
                <
                /div>
            ))
        } <
        /div>
    );
};

export default Home;