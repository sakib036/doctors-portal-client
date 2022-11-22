import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';


const Appointment = () => {
    const [selectDate, setSelectDate] = useState(new Date());
    return (
        <div>
           <AppointmentBanner
           selectDate={selectDate} 
           setSelectDate={setSelectDate}
           
           ></AppointmentBanner>
           <AvailableAppointment
           selectDate={selectDate} 
           
           ></AvailableAppointment>
        </div>
    );
};

export default Appointment;