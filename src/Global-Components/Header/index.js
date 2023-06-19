import React from 'react';
import { NavLink, Outlet, Link } from "react-router-dom";
import './header.css';



export default function Header() {
    return (
        <nav className="header">
            <div className="logo">
                <img src="./Logo.svg" alt="WalkMate Logo"/>
                <h2 className="navbarh2">WalkMate</h2>
            </div>
            <div className="nav-links">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/explore">Explore</NavLink>
                        </li>
                        <li>Community</li>
                        <li><button className = "signupBtn">Sign up</button></li>
                    </ul>
            </div>
            <Outlet />
        </nav>
    )
}