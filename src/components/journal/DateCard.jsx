import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Card = styled.div`
    width: 300px; 
    margin: 0 auto; 
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
    background-color: #ECEAE4;

`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
`;

const Image = styled.img`
    width: 300px;
    height: 200px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0,0,0, 1);

`;

const HeaderLocation = styled.div`
    text-align: center;
    font-size: 25px;
    padding-bottom: 25px;
    padding-top: 24px;
    margin-bottom: 20px;
   
`;

const Paragraph = styled.div`
    text-align: center;
    font-size: 20px;
    padding-top: 25px;
`;


export default function DateCard({ location, file, details }) {

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
        <Card css={fadeStyles}>
            <HeaderLocation>{location}</HeaderLocation>
            <ImageContainer>
                {file && (
                    <Image src={file} alt="Uploaded" /> 
                )}
            </ImageContainer>
            <Paragraph>{details}</Paragraph>
        </Card>
    );
}
