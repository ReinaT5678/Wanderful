import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useState } from 'react'

const Card = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    margin-right: 10px;
    margin-top: 10px;
    padding: 10px;
    width: 90%;
    max-height: 160px;
    display: flex;
    background-color: #eeece4;
`
const CardTextDiv = styled.div`
    flex: 1;
`
const CardAddButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const AddButton = styled.button`
    width: 35px;
    height: 35px;
    cursor: pointer;
    font-size: 20px;
    border: none;
    background-color: #B0C4B1;
    border-radius: 5px;
    transition: background-color 0.3s;
    &:hover {
        background-color: #c7d8c8;
    }
`

const LocationCard = ({ location, addToMyPlan, isRemovable, removeFromPlan }) => {

    // Logic with the help of ChatGPT for removal of cards in the plan. 
    const [isRemoving, setIsRemoving] = useState(false);

    const addToMyPlanAction = () => {
        if (isRemovable) {
            setIsRemoving(true);
        } else {
            addToMyPlan(location)
        }
    }

    const handleAnimationEnd = () => {
        if (isRemoving) {
            removeFromPlan(location);
        }
    };

    const fadeStyles = css`
        @keyframes fadeIn {
            0% {
                transform: translateY(100%); 
                opacity: 0; 
            }
            100% { 
                transform: translateY(0%);
                opacity: 1; 
            }
        }
        &{
            animation: fadeIn .5s;
        }
    `

    const fadeOutStyles = css`
        @keyframes fadeOut {
            0% {
                transform: translateX(0%); 
                opacity: 1; 
            }
            100% { 
                transform: translateX(-100%); 
                opacity: 0; 
            }
        }
        &{
            animation: fadeOut .5s;
            animation-fill-mode: forwards;
        }
    `

    

    return (
        // With the help of ChatGPT
        <Card css={isRemoving ? fadeOutStyles : fadeStyles} onAnimationEnd={handleAnimationEnd}>
            <CardTextDiv>
                <h3>{location.name}</h3>
                <p>{location.categories[0].name}</p>
                <p>{location.location.formatted_address}</p>
            </CardTextDiv>
            <CardAddButtonDiv>
                <AddButton onClick={addToMyPlanAction}>{isRemovable ? 'x' : '+'}</AddButton>
            </CardAddButtonDiv>
            
        </Card>
    )
}

export default LocationCard