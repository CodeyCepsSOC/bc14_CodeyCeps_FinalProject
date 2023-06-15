import React from 'react';
import "./footer.css"

export default function Footer() {

return(
    <div className="footer"> 
        <div className="footer-logo-titile">
            <h1>WalkMate</h1>
            <img src="./Logo.svg" alt="logo"/>
        </div>
        
        <div className="footer-links">
            <div className="home">
                <ul>
                <img src="href" alt="home"/>
                <li>Home</li>
                <li>About us</li>
                <li>events</li>
                </ul>
            </div>

            <div className="footer-explore">
                <ul>
                <img src="href" alt="explore"/>
                <li>Explore</li>
                </ul>
            </div>

            <div className="footer-community">
                <ul>
                <img src="" alt="community"/>
                <li>Community</li>
                </ul>
            </div>

            <div className="footer-signup">
                <ul>
                <img src="href" alt="signup"/>
                <li>Sign up</li>
                </ul>
            </div>
        </div>
    </div>
)
};