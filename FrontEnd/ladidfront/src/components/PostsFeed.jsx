import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post'; // Adjust path as needed

const PostsFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch all posts
        axios.get('http://localhost:8000/recipes/posts/')
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Posts Feed</h2>
            {posts.map((post, index) => (
                <div key={post.id} className={`rounded-lg shadow-lg p-6 mb-6 ${index !== 0 ? 'mt-6' : ''} bg-gradient-to-b from-green-300 to-green-500`}>
                    <Post post={post} />
                </div>
            ))}
        </div>
    );
};

export default PostsFeed;
