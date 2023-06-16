import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./index.css"

//see below the function for notes

export default function CarouselHomePage() {
        return (
            <Carousel centerMode centerSlidePercentage={33.3} className="carousel" infiniteLoop={true}>
                <div className="div1carousel">
                    <img className="event1" src="./hero_image.jpg" alt="beautiful route"/>
                    <div className="legend">
                        <h2>Lone Ranger Expidition</h2>
                        <p>TEXT TEXT</p>
                    </div>
                </div>
                <div className="div2carousel">
                    <img className="event2" src="./random.jpg" alt="beautiful route"/>
                    <div className="legend">
                        <h2>Lakeside Family Trail</h2>
                        <p>TEXT TEXT</p>
                    </div>
                </div>
                <div className="div3carousel">
                    <img className="event3" src="./random2.jpg" alt="beautiful route" />
                    <div className="legend">
                        <h2>Forest Fun Run</h2>
                        <p>TEXT TEXT</p>
                    </div>
                </div>
                <div className="div4carousel">
                    <img className="event4" src="./random3.jpg" alt="beautiful route" />
                    <div className="legend">
                        <h2>Group Social Adventure</h2>
                        <p>TEXT TEXT</p>
                    </div>
                </div>
            </Carousel>
        );
    }

/* Installed the react responsive carousel npm package - once installed I created a React component as usual e.g. export deafualt Function
within this there is the <Carousel> tag (which is provided by the npm install of react responsive router) between the opening and closing 
<Carousel> </Carousel> tags there are divs for each image or section of the carousel - within each div there is an image and another 
div which contains all of the event information as a h2 and p tag. To get 3 images to display on the Carousel instead of 1 you need to 
pass props to <Carousel> - these props are provided and appear in the docs on npm website. For our case we needed to do centerMode={true}, 
centerSlidePercentage={33.3%} - this displays 3 images. I also used infiniteLoop={true} so that it can loop through all divs infinitley.
See the css page for styling notes.
*/