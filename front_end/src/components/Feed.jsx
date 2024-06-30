import React from 'react';
import Post from './Post';

// Dummy user data
const users = [
    { id: 1, name: 'John Doe', profile_picture: '/img/user1.png' },
    { id: 2, name: 'Jane Smith', profile_picture: '/img/user2.png' },
    { id: 3, name: 'Bob Johnson', profile_picture: '/img/user3.png' },
    // Add more users as needed
];

// Updated randomPosts data with user information
const randomPosts = [
    { id: 1, user: users[0], image: '/img/Lemon_Herb.jpg', title: 'Delicious Pizza', text: 'In the heart of a bustling city, where the rhythm of life never seems to slow, there exists a hidden alleyway. Its cobblestone path winds like a serpent through a maze of old buildings adorned with ivy-clad walls. The air here carries whispers of stories long forgotten, mingling with the aroma of freshly baked bread from a nearby bakery. Shadows dance playfully as sunlight filters through the narrow gaps between buildings, casting a mosaic of light and dark on the worn stones below. This alley, though tucked away from the main streets, pulses with a quiet energy, drawing in wanderers who seek solace in its tranquil embrace. Here, amidst the urban chaos, time seems to pause, allowing a moment of reflection or perhaps a chance encounter that could change the course of a day, or even a lifetime.' },
    { id: 2, user: users[1], image: '/img/Roasted_Cauliflower.jpg', title: 'Tasty Burger', text: 'This burger is so tasty!' },
    { id: 3, user: users[2], image: '/img/Spinach_Ricotta.jpg', title: 'Healthy Salad', text: 'This salad is very healthy!' },
    { id: 4, user: users[0], image: '/img/Thai_Peanut.jpg', title: 'Spicy Noodles', text: 'These noodles are spicy!' },
];

const Feed = () => (
    <div className="feed m-5 p-5 border border-gray-300 rounded-lg bg-blue-100">
        {randomPosts.map(post => (
            <Post key={post.id} post={post} user={post.user} />
        ))}
    </div>
);

export default Feed;
