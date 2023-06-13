import React from "react";
import { useState } from "react";

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
      <div>
        <h1>Want To Go For A Walk</h1>
        <img
          style={{ width: "100%", height: "100%" }}
          classname="heroimage1"
          src="./hero_image.jpg"
          alt="countryside scenic views"
        />
        <button className="button" onClick={handleClick}>
          Start exploring...
        </button>
      </div>

      <h2>Why WalkMate?</h2>
      <h3>Community</h3>
      <p classname="communityP">
        WalkMate is community-driven, we regularly host events to suit everyone.
        We connect people through nature and nature through people.
      </p>
      <img classname="circleimg" src="href" alt="circle" />
      <h3>Everyone Welcome</h3>
      <p classname="everyoneWelcomeP">
        Whether you’re an avid walker, or someone who has never taken advantage
        of our stunning landscapes. There is something for everyone at WalkMate.
      </p>
      <img classname="triangleimg" src="href" alt="triangle" />
      <h3>Enjoyable</h3>
      <p classname="enjoyableP">
        WalkMate is community-driven, we regularly host events to suit everyone.
        We connect people through nature and nature through people.
      </p>
      <img classname="arrowimg" src="href" alt="arrow1" />
      <h3>Reliable</h3>
      <p classname="reliableP">
        100% of our users have given us a 5 star rating in terms of reliability.
        Our routes are safe, secure and our events are all planned meticulously
        according to weather predictions.
      </p>
      <img classname="arrowimg2" src="href" alt="arrow2" />
    </div>
  );
}

export default LandingPage;
