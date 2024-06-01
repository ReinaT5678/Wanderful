import { mapStyles } from '../../css/exploreStyles'
import { css } from '@emotion/react'

import { useEffect, useRef, useState } from 'react'


// Mapbox
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY

// Will need a MapBox api key in .env.local file
// VITE_MAPBOX_API_KEY={insert your key}

// https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/

export default function MapDisplay({response, inputCoords, selectedPlace, setSelectedPlace}){


    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(inputCoords.results[0].geometry.lng);
    const [lat, setLat] = useState(inputCoords.results[0].geometry.lat);
    const [zoom, setZoom] = useState(15);

    // Default, with the help of ChatGPT
    useEffect(() => {
        if (map.current) return; // initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

        const marker = new mapboxgl.Marker({color: '#EDAFB8', zoom: 15,})
            .setLngLat([lng,lat])
            .addTo(map.current);


    },[]);

    useEffect(() => {

        if (selectedPlace.length === 0) return; 

        // console.log(selectedPlace)

        map.current.flyTo({
            center: [selectedPlace[0],selectedPlace[1]],
        });

        const marker2 =  new mapboxgl.Marker({color: '#4A5759'})
        .setLngLat([selectedPlace[0],selectedPlace[1]])
        .addTo(map.current);

        setSelectedPlace([]);

    }, [selectedPlace, setSelectedPlace])

    return(
        <div css={mapStyles}>
            <div>
                <div ref={mapContainer} className="map-container" />
            </div>
        </div>
    )

}