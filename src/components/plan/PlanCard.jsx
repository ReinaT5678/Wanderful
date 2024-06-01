import React from 'react'
import styled from '@emotion/styled'

const Card = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    margin-right: 10px;
    margin-top: 10px;
    padding: 10px;
    width: 90%;
`
const PlanCard = ({ location }) => {
    return (
        <Card>
            <h3>{location.name}</h3>
            <p>{location.categories[0].name}</p>
            <p>{location.location.formatted_address}</p>
        </Card>
    )
}

export default PlanCard