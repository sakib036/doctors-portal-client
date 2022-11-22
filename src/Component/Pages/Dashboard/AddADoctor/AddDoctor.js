import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Loading/Loading';


const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey=process.env.REACT_APP_imgbb_key;

    const navigate=useNavigate();
  

    const handelAddDoctor = data => {
      
        const image=data.img[0];
        const formData = new FormData();
        formData.append('image',image);
        const url=`https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url,{
            method:'POST',
            body:formData,
        })
        .then(res=>res.json())
        .then(imageData=>{
            if(imageData.success){
                console.log(imageData.data.url)
                const doctor={
                    name:data.name,
                    email:data.email,
                    specialty:data.specialty,
                    image:imageData.data.url,
                }
                fetch('https://doctors-portal-server-self.vercel.app/doctors',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json',
                        authorization:`bearer ${localStorage.getItem('accessToken')}`

                    },
                    body:JSON.stringify(doctor)
                })
                .then(res=>res.json())
                .then(result=>{
                    if(result.acknowledged){
                        toast.success(`${data.name} is added successfully`);
                        navigate('/dashboard/manageDoctors')
                    }
                    
                })

            }
           
        })
    }

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-self.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2>Add A Doctor</h2>
            <div className='flex justify-center items-center'>

                <div className='w-96 border-2 p-6 rounded-xl'>
                    <div>
                        <h1 className='text-center'>Register A Doctor</h1>
                    </div>


                    <form onSubmit={handleSubmit(handelAddDoctor)}>



                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: "Name is required" })} placeholder="name" className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-400' role="alert">{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: "Email Address is required" })} placeholder="email" className="input input-bordered w-full " />
                            {errors.email && <p className='text-red-400' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full mb-6 ">
                            <label className="label">
                                <span className="label-text">Select</span>
                            </label>
                            <select {...register("specialty")} className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Please Select a Specialty</option>
                                {
                                    specialties.map(specialty => <option
                                        key={specialty._id}
                                        name={specialty.name}

                                    >{specialty.name}</option>)
                                }


                            </select>
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file" {...register("img", { required: "Photo is required" })} placeholder="Image" className="input input-bordered w-full " />
                            {errors.img && <p className='text-red-400' role="alert">{errors.img?.message}</p>}
                        </div>
                        <input className='btn btn-primary w-full' defaultValue='Add A Doctor' type="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;