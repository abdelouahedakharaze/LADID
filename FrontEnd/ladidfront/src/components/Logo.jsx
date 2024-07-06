// components/Logo.jsx

import React from 'react';

const Logo = () => {
    return (
        <div className="max-w-xs mx-auto">
            <div className="flex items-center justify-center h-12 px-3 bg-orange-600 text-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
                <h1 className="text-3xl font-extrabold tracking-wide">
                    L<span className="text-orange-300">A</span>D<span className="text-orange-300">I</span>D
                </h1>
            </div>
        </div>
    );
};

export default Logo;
