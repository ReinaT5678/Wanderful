// PlanProvider.jsx
import React, { createContext, useContext, useState } from 'react';

const PlanContext = createContext();

export const usePlanContext = () => useContext(PlanContext);

export const PlanProvider = ({ children }) => {
    const [myPlan, setMyPlan] = useState([]);
    const [addedToPlan, setAddedToPlan] = useState([]);

    const addToPlan = (item) => {
        setMyPlan((prevPlan) => [...prevPlan, item]);
        setAddedToPlan((prevAdded) => [...prevAdded, item]);
    };

    return (
        <PlanContext.Provider value={{ myPlan, addToPlan, addedToPlan }}>
            {children}
        </PlanContext.Provider>
    );
};
