// page file for the route detail dropdown
import "./explorepage.css"
import MapDisplay from './MapDisplay';
import RouteDetailCard from './RouteDetailCard';
import { useState } from "react";
import Search from './Search';
import RouteDetailDropdown from './RouteDetailDropDown';

export default function ExplorePage() {
 // defining route detail card props in an object to make it easier to pass to the component. Hard coded for now.

 const [activeRoute, setActiveRoute] = useState(0)

    let routeDetailArray = [
        {
            name: "Hildas Walk",
            time: "1 hour",
            icons: ["dog-friendly", "coffee-shop", "toilets"],
            description: "This is a route description",
            map: './walk1.jpeg',
            img: './walk1.jpeg',
            id: 0,
            distance: 5
         },
         {
            name: "Isaacs Walk",
            time: "3 hour",
            icons: ["viewpoint", "coffee-shop", "dog-friendly"],
            description: "This is a route description",
            map: './walk2.jpeg',
            img: './walk2.jpeg',
            id:1,
            distance: 10
         },
         {
            name: "Samis Walk",
            time: "2 hour",
            icons: ["dog-friendly", "viewpoint", "toilets"],
            description: "This is a route description",
            map: './walk3.jpeg',
            img: './walk3.jpeg',
            id: 2,
            distance: 21
         }
    ]
    
    function onClickSetRoute(id) {
        setActiveRoute(id)
    }

    return (
        <div className="explore-page">
            <div className="map-section">
                <div className="left-hand-map-panel"> 
                    <Search/>
                    <div className="route-cards">
                    {routeDetailArray.map((route)=> <RouteDetailCard onClick={onClickSetRoute} key={route.id} {...route}/>)}

                    </div>
                </div>
                <MapDisplay />
            </div>
            <RouteDetailDropdown {...routeDetailArray[activeRoute]}/>
        </div>
    )
}

/* 
This is the main page for the explore page. 
It contains the search bar and the route cards in a panel on the left hand side. 
Then it shows the map display on the right hand side.
*/