import React from 'react';

const Post = ({ post, user }) => (
  <div className="post bg-white rounded-lg shadow-md p-4 mb-4">
    <div className="flex items-center mb-2">
      <img src={user.profile_picture} alt={user.name} className="w-8 h-8 rounded-full mr-2" />
      <p className="text-sm">{user.name}</p>
    </div>
    <img src={post.image} alt={post.title} className="w-full rounded-lg mb-2" />
    <h2 className="text-lg font-bold mb-2">{post.title}</h2>
    <p className="text-gray-700 mb-4">{post.text}</p>
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <button className="text-blue-500 hover:text-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
          {post.hearts}
        </button>
      </div>
      <div>
        <button className="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default Post;
