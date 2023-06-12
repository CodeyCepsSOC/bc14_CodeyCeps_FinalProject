// page file for the route detail dropdown
import "./explorepage.css"
import MapDisplay from './MapDisplay';
import RouteDetailCard from './RouteDetailCard';
import Search from './Search';

export default function ExplorePage() {
 // defining route detail card props in an object to make it easier to pass to the component. Hard coded for now.
    let routeDetailCardProps = {
    name: "Route Name",
    time: "1 hour",
    icons: ["dog", "water", "bathroom"],
    description: "This is a route description"
 }

    return (
        <div className="explore-page">
            <div className="left-hand-map-panel"> 
                <Search/>
                <div className="route-cards">
                    <RouteDetailCard {...routeDetailCardProps}/>
                    <RouteDetailCard {...routeDetailCardProps}/>
                    <RouteDetailCard {...routeDetailCardProps}/>
                </div>
            </div>
            <MapDisplay />
        </div>
    )
}

/* 
This is the main page for the explore page. 
It contains the search bar and the route cards in a panel on the left hand side. 
Then it shows the map display on the right hand side.
*/