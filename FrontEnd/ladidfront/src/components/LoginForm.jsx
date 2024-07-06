import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/users/login/', {
                username: formData.username,
                password: formData.password
            });

            // Handle successful login, e.g., store token in local storage
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.user_id);
            alert('Login successful!');
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Failed to log in. Check your credentials.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-yellow-400 via-yellow-300 to-gray-200">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 max-w-md w-full space-y-4">
                <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
                <div className="mb-6">
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
                <div className="mb-6">
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
                <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md font-bold hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
