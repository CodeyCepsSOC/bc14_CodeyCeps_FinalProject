import React from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";

import { handleLogOut } from '../../Utility/logout';
import './header.css';

export default function Header(props) {
   const {setSession, setUser} = props
    const navigate = useNavigate();
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
                        <li>
                        {props.user ? <button className="signupBtn"onClick={()=> {handleLogOut(setSession, setUser); navigate('/')}}>Log Out</button>:<Link to="/loginpage"><button className="signupBtn">Sign In</button></Link>}
                        </li>
                    </ul>
            </div>
            
            <Outlet />
        </nav>
    )
}