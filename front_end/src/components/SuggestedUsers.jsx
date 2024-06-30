import React from 'react';

const randomUsers = [
    { id: 1, profile_picture: '/img/user1.png', name: 'Mohammed Ahmed' },
    { id: 2, profile_picture: '/img/user2.png', name: 'Sara Ali' },
    { id: 3, profile_picture: '/img/user3.png', name: 'Nour Abdullah' },
    { id: 4, profile_picture: '/img/user4.png', name: 'Rima Mahmoud' },
    // Add more users as needed
];

const SuggestedUsers = () => (
    <div className="suggested-users m-5 p-5 border border-gray-300 rounded-lg bg-green-100 overflow-hidden overflow-ellipsis whitespace-nowrap">
        <h2 className="text-xl font-bold mb-4">Suggested Users</h2>
        {randomUsers.map(user => (
            <div key={user.id} className="user-card flex items-center mb-2 shadow-md p-2 bg-white rounded">
                <img className="rounded-full mr-2 shadow-md w-10 h-10" src={user.profile_picture} alt={user.name} />
                <p className="text-gray-700">{user.name}</p>
            </div>
        ))}
    </div>
);

export default SuggestedUsers;
