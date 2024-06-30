import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import NavigationPage from './pages/NavigationPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/UserProfile';
import './styles/tailwind.css'; 

const App = () => (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<NavigationPage />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
        <Footer />
    </Router>
);

export default App;
