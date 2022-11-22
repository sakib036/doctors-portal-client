import React from 'react';

import {Outlet} from 'react-router-dom';
import Footer from '../Component/Pages/Footer/Footer';
import Navbar from '../Component/Pages/Home/Navbar/Navbar';

const Main = () => {
    return (
        <div className='max-w-[1240px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;