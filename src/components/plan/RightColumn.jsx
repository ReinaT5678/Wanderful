import React from 'react'
import { SearchForm, SearchInput, SearchButton, SpinnerDiv, CardDiv, RightColumnDiv } from '../../css/planStyles'
import LocationCard from './LocationCard'
import Spinner from './Spinner'
import { css } from '@emotion/react'

const RightColumn = ({ userInput, setUserInput, search, setSearch, geocodeIsLoading, nearbyPlaces, addToPlan, setGeocodeEnabled }) => {

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
        <RightColumnDiv>
            <h1 css={fadeStyles}>Where do I want to go?</h1>
            <SearchForm css={fadeStyles} onSubmit={e => {
                e.preventDefault()
                const input = userInput.trim()
                if (input) {
                    setSearch(userInput.trim())
                    setUserInput("")
                    setGeocodeEnabled(true)
                }
                
            }}>
                <SearchInput 
                    value={userInput}
                    placeholder='Eg. 1555 NW Monroe Ave., Corvallis, OR 97330'
                    onChange={e => setUserInput(e.target.value)}
                />
                <SearchButton type="submit">
                    Search
                </SearchButton>
            </SearchForm>
            <SpinnerDiv>{geocodeIsLoading && <Spinner />}</SpinnerDiv>
            {nearbyPlaces.results && (
                <div>
                    <h3 css={fadeStyles}>Places nearby "{search}"</h3>
                    <CardDiv css={fadeStyles}>
                    {nearbyPlaces.results.map((place) => (
                        <LocationCard 
                            key={place.fsq_id}
                            location={place} 
                            isRemovable={false}
                            addToMyPlan={addToPlan} 
                        />
                    ))}
                </CardDiv>
                </div>)}
        </RightColumnDiv>
    )
}

export default RightColumn
