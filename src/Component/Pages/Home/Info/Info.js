import React from 'react';
import clock from '../../../../assets/icons/clock.svg';
import location from '../../../../assets/icons/marker.svg';
import phone from '../../../../assets/icons/phone.svg';
import ContactInfo from './ContactInfo';


const Info = () => {

  
        const contacts=[
            {
                id:1,
                title:"Opening Hours",
                body:'9 a.m to 8 p.m',
                image:clock,
                bgColor:'bg-blue-400'
            },
            {
                id:2,
                title:"Visit Our Location",
                body:'Dhaka,Bangladesh',
                image:location,
                bgColor:'bg-black'
            },
            {
                id:3,
                title:"Contact Us",
                body:'017*******',
                image:phone,
                bgColor:'bg-blue-400'
            },
            
    
    
        ]
    return (
        <div className='my-24 grid grid-cols-1 sm:grid-cols=2 md:grid-cols-3 gap-4 '>
                {
                    contacts.map(contact=><ContactInfo
                    key={contact.id}
                    contact={contact}
                    
                    ></ContactInfo>)
                }
            </div>
    );
};

export default Info;