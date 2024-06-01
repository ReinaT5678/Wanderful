import { css } from '@emotion/react'
import styled from '@emotion/styled'


export const containerStyles = css`

    display: flex;
    flex-direction: column;
    margin-top: 3vh;
    align-items: center;
    
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

    @keyframes fadeInTwo {
        0% {
            opacity: 0; 
        }
        100% { 
            opacity: 1; 
        }
    }




`

export const formStyles  = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        animation: fadeIn .5s;
        font-size: 40px;
    }
    input {
        animation: fadeIn .5s;
        /* Modifying input size and shape */
        cursor: pointer;
        border-radius: 30px;
        height: 50px;
        margin-right: 10px;
        font-size: 2rem;

        border: none;
        width: 750px;
        padding: 10px;
    }

    /* https://www.w3schools.com/css/css3_buttons.asp */
    button{
        animation: fadeIn .5s;
        /* Modifying input size and shape */
        cursor: pointer;
        border-radius: 30px;
    
        background-color: #B0C4B1;
    
        font-size: 1.5rem;
        color: black;

        border: none;
        width: fit-content;
        height: fit-content;
        padding: 15px;
        transition: background-color 0.3s;
        &:hover {
            background-color: #c7d8c8;
        }
    }     
`

export const contentStyles = css`
    display: flex;
    width: 90vw;
    height: auto;

    padding-top: 50px;
    padding-bottom: 50px;
    gap: 50px; 

    

`

export const placesStyles = css`

    animation: fadeIn 1.5s;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;

    width: 45%;
    height: 550px;
`

export const mapStyles = css`

    animation: fadeIn 1.5s;
    width: 55%;
    height: 100%;

    border-radius: 30px;
    overflow: hidden;
    

    .map-container{
        height: 550px;
    }

`
