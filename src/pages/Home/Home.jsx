import React from 'react';
import Hero from '../../shared/components/Hero';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../../shared/components/ChefCard';

const Home = () => {
    const datas =useLoaderData();
    // console.log(data);
    
    return (
        <div>
            <Hero></Hero>
            {
                datas.map(data => <ChefCard data={data} key={data.id}></ChefCard>)
            }
        </div>
    );
};

export default Home;