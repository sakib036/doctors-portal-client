import React from 'react';

const AppointmentOption = ({ appointmentOption ,setTreatment}) => {
    const { name,price, slots } = appointmentOption;
    return (
        <div className="card bg-base-100 shadow-2xl text-center">
            <div className="card-body">
                <h2 className=" text-2xl font-bold">{name}</h2>
                <p>{slots.length>0? slots[0]:"Try Another Day"}</p>
                <p>{slots.length} {slots.length>1? "spaces":"space"} available</p>
                <p>Price:${price}</p>
                <div className="card-actions flex justify-center">
                    
                    <label disabled= {slots.length===0} onClick={()=>setTreatment(appointmentOption)} htmlFor="booking-appointment" className="btn btn-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;