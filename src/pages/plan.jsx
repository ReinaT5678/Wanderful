import React from 'react'
import { useState, useEffect } from 'react'
import { styles, Row } from '../css/planStyles'
import LeftColumn from '../components/plan/LeftColumn'
import RightColumn from '../components/plan/RightColumn'
import usePlan from '../hooks/plan/usePlan'
import useGeocode from '../hooks/plan/useGeocode'
import useNearbyPlaces from '../hooks/plan/useNearbyPlaces'

/* 
    You'll have to add your API keys in your .env file, like: 
        VITE_FOURSQUARE_API_KEY=abcdef123456789
        VITE_OPENCAGE_API_KEY=123abcdefgh
*/
const FOURSQUARE_API_KEY = import.meta.env.VITE_FOURSQUARE_API_KEY
const OPENCAGE_API_KEY = import.meta.env.VITE_OPENCAGE_API_KEY

export default function Plan() {
    const [ userInput, setUserInput ] = useState("")
    const [ search, setSearch ] = useState("")
    const [ geocodeEnabled, setGeocodeEnabled ] = useState(false)

    const { myPlan, addToPlan, removeFromPlan } = usePlan();
    const { isLoading: geocodeIsLoading, error: geocodeError, coordinates } = useGeocode(search, geocodeEnabled, OPENCAGE_API_KEY);
    const nearbyPlaces = useNearbyPlaces(coordinates, FOURSQUARE_API_KEY)

    return (
        <div css={styles}>
            <Row>
                <LeftColumn myPlan={myPlan} removeFromPlan={removeFromPlan} />
                <RightColumn 
                    userInput={userInput} 
                    setUserInput={setUserInput} 
                    search={search} 
                    setSearch={setSearch} 
                    geocodeIsLoading={geocodeIsLoading} 
                    nearbyPlaces={nearbyPlaces} 
                    addToPlan={addToPlan}
                    setGeocodeEnabled={setGeocodeEnabled}
                    myPlan={myPlan} 
                />

            </Row>
        </div>
    )
}