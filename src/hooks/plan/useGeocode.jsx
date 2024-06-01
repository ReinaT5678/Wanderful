import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

const useGeocode = (search, geocodeEnabled, OPENCAGE_API_KEY ) => {

    const [ coordinates, setCoordinates ] = useState("")

    // OpenCage geocoding JS doc:  https://opencagedata.com/tutorials/geocode-in-javascript
    // query string for the API must be URI encoded first
    const encodedGeoCodeSearch = encodeURIComponent(search);
    
    const { isLoading, error, data: geocodeData } = useQuery({
        queryKey: [ "searchRepos", encodedGeoCodeSearch ],
        queryFn: async () => {
            const apiURL = `https://api.opencagedata.com/geocode/v1/json?key=${OPENCAGE_API_KEY}&q=${encodedGeoCodeSearch}&language=en&pretty=1`
            // console.log("apiURL:", apiURL)
            const res = await fetch(apiURL)
            return res.json()
        }, 
        enabled: geocodeEnabled // control when the API fetch is called, so it doesn't call unless the form is submitted
    })

    useEffect(() => {
        if (geocodeData) {
            // setting coordinates once geocodeData is returned
            const lat = geocodeData.results[0].geometry.lat
            const long = geocodeData.results[0].geometry.lng
            setCoordinates(`${lat},${long}`)
        }
    }, [ geocodeData ])

    return { isLoading, error, coordinates }

}
export default useGeocode