import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { css } from '@emotion/react';
import Spinner from '../components/explore/Spinner';
import styled from '@emotion/styled'

const FOURSQUARE_API_KEY = import.meta.env.VITE_FOURSQUARE_API_KEY;

const getDayName = (dayNumber) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[dayNumber - 1]; 
};

const formatTime = (timeString) => {
    if (timeString.length === 4) {
        return timeString.slice(0, 2) + ':' + timeString.slice(2);
    } else {
        return timeString;
    }
};

const PlaceContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

const LeftColumn = styled.div``;

const RightColumn = styled.div``;

export default function Place() {
    const loadingStyles = css`
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const innerDivStyles = css`
        a {
            color: black;
        }
        a:hover {
            color: #4A5759;
        }
        a:visited {
            color: black;
        }
    `;

    const params = useParams();
    const placeId = params.place;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: FOURSQUARE_API_KEY
        }
    };

    const { isLoading: placeIsLoading, error: placeError, data: placeData } = useQuery({
        queryKey: ["getPlace", placeId],
        queryFn: async () => {
            const apiURL = `https://api.foursquare.com/v3/places/${placeId}?fields=hours%2Cwebsite%2Cname%2C`;
            const res = await fetch(apiURL, options);
            const data = await res.json();
            return data;
        }
    });

    return (
        <>
            <div>
                <div css={loadingStyles}>
                    {placeIsLoading && <Spinner />}
                </div>
                {placeData && placeData.hours && placeData.hours.regular &&
                    <div css={innerDivStyles}>
                        <h1>{placeData.name}</h1>
                        <PlaceContainer>
                            <LeftColumn>
                                <h2>Website:</h2>
                                <a href={placeData.website} target="_blank">{placeData.website}</a>
                            </LeftColumn>
                            <RightColumn>
                                <h2>Hours:</h2>
                                <ul>
                                    {placeData.hours.regular.map((schedule, index) => (
                                        <li key={index}>
                                            <strong>{getDayName(schedule.day)}:</strong> {formatTime(schedule.open)} - {formatTime(schedule.close)}
                                        </li>
                                    ))}
                                </ul>
                            </RightColumn>
                        </PlaceContainer>
                    </div>
                }
            </div>
        </>
    );
}
