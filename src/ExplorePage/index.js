// page file for the route detail dropdown
import "./explorepage.css"
import MapDisplay from './MapDisplay';
import RouteDetailCard from './RouteDetailCard';
import Search from './Search';

export default function ExplorePage() {
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