import React from 'react';
import fluoride from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";
import ServiceWeProvide from './ServiceWeProvide';

const OurService = () => {

    const OurServices=[

        {
            id:1,
            name:'Fluoride Treatment',
            image:fluoride,
            body:"Fluoride is commonly used in dentistry to strengthen enamel, which is the outer layer of your teeth. Fluoride helps to prevent cavities.",
        },
        {
            id:2,
            name:'Cavity Filling',
            image:cavity,
            body:"Basically, a cavity is hole in the tooth . This is often often caused by bacteria, which builds up from eating unhealthy food and not caring for your teeth properly.",
        },
        {
            id:3,
            name:'Teeth Whitening',
            image:whitening,
            body:"Teeth whitening is ideal for people who have healthy, unrestored teeth (no fillings) and gums. Individuals with yellow tones to their teeth respond best.",
        },
    ]
    return (
        <div className='my-36'>
            <div className='text-center my-24'>
            <h5 className='text-blue-400 text-2xl'>Our Services</h5>
            <h3 className='text-5xl'>Service We Provide</h3>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    OurServices.map(service=><ServiceWeProvide
                    key={service.id}
                    service={service}
                    ></ServiceWeProvide>)
                }

            </div>
            
        </div>
    );
};

export default OurService;