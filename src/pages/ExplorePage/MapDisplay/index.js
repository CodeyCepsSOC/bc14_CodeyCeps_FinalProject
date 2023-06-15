// map display from API
import React, { useRef, useEffect, useState } from 'react';
import './mapdisplay.css'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { matchPath } from 'react-router-dom';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY

export default function MapDisplay(props) {


const mapContainer = useRef(null)
const map = useRef(null)

useEffect(()=> {
    if (map.current) return; // initialize map only once

    // Initialize map

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [-0.087305, 50.861966],
      zoom: 11,
    });

    map.current.on('load', function () {
        map.current.addSource('route', {
            'type': 'geojson',
            'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'LineString',
            'coordinates': props.routeDetailArray[props.activeRoute].coordinateArray
            }
            }
            });
            map.current.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
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
)}, [props.activeRoute, props.routeDetailArray])


    return (
        <div ref={mapContainer} className="map-container"/>
    )
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