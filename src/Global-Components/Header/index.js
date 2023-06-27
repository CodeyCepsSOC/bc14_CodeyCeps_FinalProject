import React from 'react';

import { Outlet, Link, useNavigate } from "react-router-dom";
import {useState} from 'react';
import { handleLogOut } from '../../Utility/logout';
import './header.css';

export default function Header(props) {
   const {setSession, setUser} = props
    const navigate = useNavigate();
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

                        {props.user ? <button className="signupBtn"onClick={()=> {handleLogOut(setSession, setUser); navigate('/')}}>Log Out</button>:<Link to="/loginpage"><button className="signupBtn">Sign In</button></Link>}

                        </li>
                    </ul>
            </div>
            <Outlet />
        </nav>
    );
}