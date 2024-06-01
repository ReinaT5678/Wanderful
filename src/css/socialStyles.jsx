// SocialStyles.jsx

import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const styles = css`
    input[type=radio]{
        display: none;
    }
    .star { 
        cursor: pointer;
    }
`

export const Container = styled.div`
    position: relative;  
    margin: 40px;
    height: 100vh;   
`

export const Button = styled.button`
    position: fixed;  
    bottom: 50px;         
    right: 200px;          
    font-size: 40px;
    padding: 25px;
    border-radius: 30px;
    background-color: #B0C4B1;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #c7d8c8;
    }
`

export const Head = styled.h1`
    text-align: center;
`

export const Card = styled.div`
    width: 300px; 
    margin: 0 auto; 
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
    background-color: #ECEAE4;
`;

export const Popup = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    z-index: 999;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
`;

export const Dropdown = styled.select`
    display: block;
`

export const Option = styled.option`
`

export const SubmitButton = styled.button`
    display: block;
    margin-top: 20px; 
    padding: 10px 20px; 
    background-color: #B0C4B1;
    transition: background-color 0.3s;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: #c7d8c8;
    }
`

export const Image = styled.img`
    width: 300px;
    height: 200px;
    display: block;
`