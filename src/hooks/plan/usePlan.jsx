import { useState, useEffect } from 'react';

const usePlan = () => {
    const [myPlan, setMyPlan] = useState(() => {
        const storedPlan = sessionStorage.getItem('myPlan');
        return storedPlan ? JSON.parse(storedPlan) : [];
    });

    useEffect(() => {
        sessionStorage.setItem('myPlan', JSON.stringify(myPlan));
    }, [myPlan]);

    const addToPlan = (item) => {
        setMyPlan((prevPlan) => [...prevPlan, item]);
    };

    const removeFromPlan = (itemId) => {
        console.log('Removing item with ID:', itemId);
        setMyPlan((prevPlan) => {
            const updatedPlan = prevPlan.filter((planItem) => {
                console.log("planItem ID:", planItem); // Log planItem id
                return planItem !== itemId;
            });
            sessionStorage.setItem('myPlan', JSON.stringify(updatedPlan)); // Update session storage
            return updatedPlan;
        });
    };
    
    
    
    
    
    
    return { myPlan, addToPlan, removeFromPlan };
};


export default usePlan;
