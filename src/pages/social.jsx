import React, { useState } from 'react';
import { styles, Card, Popup, Overlay, CloseButton, Container, Button, Head, Dropdown, Option, SubmitButton, Image } from '../css/socialStyles';
import StarRating from '../components/social/StarRating';
import { useEffect } from 'react';
import { css } from '@emotion/react';

export default function Social() {
    const [ showPopup, setShowPopup ] = useState(false);
    const [ rating, setRating ] = useState(0)
    const [ selectedEntry, setSelectedEntry ] = useState({})
    const storedJournalPosts = sessionStorage.getItem('posts');
    const journalEntries = storedJournalPosts ? JSON.parse(storedJournalPosts) : [];
    const [socialPosts, setSocialPosts] = useState(() => {
        const storedSocialPosts = sessionStorage.getItem('socialPosts');
        return storedSocialPosts ? JSON.parse(storedSocialPosts) : [];
    });

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

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    const closePopup = () => {
        setSelectedEntry({})
        setRating(0)
        setShowPopup(false);
    };

    const handleRatingChange = (value) => {
        setRating(value)
    }

    const handleEntryChange = (entry) => {
        setSelectedEntry(entry)
    }

    /*
        When the user clicks Post on the dropdown popup, I'm creating a newPost to store 
        in the socialPosts array.  Then trying to add that to the end of the array 
        which seems to be working (the useEffect for socialPosts shows that it's storing)
    */ 
    const handlePopupSubmit = () => {
        // need to parse first because I used JSON.stringify to set the entry 
        const parsedEntry = JSON.parse(selectedEntry);
        const newPost = {
            entry: parsedEntry,
            rating: rating
        }
        const updatedSocialPosts = [newPost, ...socialPosts]
        setSocialPosts(updatedSocialPosts)
        sessionStorage.setItem('socialPosts', JSON.stringify(updatedSocialPosts));
        closePopup()
    }

    // Just testing out to see if the posts are actually being stored, which it seems they are 
    // useEffect(() => {
    //     socialPosts.forEach((post, index) => {
    //         // Access the location and rating properties
    //         const location = post.entry.location;
    //         const rating = post.rating;
        
    //         console.log(`Post ${index + 1}:`);
    //         console.log(`Location: ${location}`);
    //         console.log(`Rating: ${rating}`);
    //     });

    // }, [socialPosts]);


        
    return (
        <Container css={styles}>
            <Head css={fadeStyles}>Share your journey!</Head>
            <Button onClick={togglePopup}>+</Button>
            {socialPosts.map((post, index) => (
                <Card css={fadeStyles} key={index}>
                    <h3>Location: {post.entry.location}</h3>
                    <Image src={post.entry.file} alt={post.entry.location} />
                    <p>Details: {post.entry.details}</p>
                    <p>Rating: {post.rating}</p>
                    <StarRating rating={post.rating} interactive={false} />
                </Card>
            ))}
            {showPopup && (
                <>
                    <Overlay onClick={closePopup} />
                    <Popup>
                        <CloseButton onClick={closePopup}>x</CloseButton>
                        <h2>Choose a journal entry to share</h2>
                        <Dropdown value={selectedEntry} onChange={(event) => handleEntryChange(event.target.value)}>
                            <Option value="">Select an entry</Option>
                            {journalEntries.map((entry, index) => (
                                <Option key={index} value={JSON.stringify(entry)}>
                                    {entry.location}, "{entry.details}"
                                </Option>
                            ))}
                        </Dropdown>
                        <h2>Rate your experience</h2>
                        <StarRating rating={rating} onChange={handleRatingChange} interactive={true} />
                        <SubmitButton onClick={handlePopupSubmit}>Post</SubmitButton>
                    </Popup>
                </>
            )}
        </Container>
    );
}
