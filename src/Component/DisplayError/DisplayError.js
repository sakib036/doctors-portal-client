import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const DisplayError = () => {
    const error=useRouteError();

    const navigate=useNavigate();

    const {logOut}=useContext(AuthContext);

    const handelLogOut=()=>{
        logOut()
        .then(()=>{
            navigate('/login');
        })
        .catch(error=>console.error(error))
    }


    return (
        <div>
            <p className='text-red-600'>Something Went Wrong !!!!!!!!</p>
            <p className='text-red-600'>{error.statusText || error.message}</p>
            <button onClick={handelLogOut}><Link to='/login'>Log Out</Link></button>
        </div>
    );
};

export default DisplayError;