import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LikeButton = ({ postId }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0); // Assuming initial likes count is 0

    useEffect(() => {
        // Fetch initial like status and count for the post
        axios.get(`http://localhost:8000/likes/?post=${postId}`)
            .then(response => {
                const likes = response.data.likes;
                const likedByUser = response.data.liked_by_user;
                setLikesCount(likes);
                setIsLiked(likedByUser);
            })
            .catch(error => {
                console.error('Error fetching likes:', error);
            });
    }, [postId]);

    const handleLike = () => {
        // Hardcoded user ID for now
        const userId = 5; // Replace with actual user ID or use your authentication logic
        
        // Send like/unlike request to backend
        const url = isLiked ? `http://localhost:8000/likes/unlike/${postId}/` : `http://localhost:8000/likes/like/${postId}/`;
        axios.post(url, {
            user: userId,
        })
        .then(response => {
            // Update UI with new like count and status
            setLikesCount(response.data.likes);
            setIsLiked(!isLiked);
        })
        .catch(error => {
            console.error('Error handling like:', error);
        });
    };

    return (
        <div className="flex items-center">
            <button
                onClick={handleLike}
                className={`py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out shadow-lg ${isLiked ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-red-300'}`}
            >
                {isLiked ? 'Unlike' : 'Like'}
            </button>
            {/* <span className="ml-2 text-lg">{likesCount} {likesCount === 1 ? 'like' : 'likes'}</span> */}
        </div>
    );
};

export default LikeButton;
