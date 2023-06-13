import React from "react";
import { useState } from "react";
import "./index.css";

/*

Create Hero Image
    - wrap image in a div


Create CTA
    - Create button
    - On-click, navigate to map page
    - Utilize colour palette from hi-fi wireframe


Create About Us
    - Create About Us section - wrap in p tags
    - add relevant background images

Create Upcoming Events Carousel (cards that you can scroll through - component that will be reused)

*/

/*function App() {
    const [map, getMapl] = useState(null);
    const [map, setMap] = useState(null);
}

function MyButton() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }
*/

function handleClick() {}

function LandingPage() {
  return (
    <div>
      <div className="section1">
        <h1>Want To Go For A Walk</h1>
        {/* <img
          style={{ width: "100%", height: "100%" }}
          classname="heroimage1"
          src="./hero_image.jpg"
          alt="countryside scenic views"
        /> */}
        <button className="button" onClick={handleClick}>
          Start exploring...
        </button>
      </div>

      <div className="section2">
        <h2>Why WalkMate?</h2>
          <div className="community">
            <h3>Community</h3>
            <p className="communityP">
              WalkMate is community-driven, we regularly host events to suit
              everyone. We connect people through nature and nature through people.
            </p>
            {/* <img className="circleimg" src="./circle.jpg" alt="circle" /> */}
          </div>
          <div className="welcome1">
            <h3>Everyone Welcome</h3>
            <p className="everyoneWelcomeP">
              Whether you're an avid walker, or someone who has never taken
              advantage of our stunning landscapes. There is something for everyone
              at WalkMate.
            </p>
            
          </div>
          <div className="enjoyable">
            <h3>Enjoyable</h3>
            <p className="enjoyableP">
              WalkMate is community-driven, we regularly host events to suit
              everyone. We connect people through nature and nature through people.
            </p>
            
          </div>
          <div className="reliable">
            <h3>Reliable</h3>
            <p className="reliableP">
              100% of our users have given us a 5 star rating in terms of
              reliability. Our routes are safe, secure and our events are all
              planned meticulously according to weather predictions.
            </p>
            
          </div>
      </div>
    </div>
  );
}

export default LandingPage;
