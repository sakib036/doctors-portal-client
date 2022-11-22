import React from 'react';

const ServiceWeProvide = ({service}) => {
    const {name, image, body}=service;
    return (
        <div className="card shadow-2xl align-items ">
            <figure><img className='pl-6' src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{body}</p>
                
            </div>
        </div>
    );
};

export default ServiceWeProvide;