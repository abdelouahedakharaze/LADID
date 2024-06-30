import React from 'react';
import Post from '../components/Post'; // Adjust path as necessary

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    
    profile_picture: '/img/user1.png', // Replace with actual profile picture URL
    followers: 40, // Replace withus actual number of followers
    bio: 'Food enthusiast, chef, and explorer of culinary delights.', // Replace with actual bio
  };

  const posts = [
    { id: 1, image: '/img/Lemon_Herb.jpg', title: 'Delicious Pizza', text: 'This is a delicious pizza!', hearts: 10 },
    { id: 2, image: '/img/Roasted_Cauliflower.jpg', title: 'Tasty Burger', text: 'This burger is so tasty!', hearts: 8 },
    // Add more posts as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <img src={user.profile_picture} alt={user.name} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.bio}</p>
          <p className="text-gray-600">{user.followers} followers</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {posts.map(post => (
          <Post key={post.id} post={post} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
