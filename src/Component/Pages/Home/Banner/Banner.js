import React from 'react';
import chair from '../../../../assets/images/chair.png';




const Banner = () => {

    return (
        <div className="hero  " style={{ background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${chair})` }}>
            <div className="hero-content flex-col sm:flex-row-reverse">
                <img src={chair} alt="" className="w-full sm:w-1/2 rounded-lg shadow-2xl" />
                <div >
                    <h1 className="text-5xl font-bold">Your New Smile Start Here</h1>
                    <p className="py-6">To diagnosis, prevention, management, and treatment of diseases and conditions of the oral cavity and other aspects of the craniofacial complex including the temporomandibular joint.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;