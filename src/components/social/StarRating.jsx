import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, onChange, interactive }) => {
    const [hover, setHover] = useState(null);

    const handleClick = (value) => {
        onChange(value);
    };

    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={interactive ? () => handleClick(ratingValue) : undefined}
                        />
                        <FaStar
                            className='star'
                            size={30}
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => interactive && setHover(ratingValue)}
                            onMouseLeave={() => interactive && setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
