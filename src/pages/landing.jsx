import React from 'react'

import { css } from '@emotion/react'
import { useState } from 'react'

export default function Landing(){

    // https://blog.hubspot.com/website/css-fade-in#text-transition
    const landingStyles = css`
        display: flex;
        flex-direction: column;
        height: 80vh;
        align-items: center;
        justify-content: center;
        h1{
            font-size: 60px;
            animation: fadeIn 1s;
            margin-bottom: 0px;
            text-align:center;
        }
        /* https://dev.to/tiaeastwood/super-simple-css-animation-for-fade-in-on-page-load-2p8m */
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
        p{
            margin-top: 0px;
            text-align: center;
            font-size: 25px;
            width: 75%;
            animation: fadeIn 1s;

        }
    `

    return (
        <>
            <div css={landingStyles} >
                <h1>Welcome to Wanderful!</h1>
                <p>Wanderful is a web app to streamline the planning and journaling of dates and hangouts by providing a platform where users can discover nearby places, map out routes, and share their experiences. </p>
            </div>
        </>
    )
}