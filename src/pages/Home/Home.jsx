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
            <h1 className='text-7xl text-purple-600 font-bold text-center my-10'>Our Chefs</h1>
            <div className='grid md:grid-cols-2 gap-3 w-full place-items-center my-16'>
           
            {
                datas.map(data => <ChefCard data={data} key={data.id}></ChefCard>)
            }
            </div>
        </div>
    );
};

export default Home;