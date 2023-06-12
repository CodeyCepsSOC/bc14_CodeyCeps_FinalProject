import React from 'react';
import {useState} from 'react';

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

function handleClick () {

}


function LandingPage () {
    return (
        <div>
            <h1>Want To Go For A Walk</h1>
            <img classname="heroimage" src="href" alt="hero"/>
            <button className="button" onClick={handleClick}>Start exploring...</button>
            <h2>Why WalkMate?</h2>
            <h3>Community</h3>
            <p classname="c1">lorem ipsum</p>
            <img classname="c1img" src="href" alt="circle" />
            <h3>Everyone Welcome</h3>
            <p classname="ew1">lorem ipsum</p>
            <img classname="ew1img" src="href" alt="triangle"/>
            <h3>Everyone Welcome</h3>
            <p classname="ew2">lorem ipsum</p>
            <img classname="ew2img" src="href" alt="arrow1"/>
            <h3>Reliable</h3>
            <p classname="r1">lorem ipsum</p>
            <img classname="r1img" src="href" alt="arrow2"/>
        </div>
    )
}


export default LandingPage;