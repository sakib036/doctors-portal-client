import React from 'react';

const ContactInfo = ({ contact }) => {
    const { title, body, image, bgColor } = contact;
    return (
        <div className={`card card-side shadow-xl align-items ${bgColor}`}>
            <figure><img className='pl-6' src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{body}</p>
                
            </div>
        </div>
    );
};

export default ContactInfo;