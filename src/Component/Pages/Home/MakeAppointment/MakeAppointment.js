import React from 'react';
import doctor from '../../../../assets/images/doctor.png'
import chair from '../../../../assets/images/chair.png'

const MakeAppointment = () => {
    return (
        <div className="hero my-24 " style={{ background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${chair})` }}>
            <div className="flex flex-col lg:flex-row  text-white items-center">
                <img src={doctor} alt='' className="w-1/2 rounded-lg  hidden sm:block -mt-32" />
                <div className='mx-12'>
                    <h5 className='text-blue-400'>Appointment</h5>
                    <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">To help people more easily access healthcare when they needed it most and to remove the stress and headache associated with finding and booking healthcare appointments.Instantly book Dentists appointments online for free, anywhere, anytime. Manage your health online, get better sooner, and stay healthy longer.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;