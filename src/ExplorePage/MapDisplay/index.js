// map display from API
import React, { useRef, useEffect, useState } from 'react';
import './mapdisplay.css'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

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

}, [])


    return (
        <div ref={mapContainer} className="map-container"/>
    )
}

/* this components renders the map onto the page, line 6 assigns the api key stored in the .env 
file to the access token of the mapboxgl package. The use of useRef allows us to change the map container without causing a complete
rerender of the page. We assign a new mapboxgl.map object to the map ref, which is then appended to the div below.
*/