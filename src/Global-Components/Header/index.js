import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './header.css';
import { handleLogOut } from '../../Utility/logout';


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
	navLinks.classList.toggle('active')
});

export default function Header(props) {
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
                <a href="#" className="toggle-button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
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
                        <li>
                            {props.user ? <h4>welcome back {props.user.firstName}</h4>:<Link to="/loginpage"><button className="signupBtn">Sign In</button></Link>}
                        </li>
                    </ul>
            </div>
            
            <Outlet />
        </nav>
    )
}