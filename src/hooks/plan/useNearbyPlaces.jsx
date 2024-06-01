import { useState, useEffect } from 'react';

const useNearbyPlaces = ( coordinates, FOURSQUARE_API_KEY ) => {
    const [ nearbyPlaces, setNearbyPlaces ] = useState([])
    const [ encodedFoursquare, setEncodedFoursquare ] = useState("")
    const [ foursquareEnabled, setFoursquareEnabled ] = useState(false)

    useEffect(() => {
        if (coordinates) {
            // coordinates also need to be URI encoded for the Foursquare call
            setEncodedFoursquare(encodeURIComponent(coordinates))
            // now allow the Foursquare API call 
            setFoursquareEnabled(true)
        }
    }, [ coordinates ])

    // Foursquare doc:  https://location.foursquare.com/developer/reference/places-nearby
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: FOURSQUARE_API_KEY
        }
    };

    if (foursquareEnabled) {
        // fetching nearby places once the coordinates are encoded (foursquareEnabled)
        fetch(`https://api.foursquare.com/v3/places/search?ll=${encodedFoursquare}&limit=35`, options)
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            setNearbyPlaces(response) // 'response' holds the object/array to map
        })
        .catch(err => console.error(err));
        setFoursquareEnabled(false)
    }

    return nearbyPlaces

}

export default useNearbyPlaces