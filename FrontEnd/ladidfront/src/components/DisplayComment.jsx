import React from 'react';

const DisplayComment = ({ comment }) => {
    const { text, author } = comment;
    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            {author && (
                <div className="flex items-center mb-2">
                    {author.profile_picture && (
                        <img
                            src={author.profile_picture}
                            alt={`${author.first_name} ${author.last_name}`}
                            className="w-8 h-8 rounded-full mr-2"
                        />
                    )}
                    <span className="font-semibold">{author.first_name} {author.last_name}</span>
                </div>
            )}
            <p className="text-gray-700">{text}</p>
        </div>
    );
};

export default DisplayComment;
