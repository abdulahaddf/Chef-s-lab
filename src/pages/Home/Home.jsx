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
            <div className='className="grid grid-cols-2"'>
            <h1 className="text-6xl">Chef's Corner</h1>
            {
                datas.map(data => <ChefCard data={data} key={data.id}></ChefCard>)
            }
            </div>
        </div>
    );
};

export default Home;