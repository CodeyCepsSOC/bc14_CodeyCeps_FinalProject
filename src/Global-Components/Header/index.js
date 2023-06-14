import react from 'react';
import './style.css';



export default function Header() {
    return (
        <div>
            <ul className="logo">
                <li>Logo - WalkMate</li>
            </ul>
            <ul className="navlinks">
                <li>About us</li>
                <li>Explore</li>
                <li>Community</li>
                <li><button>Sign up</button></li>
            </ul>
        </div>
    )
}