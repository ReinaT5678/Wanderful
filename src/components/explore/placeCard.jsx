import React from 'react'
import { css } from '@emotion/react'

export default function PlaceCard({ name, category, address }){
    
    
    
    return (
        <> 
            <h3>{name}</h3>
            <p>{category}</p>
            <p>{address}</p>
        </>
    )


}

