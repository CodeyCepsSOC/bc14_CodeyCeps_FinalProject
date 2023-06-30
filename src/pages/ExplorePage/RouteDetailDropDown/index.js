
import './routedetailsdropdown.css'
import DetailsBar from './DetailsBar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CarouselHomePage from '../../../Global-Components/Carousel';
import { ExplorePageCarouselInfo } from '../../../Utility/data';
import { forwardRef,  } from 'react';

const RouteDetailDropdown = forwardRef((props, ref) => {
let {carousel_images} = props
if (!carousel_images) {
    carousel_images = ExplorePageCarouselInfo
}

return (
    <div className="route-details-dropdown" ref={ref}>
        <button className="close-button" onClick={props.onClick}>X</button>
        <h1>{props.name}</h1>
        <div className="explore-carousel">
            <CarouselHomePage arr={carousel_images} />
        </div>
        <img src="./assets/walk1.jpeg" alt="scene from route" id="mobile-img"/>
        <DetailsBar {...props}/>
        <section className="dropdown-body">            
            <p>{props.description}</p>
            <img src={props.map} alt="route map" id="map-image"/>
        </section>
    </div>
) 
}
)


export default RouteDetailDropdown;