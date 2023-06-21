// page file for the route detail dropdown
import "./explorepage.css"
import MapDisplay from './MapDisplay';
import RouteDetailCard from './RouteDetailCard';
import { useState, useEffect } from "react";
import Search from './Search';
import RouteDetailDropdown from './RouteDetailDropDown';
import { supabase } from "../../Utility/config";

export default function ExplorePage() {

 const [location, setLocation] = useState("Brighton")
 const [activeRoute, setActiveRoute] = useState(0)
 const [locationRoutes, setLocationRoutes] = useState([])
 const [prevRoutes, setPrevRoutes] = useState([])


    function onClickSetRoute(id) {
        setActiveRoute(id)
    }

    function onClickClose() {
        setActiveRoute(null)
    }


    useEffect(() => { 
      
      // this useEffect calls our database every time the location state is changed by a user clicking submit on the searchbar
      // first we define a function that uses the supabase built in functionality to make a sql query that selects all routes from the 
      // database where the location column is equal to the location state
        async function fetchRoutesByLocation(location) {
          setPrevRoutes(locationRoutes)
          setLocationRoutes([])
          const {data, error} = await supabase
          .from('walks')
          .select()
          .ilike('location', location)
          
          // if no location is found then we console.log a message
          if(data.length < 1) {
            setLocationRoutes([])
            console.log('no routes found in that location!')
          }
          
          // if there is a location found, we console.log the info and set our LocationRoutes state to the array of data
          if(data && data.length > 0) {
            data.map(route => {
              let centerarr = new Array(route.center)
              let parsedCenter = JSON.parse(centerarr[0])
              return route.center = parsedCenter
            })
            data[0].center.map(data=> console.log(data))

            setLocationRoutes(data)
          }
        }
        // now that we have defined the function, we check if there is a location, and then call our function that calls the api.
        if(location) {
        fetchRoutesByLocation(location)
        console.table(locationRoutes)
        }

    },[location] // this useEffect is triggered whenever the location state changes

    
    )

    return (
        <div className="explore-page" id="explore">
            <div className="map-section">
                <div className="left-hand-map-panel"> 
                    <Search setLocation={setLocation}/>
                    <div className="route-cards">
                    {locationRoutes.length>0?locationRoutes.map((route, index)=> <RouteDetailCard onClick={onClickSetRoute} key={route.id} {...route} index={index}/>):<h2 style={{color: '#f19e38'}}>No Routes Found</h2>}
                    </div>
                </div>
                <MapDisplay routeDetailArray={locationRoutes} activeRoute={activeRoute} prevRoutes={prevRoutes}/>
            </div>
            {locationRoutes[activeRoute] ? <RouteDetailDropdown {...locationRoutes[activeRoute]} onClick={onClickClose}/> : <></>}
        </div>
    )
}

/* 
This is the main page for the explore page. 
It contains the search bar and the route cards in a panel on the left hand side. 
Then it shows the map display on the right hand side.
*/