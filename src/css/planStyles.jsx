import styled from '@emotion/styled'
import { css } from '@emotion/react'

// Define a media query for small screens
const smallScreen = '@media (max-width: 768px)';

export const styles = css`
    margin: 40px;

    ${smallScreen} {
        margin: 20px;
    }
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;

    ${smallScreen} {
        flex-direction: column;
    }
`

export const RightColumnDiv = styled.div`
    flex: 45%; 
    margin-left: 5px;

    ${smallScreen} {
        flex: 100%;
        margin-left: 0;
        margin-top: 10px;
    }
`

export const LeftColumnDiv = styled.div`
    flex: 45%; 
    margin-right: 15px;
    position: sticky;

    ${smallScreen} {
        flex: 100%;
        margin-right: 0;
        margin-bottom: 10px;
    }
`

export const SearchForm = styled.form`
    display: flex;

    ${smallScreen} {
        flex-direction: column;
    }
`

export const SearchInput = styled.input`
    border-radius: 30px;
    border: none;
    height: 30px;
    width: 75%;
    padding-left: 10px;

    ${smallScreen} {
        width: 100%;
        margin-bottom: 10px;
    }
`

export const SearchButton = styled.button`
    cursor: pointer;
    border-radius: 30px;
    height: 35px;
    background-color: #B0C4B1;
    margin-left: 10px;
    font-size: 16px;
    border: none;
    width: fit-content;
    padding: 0 15px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #c7d8c8;
    }

    ${smallScreen} {
        margin-left: 0;
        width: 100%;
    }
`

export const CardDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr; 
    grid-template-rows: auto; 
    gap: 10px;
    margin-top: 10px;
    height: 100%;
`

export const SpinnerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

export const PlanDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr; 
    grid-template-rows: auto; 
    gap: 10px;
    height: 75vh;
    /* overflow-y: auto; */
    align-items: start;
    align-content: start;

    ${smallScreen} {
        height: auto; 
    }
`

export const LeftTitle = styled.div`
    display: flex;
    align-items: center;
    h1 {
        margin-right: 10px;
    }
`

export const StarIcon = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`
