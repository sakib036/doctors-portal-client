import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)
console.log(stripePromise)

const Payment = () => {
    const booking = useLoaderData();

    const navigation=useNavigation();
    const { treatment, price, appointmentDate, slot } = booking;
    if(navigation.state==='loading'){
        return <Loading></Loading>
    }


    return (
        <div>
            <h3>Booking for {treatment}</h3>
            <p>please Pay for ${price} for the {treatment} on {appointmentDate} at {slot}</p>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm  booking={booking}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;