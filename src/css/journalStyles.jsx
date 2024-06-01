// journalStyles.jsx

import styled from '@emotion/styled'

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

