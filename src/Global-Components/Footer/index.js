import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <nav className="footer">
      <div className="footer-logo-title">
        <img src="./assets/logo.svg" alt="WalkMate Homepage footer logo" />
        <h2>WalkMate</h2>
    
      </div>

      <div className="footer-links">
        
        <div className="footer-column">
          <ul>
            <img className="minilogo" src="/assets/circleNoBg.png" alt="home" />
              <li><Link to="/#home">Home</Link></li>
              <li><Link to="/#about-us">About us</Link></li>
              <li><Link to="/#events">Events</Link></li>
          </ul>
        </div>

        <div id="footer-explore" className="footer-column">
          <ul>
            <img className="minilogo" src="/assets/flagdownNoBg.png" alt="explore" />
            <li><Link to="/explore#explore">Explore</Link></li>
          </ul>
        </div>

        <div id="footer-community" className="footer-column">
          <ul>
            <img className="minilogo" src="/assets/triangle_cream.png" alt="community" />
            <li>Community</li>
          </ul>
        </div>

        <div id="footer-signup" className="footer-column">
          <ul>
            <img className="minilogo" src="/assets/flagupNoBg.png" alt="signup" />
            <li>Sign up</li>
            <li> Contact us </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
