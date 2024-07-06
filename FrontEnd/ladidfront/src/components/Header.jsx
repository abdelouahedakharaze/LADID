// components/Header.jsx

import React from 'react';
import Logo from './Logo';
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
       <div className="drop-shadow-2xl shadow-black"><Logo /></div> 
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">Contact</a>
            </li>
            <li>
              <a href="/profile" className="hover:text-gray-300">Profile</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
