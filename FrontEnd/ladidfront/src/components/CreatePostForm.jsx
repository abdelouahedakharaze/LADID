import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [picture, setPicture] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(''); // State for selected user

  useEffect(() => {
    // Fetch list of users from Django backend
    axios.get('http://localhost:8000/users/users/')
      .then(response => {
        setUsers(response.data); // Assuming response.data is an array of user objects
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []); // Empty dependency array ensures this runs only once on component mount

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handlePictureChange = (e) => {
    setPicture(e.target.files[0]);
  };

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('text', text);
    formData.append('author', selectedUser); // Include selected user in form data
    if (picture) {
      formData.append('picture', picture);
    }

    try {
      await axios.post('http://localhost:8000/recipes/create/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle success, e.g., show a success message or redirect
      console.log('Post created successfully');
      // Reset form fields after successful submission
      setTitle('');
      setText('');
      setPicture(null);
      setSelectedUser('');
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 p-6 bg-green-500 rounded-lg shadow-lg">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-bold text-gray-700 mb-2">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" required />
      </div>
      <div className="mb-4">
        <label htmlFor="text" className="block text-sm font-bold text-gray-700 mb-2">Text:</label>
        <textarea id="text" value={text} onChange={handleTextChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-indigo-500" rows="4" required />
      </div>
      <div className="mb-4">
        <label htmlFor="picture" className="block text-sm font-bold text-gray-700 mb-2">Picture:</label>
        <input type="file" id="picture" accept="image/*" onChange={handlePictureChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="user" className="block text-sm font-bold text-gray-700 mb-2">User:</label>
        <select id="user" value={selectedUser} onChange={handleUserChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" required>
          <option value="">Select User</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.username}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="bg-indigo-600 transform transition-transform hover:scale-125 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Create Post</button>
    </form>
  );
};

export default CreatePostForm;
