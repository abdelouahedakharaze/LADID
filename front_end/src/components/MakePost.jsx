import React from 'react';

const MakePost = () => (
    <div className="make-post m-5 p-5 border border-gray-300 rounded-lg bg-pink-100">
        <h2 className="text-xl font-bold mb-4">Make a Post</h2>
        <form className="space-y-4">
            <input
                type="text"
                placeholder="Title"
                className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
                placeholder="Text"
                className="w-full p-2 border border-gray-300 rounded h-32"
            ></textarea>
            <input
                type="file"
                accept="image/*"
                className="w-full p-2 border border-gray-300 rounded"
            />
            <button
                className="btn inline-block px-6 py-3 bg-blue-500 text-white font-bold rounded text-center no-underline cursor-pointer md:px-4 md:py-2"
                type="submit"
            >
                Post
            </button>
        </form>
    </div>
);

export default MakePost;
