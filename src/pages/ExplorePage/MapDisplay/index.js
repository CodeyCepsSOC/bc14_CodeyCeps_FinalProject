// map display from API
import React, { useRef, useEffect, useState } from 'react';
import './mapdisplay.css'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { matchPath } from 'react-router-dom';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY

function addRouteLayer(map, routeName, coordinates, id) {

    map.current.addSource(id, {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'LineString',
        'coordinates': coordinates
        }
        }
        });
        map.current.addLayer({
        'id': routeName,
        'type': 'line',
        'source': id,
        'layout': {
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
        'line-color': '#354C33',
        'line-width': 8
        }
        });
        }

export default function MapDisplay(props) {


const mapContainer = useRef(null)
const map = useRef(null)

useEffect(()=> {
    if (map.current) return; // initialize map only once

    // Initialize map

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [-0.07204564221953547, 50.8738136495931],
      zoom: 5,
    });
},[])

useEffect(()=> {
    //render initial routes on map
    // on initial load, map through the array of all routes. For each route, call the addRouteLayer function, handing in the details of that route to 
    // display it on the map
        props.prevRoutes.map(route => {
             if (map.current.getLayer(route.name)) {
                map.current.removeLayer(route.name);
            }})
        if (props.routeDetailArray.length<1) return 

        props.routeDetailArray.map((route) => { 
            if (map.current.getLayer(route.name)) {
                map.current.removeLayer(route.name);
            }
            
            if (map.current.getSource(route.id)) {
                map.current.removeSource(route.id);
            }
            return(
            addRouteLayer(map, route.name, route.coordinatearray, route.id)
            )})


    // REMOVE BEFORE PUSHING TO PRODUCTION
    // the below function console.logs the long and lat of where the user clicks on the map, it is used here to 
    // find the center point of a route for the below function that allows the map to recenter over the active route.
    map.current.on('click', (e) => {
    console.log(`A click event has occurred at ${e.lngLat}`);
    });
    
    }, [props.routeDetailArray])

    // the below function recenters the viewpoint of the map smoothly over whichever route has been clicked by the user from 
    // the left hand list of routes.
useEffect(()=> {


    map.current.flyTo({
        center: props.routeDetailArray[props.activeRoute]?.center,
        zoom: 12
    })
}, [props.activeRoute, props.routeDetailArray])
    return (<div ref={mapContainer} className="map-container"/>)
}

/* this components renders the map onto the page, line 6 assigns the api key stored in the .env 
file to the access token of the mapboxgl package. The use of useRef allows us to change the map container without causing a complete
rerender of the page. We assign a new mapboxgl.map object to the map ref, which is then appended to the div below.


| Displaying routes on map plan |

- To create a geoJSON source (which is like a element in figma, it is an array of an array of cordinates)
    - Find routes online and download them as a gpx file 
    - Convert the gpx file to a geoJSON file using a converter online

- Then we want to place that source as a layer on top of the map
    - Mapbox has a .addlayer function, the type will be a line 
    - We can then style the line using the paint property
    - We can also add a filter to the layer to only show the route when it is selected

- We could add an on hover or on click effect to the layer
*/