import React from 'react';

const ChefCard = ({data}) => {
    const {name, picture} = data;
    
    return (
        <div>
            <h1>Name: {name}</h1>
            <img src={picture} alt="" />
        </div>
    );
};

export default ChefCard;