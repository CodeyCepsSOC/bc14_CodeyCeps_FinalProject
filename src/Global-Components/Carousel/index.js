import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselCard from './CarouselCard'
import "./index.css"

export default function CarouselHomePage(props) {
        return (
            <Carousel centerMode centerSlidePercentage={33.3} className="carousel" infiniteLoop={true}>
                {props.arr.map((image) => {return <CarouselCard {...image}/>})} {/* map throught the array of props and render a carousel card for each, handing in the information from each index as the props */}
            </Carousel>
        );
    };

/* Installed the react responsive carousel npm package - once installed I created a React component as usual e.g. export deafualt Function
within this there is the <Carousel> tag (which is provided by the npm install of react responsive router) between the opening and closing 
<Carousel> </Carousel> tags there are divs for each image or section of the carousel - within each div there is an image and another 
div which contains all of the event information as a h2 and p tag. To get 3 images to display on the Carousel instead of 1 you need to 
pass props to <Carousel> - these props are provided and appear in the docs on npm website. For our case we needed to do centerMode={true}, 
centerSlidePercentage={33.3%} - this displays 3 images. I also used infiniteLoop={true} so that it can loop through all divs infinitley.
See the css page for styling notes.
*/