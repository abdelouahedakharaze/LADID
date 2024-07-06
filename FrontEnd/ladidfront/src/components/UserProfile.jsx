import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Assuming you're using react-router

const UserProfile = () => {
  const { userId } = useParams(); // Get userId from route parameters
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch user details
    axios.get(`http://localhost:8000/users/${userId}/`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });

    // Fetch user's posts using query parameter
    axios.get(`http://localhost:8000/recipes/user/${userId}`)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, [userId]);

  if (!user) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-gradient-to-br from-green-400 to-green-200 rounded-lg shadow-lg">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
        {user.profile_picture && (
          <div className="flex justify-center">
            <img src={user.profile_picture} alt="Profile" className="w-32 h-32 object-cover rounded-lg shadow-lg" />
          </div>
        )}
        <h2 className="text-2xl font-bold text-center mt-4">{user.first_name} {user.last_name}</h2>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Posts:</h3>
          {posts.length === 0 ? (
            <p className="text-gray-600">No posts yet.</p>
          ) : (
            posts.map((post, index) => (
              <div key={post.id} className={`mt-4 ${index !== 0 ? 'border-t-2 border-green-800 pt-4' : ''}`}>
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="mt-2">{post.text}</p>
                {post.picture && <img src={post.picture} alt="Post" className="mt-4 rounded-lg shadow-md" style={{ maxWidth: '100%' }} />}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
