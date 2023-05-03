import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipes = () => {
    const data = useLoaderData();
    const {id,name,picture,experience,recipes} = data;
    return (
        <div>
            <h1>Recipes coming</h1>
        </div>
    );
};

export default Recipes;