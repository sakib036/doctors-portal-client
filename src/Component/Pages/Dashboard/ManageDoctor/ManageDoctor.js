import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../Loading/Loading';
import ConfirmationModal from '../../ConfirmationModal/ConfirmationModal';

const ManageDoctor = () => {

    const [deleteDoctor, setDeleteDoctor]=useState(null);

    const closeModal=()=>{
        setDeleteDoctor(null);
    }

  

    const { data: doctors , isLoading,refetch} = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctors-portal-server-self.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }

                })
                const data = await res.json()
                return data

            }
            catch {

            }
        }
    })
if(isLoading){
    return <Loading></Loading>
}

const handelDeleteDoctor=doctor=>{

    fetch(`https://doctors-portal-server-self.vercel.app/doctors/${doctor._id}`,{
        method:'DELETE',
        headers:{
            authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>res.json())
    .then(data=>{

        if(data.deletedCount>0){
            
            refetch();

            toast.error('Delete Doctor successfully ')
        }
        

    })
}

    return (
        <div>
            <h2>Manage Doctor</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map(doctor=> <tr key={doctor._id} doctor={doctor}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{doctor.name}</div>
                                            <div className="text-sm opacity-50">{doctor.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {doctor.specialty}
                                </td>
                                <td>Purple</td>
                                <th>
                                <label onClick={()=> setDeleteDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-error btn-xs">Delete</label>
                                </th>
                            </tr>)
                        }
                       
                    </tbody>
                </table>
            </div>
            {
                deleteDoctor && <ConfirmationModal
                title={`Are you Sure You Want to Delete Doctor ${deleteDoctor.name}`}
                message={'If You Delete Your Data Is Not Recover'}
                closeModal={closeModal}
                successDelete={handelDeleteDoctor}
                modalData={deleteDoctor}
                
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctor;