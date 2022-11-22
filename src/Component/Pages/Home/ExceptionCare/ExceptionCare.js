import React from 'react';
import treatment from '../../../../assets/images/treatment.png'
const ExceptionCare = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col sm:flex-row my-12">
                <img src={treatment} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                <div className='mx-24'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">We take great pride in providing you and your family with high-quality dental services. We tailor-fit our treatment plans to address your every need. There is nothing we want more than to see you gain confidence in your smile!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default ExceptionCare;