// page file for the route detail dropdown
import "./explorepage.css"
import MapDisplay from './MapDisplay';
import RouteDetailCard from './RouteDetailCard';
import { useState, useRef, useEffect } from "react";
import Search from './Search';
import RouteDetailDropdown from './RouteDetailDropDown';
import { supabase } from "../../Utility/config";


export default function ExplorePage() {

 const [location, setLocation] = useState("Brighton")
 const [dropdownRoute, setDropdownRoute] = useState(null)
 const [mapRoute, setMapRoute] = useState(0)
 const [locationRoutes, setLocationRoutes] = useState([])
 const [prevRoutes, setPrevRoutes] = useState([])


    function onClickSetRoute(id) {
        setMapRoute(id)
    }

    function onClickClose() {
        setDropdownRoute(null)
        window.scroll({
          top: 0,
          behavior: "smooth",
        })
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
          
          // if no location is found then we set location routes to empty
          if(data.length < 1) {
            setLocationRoutes([])
          }
          
          // if there is a location found, we set our LocationRoutes state to the array of data
          if(data && data.length > 0) {
            data.map(route => {
              let centerarr = new Array(route.center)
              let parsedCenter = JSON.parse(centerarr[0])
              return route.center = parsedCenter
            })
         

            setLocationRoutes(data)
          }
        }
        // now that we have defined the function, we check if there is a location, and then call our function that calls the api.
        if(location) {
        fetchRoutesByLocation(location)
        }

    },[location] // this useEffect is triggered whenever the location state changes

    
    )

const ref = useRef(null)

useEffect(() => {
    const scrollDown = () => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };
    setTimeout(scrollDown, 500);
  
  }, [dropdownRoute]);


    return (
        <div className="explore-page" id="explore">
            <div className="map-section">
                <div className="left-hand-map-panel"> 
                    <Search setLocation={setLocation}/>
                    <div className="route-cards">
                    {locationRoutes.length>0?locationRoutes.map((route, index)=> <RouteDetailCard onClick={onClickSetRoute} onClickButton={(index) => setDropdownRoute(index) } key={route.id} {...route} index={index} activeRoute={mapRoute}/>):<h2 style={{color: '#f19e38'}}>No Routes Found</h2>}
                    </div>
                </div>
                <MapDisplay routeDetailArray={locationRoutes} activeRoute={mapRoute} prevRoutes={prevRoutes} setActiveRoute={setMapRoute}/>
            </div>
            <div className="orange-line"></div>
            {locationRoutes[dropdownRoute] ? <RouteDetailDropdown ref={ref} onClick={onClickClose} {...locationRoutes[dropdownRoute]}/> : <></>}
        </div>
    )
}

/* 
This is the main page for the explore page. 
It contains the search bar and the route cards in a panel on the left hand side. 
Then it shows the map display on the right hand side. If route is clicked it takes you to the drop down. 
*/