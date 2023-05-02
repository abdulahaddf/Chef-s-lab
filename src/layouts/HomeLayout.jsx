import React from 'react';
import Nav from '../shared/navbar/Nav';
import { Outlet } from 'react-router-dom';


const HomeLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;