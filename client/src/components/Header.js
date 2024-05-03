import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const links = [
        { id: 1, name: "Explore", path: "/" },
        { id: 2, name: "Learn & Practice", path: "/" },
        { id: 3, name: "Quizzes", path: "/" },
        { id: 4, name: "Pricing", path: "/" }
    ];

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="header-container">
            <div className="logo-container">
                <img src={logo} alt="logo" className="logo" />
                <button className="menu-icon" onClick={toggleSidebar}>
                    <FaBars size={20} />
                </button>
                <ul className={`header-links ${isSidebarOpen ? "open" : ""}`}>
                    <li className='close-button-container'>
                        <button className="close-icon" onClick={toggleSidebar}>
                            <FaTimes size={20} />
                        </button>
                    </li>
                    {links.map((link) => (
                        <li key={link.id} className="header-link" onClick={toggleSidebar}>{link.name}</li>
                    ))}
                </ul>
            </div>
            <button className="login-button">Login</button>
        </div>
    );
};

export default Header;
