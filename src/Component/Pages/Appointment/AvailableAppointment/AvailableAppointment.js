import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {  useState } from 'react';
import Loading from '../../../Loading/Loading';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';

const AvailableAppointment = ({selectDate}) => {
    // const [appointmentOptions,setAppointmentOptions]=useState([]);

    const [treatment, setTreatment]=useState(null);

    const date=format(selectDate, 'PP');

    const {data:appointmentOptions=[], refetch, isLoading}=useQuery({
        queryKey:['appointmentOptions', date],
        queryFn:()=>fetch(`https://doctors-portal-server-self.vercel.app/appointmentOptions?date=${date}`)
        .then(res=>res.json())
    })
    if(isLoading){
       return <Loading></Loading>
    }

    // useEffect(()=>{
    //     fetch('https://doctors-portal-server-self.vercel.app/appointmentOptions')
    //     .then(res=>res.json())
    //     .then(data=>setAppointmentOptions(data))
    // },[])
    return (
        <div>
            <h1 className='text-center text-blue-400 my-12'>Available Appointment on {format(selectDate, 'PP')} </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto'>
                {
                    appointmentOptions.map(appointmentOption=><AppointmentOption
                    key={appointmentOption._id}
                    appointmentOption={appointmentOption}
                    setTreatment={setTreatment}
                    ></AppointmentOption>)
                }

            </div>
           {treatment&&
            <BookingModal
            treatment={treatment}
            selectDate={selectDate}
            setTreatment={setTreatment}
            refetch={refetch}
            
            ></BookingModal>
           }
        </div>
    );
};

export default AvailableAppointment;