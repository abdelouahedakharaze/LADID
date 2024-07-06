import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Assuming you're using react-router

const UserProfile = () => {
  const { userId } = useParams(); // Get userId from route parameters
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details
    axios.get(`http://localhost:8000/recipes/user/${userId}/`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  }, [userId]);

  if (!user) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      {user.profile_picture && (
        <img src={user.profile_picture} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
      )}
      <h2 className="text-2xl font-bold text-center">{user.first_name} {user.last_name}</h2>
    </div>
  );
};

export default UserProfile;
