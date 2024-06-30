import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'; // Adjust path as per your project structure

const Header = () => (
  <header className="bg-gray-800 p-4 shadow-md flex justify-between items-center">
    <Logo />
    <nav>
      <Link to="/" className="text-gray-300 hover:text-white mx-2">Home</Link>
      <Link to="/login" className="text-gray-300 hover:text-white mx-2">Login</Link>
      <Link to="/register" className="text-gray-300 hover:text-white mx-2">Register</Link>
    </nav>
  </header>
);

export default Header;
