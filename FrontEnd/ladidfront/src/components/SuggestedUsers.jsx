import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SuggestedUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchRandomUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/users/users/');
                const allUsers = response.data;
                
                // Select 5 random users
                const randomIndexes = getRandomIndexes(allUsers.length, 5);
                const randomUsers = randomIndexes.map(index => allUsers[index]);
                
                setUsers(randomUsers);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchRandomUsers();
    }, []);

    // Function to generate random indexes
    const getRandomIndexes = (max, count) => {
        const indexes = [];
        while (indexes.length < count) {
            const randomIndex = Math.floor(Math.random() * max);
            if (!indexes.includes(randomIndex)) {
                indexes.push(randomIndex);
            }
        }
        return indexes;
    };

    return (
        <div className="suggested-users-container">
            <h2 className="text-2xl font-bold mb-4">Suggested Users</h2>
            <div className="space-y-4">
                {users.map(user => (
                    <div key={user.id} className="flex items-center bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 text-gray-800 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                        <img src={user.profile_picture} alt="Profile" className="w-16 h-16 rounded-full mr-4" />
                        <div>
                            <p className="font-semibold">{user.first_name} {user.last_name}</p>
                            <p className="text-gray-600">@{user.username}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuggestedUsers;
