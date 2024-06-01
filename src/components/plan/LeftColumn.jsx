import React from 'react'
import { LeftTitle, StarIcon, PlanDiv, LeftColumnDiv } from '../../css/planStyles'
import LocationCard from './LocationCard'
import starIcon from '../../../public/star.png'
import { css } from '@emotion/react'

const LeftColumn = ({ myPlan, removeFromPlan }) => {

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

    return (
        <LeftColumnDiv>
            <LeftTitle css={fadeStyles}>
                <StarIcon src={starIcon} alt="star" />
                <h1>My Plan</h1>
                <StarIcon src={starIcon} alt="star" />
            </LeftTitle>
            <PlanDiv>
                {myPlan.map((place) => (
                    <LocationCard 
                        key={place.fsq_id} 
                        location={place} 
                        isRemovable={true} 
                        removeFromPlan={removeFromPlan} 
                    />
                ))}
            </PlanDiv>
        </LeftColumnDiv>
    )
}

export default LeftColumn