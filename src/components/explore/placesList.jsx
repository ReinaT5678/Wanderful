import {Link, Outlet, NavLink, Routes, useParams, useRouteError, ScrollRestoration, redirect} from 'react-router-dom'
import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { placesStyles} from '../../css/exploreStyles'
import PlaceCard from './placeCard'


export const ButtonDetail = styled.button`
    padding: 15px;
    border-radius: 30px;
    background-color: #B0C4B1;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #c7d8c8;
    }
    
`

export default function PlacesList({ response, setSelectedPlace }){


    const cardStyles = css`
        border: 2px solid black;
        border-radius: 10px;
        margin-top: 10px;
        padding: 10px;
        width: 95%;
    `


    if (!response){
        return null
    }

    const handleDetailsClick = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        })
    }
    
    return(
        <div css={placesStyles}>


            {response.results.map((place) => (

                <div key={place.fsq_id} css={cardStyles} onClick={() => {
                    // console.log(place.geocodes.main.latitude)
                    // console.log(place.geocodes.main.longitude)

                    setSelectedPlace([place.geocodes.main.longitude,place.geocodes.main.latitude])
                    }}>

                    <PlaceCard 
                        name={place.name} 
                        category={place.categories[0].name} 
                        address={place.location.formatted_address}
                    />

                    <Link to={`/explore/${place.fsq_id}`}>
                        <ButtonDetail onClick={() => handleDetailsClick()}>Details</ButtonDetail>        
                    </Link>


                    {/* So the button should act as the "link" to the parameterized route page,
                        we would make it a Link to={??} and that would go in the params for the URL? 
                        maybe link the ID?  
                        then in the child element, we would use useParams() to get the id? and find the 
                        element based on that ID 
                    */}
                </div>
            ))}

            {/* outlet doesn't go here? instead at the bottom of explore.jsx below the PlacesList and MapDisplay divs  */}

            
        </div>
       
    )
}