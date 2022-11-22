import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUser = () => {

    const {data:users=[], refetch}=useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res=await fetch('https://doctors-portal-server-self.vercel.app/users');
            const data=await res.json();
            return data;
        }
    })

    const handelMakeAdmin=(id)=>{
        fetch(`https://doctors-portal-server-self.vercel.app/users/admin/${id}`,{
            method:'PUT',
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                toast.success('Make Admin Success');
                refetch();
            }
        })

        .catch(error=>console.error(error))

    }



    return (
        <div>
            <h1>All User</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user,index)=><tr key={index} className="hover">
            <th>{index+1}</th>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>{user?.role !=='admin' && <button onClick={()=>handelMakeAdmin(user._id)} className='btn btn btn-xs btn-primary'>Make Admin</button>}</td>
            <td><button className='btn btn btn-xs btn-error'>Delete</button></td>
           
          </tr>)
        }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;