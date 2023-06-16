import react from 'react';
import './header.css';



export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src="./Logo.svg" alt="WalkMate Logo"/>
                <h2 className="navbarh2">WalkMate</h2>
            </div>
            <div className="nav-links">
                <ul>
                    <li>About us</li>
                    <li>Explore</li>
                    <li>Community</li>
                    <li><button className = "signupBtn">Sign up</button></li>
                </ul>
            </div>
        </div>
    )
}