import { format } from 'date-fns';
import { AuthContext } from '../../../Contexts/AuthProvider';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, selectDate, setTreatment,refetch }) => {
    const { name: treatmentName, slots, price } = treatment;
    const date = format(selectDate, 'PP');

    const {user}=useContext(AuthContext);
    

    const handelSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const phone=form.phone.value;
        const slot=form.slot.value;

        const booking={
            appointmentDate:date,
            treatment:treatmentName,
            patientName:name,
            email,
            phone,
            slot,
            price

        }

        fetch('https://doctors-portal-server-self.vercel.app/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                setTreatment(null);
                toast.success('booking successfully');
                refetch();
            }
            else{
                toast.error(data.message)
            }

        })
       
        
       
    }


    return (
        <div className='mx-12'>
            <input type="checkbox" id="booking-appointment" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-appointment" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handelSubmit} >
                        <input type="text" value={date} disabled className=" input input-bordered w-full mt-3" />
                        <select name="slot" className="select select-bordered w-full">
                            
                            {
                                slots.map((slot,index)=><option key={index} value={slot}>{slot}</option>)
                            }
                          
                        </select>
                        <input name="name" defaultValue={user?.displayName} disabled type="text" placeholder="name" className=" input input-bordered w-full mt-3 " />
                        <input name="email" defaultValue={user?.email} disabled type="text" placeholder="email" className=" input input-bordered w-full mt-3 " />
                        <input name="phone" type="text" placeholder="phone" className=" input input-bordered w-full mt-3 " />
                        <br />
                        <input className='w-full btn btn-primary my-6' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;