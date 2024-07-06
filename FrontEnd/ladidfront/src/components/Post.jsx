import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayComment from './DisplayComment';
import MakeComment from './MakeComment';
import LikeButton from './LikeButton'; 
const Post = ({ post }) => {
    const { title, text, picture, author, likes, id } = post;
    const [comments, setComments] = useState([]);

    useEffect(() => {
        
        axios.get(`http://127.0.0.1:8000/comments/?post=${id}`)
            .then(response => setComments(response.data))
            .catch(error => console.error('Error fetching comments:', error));
    }, [id]);

    return (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 text-gray-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:shadow-xl hover:scale-105 mb-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-lg mb-4">{text}</p>
            {picture && <img src={picture} alt={title} className="mb-4 rounded-lg shadow-md" style={{ maxWidth: '100%' }} />}
            <div className="flex items-center mb-4">
                <img src={author.profile_picture} alt={`${author.first_name} ${author.last_name}`} className="w-12 h-12 rounded-full mr-4 shadow-md" />
                <span className="text-lg font-semibold">{author.first_name} {author.last_name}</span>
            </div>
            <p className="text-lg mb-4">Likes: {likes}</p>
            <LikeButton postId={id} />
            
            <h3 className="text-xl font-bold mt-8 mb-4">Comments</h3>
            {comments.map(comment => (
                <DisplayComment key={comment.id} comment={comment} />
            ))}
            <MakeComment postId={id} />
        </div>
    );
};

export default Post;
