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

function aboutUs () {
    return (
        <div>
            <p classname = >para 1</p>
            <p2>para 2</p2>
            <p3>para 3</p3>
            <p4>para 3</p4>
        </div>

    )
}

function LandingPage () {
    return (
        <div>
            <h1>Want To Go For A Walk</h1>
            <img classname="heroimage" src={href} alt={hero.image}/>
            <button className="button" onClick={handleClick}>Start exploring...</button>
            <p></p>
        </div>
    )
}


export default LandingPage;