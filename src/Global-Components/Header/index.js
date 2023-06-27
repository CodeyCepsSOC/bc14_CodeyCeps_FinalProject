import React from 'react';
import {useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import './header.css';
import { handleLogOut } from '../../Utility/logout';

export default function Header(props) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

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
            <div className="burger-menu">
                <a href="#" className="toggle-button" onClick={handleClick}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
            </div>
            <div className={`nav-links ${isActive ? 'active' : ''}`}>
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
                        <li>
                            {props.user ? <h4>welcome back {props.user.firstName}</h4>:<Link to="/loginpage"><button className="signupBtn">Sign In</button></Link>}
                        </li>
                    </ul>
            </div>
            <Outlet />
        </nav>
    );
}