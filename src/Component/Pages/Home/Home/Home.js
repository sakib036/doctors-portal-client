import React from 'react';
import Banner from '../Banner/Banner';
import ExceptionCare from '../ExceptionCare/ExceptionCare';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import OurService from '../OurService/OurService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <OurService></OurService>
            <ExceptionCare></ExceptionCare>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;