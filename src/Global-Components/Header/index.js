import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './header.css';



export default function Header() {
    return (
        <nav className="header">
            <div className="logo">
                <Link to="/">
                    <img src="./assets/Logo.svg" alt="WalkMate Logo"/>
                </Link>
                <Link to="/">
                <h2 className="navbarh2">WalkMate</h2>
                </Link>
            </div>
            <div className="nav-links">
                    <ul>
                        <li className='header-link'>
                            <Link to="/#home">Home</Link>
                        </li>
                        <li className='header-link'> 
                            <Link to="/explore#explore">Explore</Link>
                        </li>
                        <li className='header-link'>
                        <Link to="/community">Community</Link>
                        </li>
                        <li><button className = "signupBtn">Sign up</button></li>
                    </ul>
            </div>
            <Outlet />
        </nav>
    )
}