// page file for the route detail dropdown

import MapDisplay from './MapDisplay';
import RouteDetailCard from './RouteDetailCard';

export default function ExplorePage() {


    return (
        <div className="explore-page">
            <RouteDetailCard />
            <MapDisplay />
        </div>
    )
}