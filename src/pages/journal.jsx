import React, { useState,  useEffect } from 'react';
import { Head, Button, Container } from '../css/journalStyles';
import DateCard from '../components/journal/DateCard';
import Popup from '../components/journal/Popup';
import usePlan from '../hooks/plan/usePlan'; 
import { css } from '@emotion/react';


export default function Journal() {
    const { myPlan } = usePlan();
    const [posts, setPosts] = useState(() => {
        const storedPosts = sessionStorage.getItem('posts');
        return storedPosts ? JSON.parse(storedPosts) : [];
    });

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        sessionStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const handlePopupSubmit = (location, file, details) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const dataURL = reader.result;
            setPosts(prevPosts => [
                { location, file: dataURL, details }, 
                ...prevPosts
            ]);
        };
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
    

    return (
        <Container>
            <Head css={fadeStyles}>Log your experience!</Head>

            <Button onClick={togglePopup}>+</Button>

            {posts.map((post, index) => (
                <DateCard key={index} location={post.location} file={post.file} details={post.details} />
            ))}

            {showPopup && (
                <Popup onClose={closePopup} planData={myPlan} onSubmit={handlePopupSubmit}>
                    <h3>Choose your date!</h3>
                    <h3>Upload a photo:</h3>
                    <h3>Insert your details: </h3>
                </Popup>
            )}
        </Container>
    );
    
}