/*h1 element for route title
import carousel functionality from landing page carousel;
draft placeholder
import details bar functionality fom details bar js file,
static image of route - with route map
p tag for brief description
*/
import './routedetailsdropdown.css'
import DetailsBar from './DetailsBar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CarouselHomePage from '../../../Global-Components/Carousel';
import { ExplorePageCarouselInfo } from '../../../Utility/data';

function RouteDetailDropdown(props) {



return (
    <div className="route-details-dropdown">
        <button className="close-button" onClick={props.onClick}>X</button>
        <h1>{props.name}</h1>
        <div className="explore-carousel">
            <CarouselHomePage arr={ExplorePageCarouselInfo} />
        </div>
        <DetailsBar {...props}/>
        <section className="dropdown-body">            
            <p>{props.description}</p>
            <img src={props.map} alt="route map" id="map-image"/>
        </section>
    </div>
) 
};

export default RouteDetailDropdown;