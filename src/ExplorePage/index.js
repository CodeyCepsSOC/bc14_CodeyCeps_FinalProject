// page file for the route detail dropdown

import MapDisplay from './MapDisplay';
import RouteDetailCard from './RouteDetailCard';

export default function ExplorePage() {
 let routeDetailCardProps = {
    name: "Route Name",
    time: "1 hour",
    icons: ["dog", "water", "bathroom"],
    description: "This is a route description"
 }

    return (
        <div className="explore-page">
            <RouteDetailCard {...routeDetailCardProps}/>
            <MapDisplay />
        </div>
    )
}