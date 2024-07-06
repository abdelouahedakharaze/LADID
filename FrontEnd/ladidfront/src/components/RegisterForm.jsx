import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        profile_picture: null
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            profile_picture: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formPayload = new FormData();
        formPayload.append('username', formData.username);
        formPayload.append('email', formData.email);
        formPayload.append('password', formData.password);
        formPayload.append('first_name', formData.first_name);
        formPayload.append('last_name', formData.last_name);
        formPayload.append('profile_picture', formData.profile_picture);

        try {
            await axios.post('http://127.0.0.1:8000/users/register/', formPayload, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('User registered successfully!');
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Failed to register user.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-yellow-400 via-yellow-300 to-gray-200">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 max-w-md w-full space-y-4">
                <h2 className="text-3xl font-bold text-center mb-4">Register</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                        required
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="file"
                        name="profile_picture"
                        onChange={handleFileChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md font-bold hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
