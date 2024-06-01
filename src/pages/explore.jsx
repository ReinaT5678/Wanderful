import React from 'react'

import {Link, Outlet, NavLink, Routes, useParams, useRouteError, ScrollRestoration} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { css } from '@emotion/react'
import { containerStyles, formStyles, contentStyles} from '../css/exploreStyles'

import PlacesList from '../components/explore/placesList'
import MapDisplay from '../components/explore/mapDisplay'
import Spinner from '../components/explore/Spinner'

/* 
    You'll have to add your API keys in your .env file, like: 
        VITE_FOURSQUARE_API_KEY=abcdef123456789
        VITE_OPENCAGE_API_KEY=123abcdefgh
*/

// Note: Will need to handle empty search entry 

const FOURSQUARE_API_KEY = import.meta.env.VITE_FOURSQUARE_API_KEY
const OPENCAGE_API_KEY = import.meta.env.VITE_OPENCAGE_API_KEY

export default function Explore() {

    const loadingStyles = css`
        display: flex;
        justify-content: center;
        align-items: center;
    `

    // State declarations
    const [ userInput, setUserInput ] = useState("")
    const [ search, setSearch ] = useState("")
    const [ coordinates, setCoordinates ] = useState("")
    const [ geocodeEnabled, setGeocodeEnabled ] = useState(false)
    const [ foursquareEnabled, setFoursquareEnabled ] = useState(false)
    const [ encodedFoursquare, setEncodedFoursquare ] = useState("")
    const [ nearbyPlaces, setNearbyPlaces ] = useState([])

    const [ isOpen, setIsOpen ] = useState(false)
    const [selectedPlace, setSelectedPlace] = useState([])


    /*
        API Handling
        1. useQuery() - GeoCode to return coordinates data
        2. useEffect() - Convert coordinate data into string
        3. useEffect() - Convert coordinate string into encodedFourSquare string for API
        4. useQuery() - Foursquare to return places data
    */

    // 1. OpenCage geocoding JS doc:  https://opencagedata.com/tutorials/geocode-in-javascript
    const encodedGeoCodeSearch = encodeURIComponent(search); // query string for the API must be URI encoded first, when inputting a search 
    const { isLoading: geocodeIsLoading, error: geocodeError, data: geocodeData } = useQuery({
        queryKey: [ "getCoords", encodedGeoCodeSearch ],
        queryFn: async () => {
            const apiURL = `https://api.opencagedata.com/geocode/v1/json?key=${OPENCAGE_API_KEY}&q=${encodedGeoCodeSearch}&language=en&pretty=1`
            const res = await fetch(apiURL)
            return res.json()
        }, 
        enabled: geocodeEnabled // control when the API fetch is called, so it doesn't call unless the form is submitted
    })

    // 2. 
    useEffect(() => {
        if (geocodeData) {
            // setting coordinates once geocodeData is returned
            const lat = geocodeData.results[0].geometry.lat
            const long = geocodeData.results[0].geometry.lng
            setCoordinates(`${lat},${long}`)
        }
        // Will only repeat when the geocodeData changes
    }, [ geocodeData ])

    // 3. 
    useEffect(() => {
        if (coordinates) {
            // coordinates also need to be URI encoded for the Foursquare call
            setEncodedFoursquare(encodeURIComponent(coordinates))
            // now allow the Foursquare API call 
            setFoursquareEnabled(true)
        }
    }, [ coordinates ])

    // 4.  Foursquare doc:  https://location.foursquare.com/developer/reference/places-nearby
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: FOURSQUARE_API_KEY
        }
    };
    
    const { isLoading: fourSquareisLoading, error: fourSquareError, data: fourSquareData } = useQuery({
        queryKey: [ "getFourSquare", encodedFoursquare],
        queryFn: async () => {
            const apiURL = `https://api.foursquare.com/v3/places/search?ll=${encodedFoursquare}&limit=35`
            const res = await fetch(apiURL, options)
            setIsOpen(true)
            return res.json()
        }, 
        enabled: foursquareEnabled // control when the API fetch is called, so it doesn't call unless the form is submitted
    })
    
    return (
        <div css={containerStyles}>
            <div css={formStyles}>
                <h1>Where do you want to explore?</h1>
                <form onSubmit={e => {
                    e.preventDefault()
                    
                    if(search == userInput.trim()){
                        null
                    }
                    else{
                        setSearch(userInput.trim())
                        setGeocodeEnabled(true)
                        setFoursquareEnabled(false);
                        setCoordinates("");
                    }

                    }}>
                    <input 
                        value={userInput}
                        placeholder='Eg. 1555 NW Monroe Ave., Corvallis, OR 97330'
                        onChange={e => setUserInput(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>

            <div css={loadingStyles}>
                {geocodeIsLoading && <Spinner />}
            </div>


            <div css={contentStyles}>
                {/* https://react.dev/learn/conditional-rendering */}
                {foursquareEnabled && fourSquareData && <PlacesList response={fourSquareData} setSelectedPlace={setSelectedPlace}/>} 
                {foursquareEnabled && fourSquareData && <MapDisplay inputCoords={geocodeData} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}/>}
            </div> 

            {/* Outlet to handle selected search result contents */}
            <Outlet/>


        </div>
    )
}