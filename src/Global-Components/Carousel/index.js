import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./carousel.css"

export default function CarouselHomePage() {
        return (
            <Carousel centerMode centerSlidePercentage={33.3} className="carousel">
                <div className="div1carousel">
                    <img className="test1" src="./hero_image.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div className="div2carousel">
                    <img className="test2" src="./random.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div className="div3carousel">
                    <img className="test3" src="./random2.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="div4carousel">
                    <img className="test4" src="./random3.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        );
    }
