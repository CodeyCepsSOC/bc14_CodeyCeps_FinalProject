/*h1 element for route title
import carousel functionality from landing page carousel;
draft placeholder
import details bar functionality fom details bar js file,
static image of route - with route map
p tag for brief description
*/

import react from 'react';
import DetailsBar from './DetailsBar';

function RouteDetailDropdown(props) {
return (
    <div>
        <h1>{props.name}</h1>
        <div className="carousel">
        </div>
        <DetailsBar {...props}/>
        <section className="dropdown-body">            
            <p>{props.description}</p>
            <img src={props.map} alt="route map"/>
        </section>
    </div>
) 
};

export default RouteDetailDropdown;