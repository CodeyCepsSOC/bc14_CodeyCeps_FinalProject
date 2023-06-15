// page file for the route detail dropdown
import "./explorepage.css"
import MapDisplay from './MapDisplay';
import RouteDetailCard from './RouteDetailCard';
import { useState } from "react";
import Search from './Search';
import RouteDetailDropdown from './RouteDetailDropDown';

export default function ExplorePage() {

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
            distance: 5,
            coordinateArray: [  [-0.087305, 50.861966],
            [-0.087767, 50.862192],
            [-0.088406, 50.863388],
            [-0.090415, 50.86353],
            [-0.09382, 50.86191],
            [-0.094887, 50.863522],
            [-0.097866, 50.865077],
            [-0.101194, 50.866847],
            [-0.101251, 50.869075],
            [-0.102085, 50.870559],
            [-0.102396, 50.873806],
            [-0.100748, 50.881361],
            [-0.100148, 50.884316],
            [-0.095066, 50.887123],
            [-0.09071, 50.891505],
            [-0.097029, 50.898539],
            [-0.10414, 50.900723],
            [-0.106738, 50.901782],
            [-0.105025, 50.900991],
            [-0.09976, 50.899455],
            [-0.091236, 50.899715],
            [-0.078377, 50.898458],
            [-0.069848, 50.897245],
            [-0.072141, 50.881828],
            [-0.077448, 50.877548],
            [-0.081315, 50.869934],
            [-0.076902, 50.865718],
            [-0.081207, 50.864111],
            [-0.08328, 50.863654],
            [-0.08615, 50.863442],
            [-0.088025, 50.86223],
            [-0.087305, 50.861966],
            ]
         },
         {
            name: "Isaacs Walk",
            time: "3 hour",
            icons: ["viewpoint", "coffee-shop", "dog-friendly"],
            description: "This is a route description",
            map: './walk2.jpeg',
            img: './walk2.jpeg',
            id:1,
            distance: 10,
            coordinateArray: [[-0.07111, 50.840358],
            [-0.075121, 50.840251],
            [-0.064682, 50.847759],
            [-0.053361, 50.850427],
            [-0.042812, 50.854196],
            [-0.039294, 50.855327],
            [-0.035777, 50.855919],
            [-0.029601, 50.858949],
            [-0.024713, 50.85624],
            [-0.022427, 50.856823],
            [-0.023965, 50.856087],
            [-0.028397, 50.857842],
            [-0.034037, 50.856623],
            [-0.035392, 50.855004],
            [-0.034141, 50.852739],
            [-0.031348, 50.850585],
            [-0.034275, 50.84951],
            [-0.036711, 50.846782],
            [-0.039016, 50.844792],
            [-0.038035, 50.842752],
            [-0.043029, 50.838316],
            [-0.045507, 50.835336],
            [-0.050338, 50.83342],
            [-0.053225, 50.834549],
            [-0.052652, 50.83566],
            [-0.047568, 50.83785],
            [-0.051146, 50.840347],
            [-0.055415, 50.841772],
            [-0.065335, 50.840973],
            [-0.06985, 50.841218],
            [-0.075121, 50.840251],
            [-0.07111, 50.840358]]
         },
         {
            name: "Samis Walk",
            time: "2 hour",
            icons: ["dog-friendly", "viewpoint", "toilets"],
            description: "This is a route description",
            map: './walk3.jpeg',
            img: './walk3.jpeg',
            id: 2,
            distance: 21,
            coordinateArray: []
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
                <MapDisplay routeDetailArray={routeDetailArray} activeRoute={activeRoute}/>
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