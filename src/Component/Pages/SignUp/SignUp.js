import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../Hooks/useToken';

const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignUpError] = useState('');

    const [createUserEmail, setCreateUserEmail] = useState('');

    const [token] = useToken(createUserEmail)
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handelSignUp = data => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)

            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUserProfile(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)

                    })
                    .catch(error => {
                        console.error(error.message)
                        setSignUpError(error.message)
                    })
            })
            .catch(error => {
                console.error(error.message);
                setSignUpError(error.message);

            })

        const saveUser = (name, email) => {
            const user = { name, email };
            fetch('https://doctors-portal-server-self.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setCreateUserEmail(email)

                })

        }
    }



    return (
        <div className='flex justify-center items-center'>

            <div className='w-96 border-2 p-6 rounded-xl'>
                <div>
                    <h1 className='text-center'>SignUp</h1>
                </div>


                <form onSubmit={handleSubmit(handelSignUp)}>



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
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 8, message: 'password must be 6 character or longer' },
                            pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, message: "password must be strong" }

                        })} placeholder="password" className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-400' role="alert">{errors.password?.message}</p>}
                        <div>
                            {signUpError && <p className='text-red-600'>{signUpError}</p>}
                        </div>

                    </div>
                    <input className='btn btn-primary w-full' defaultValue='Sign UP' type="Submit" />
                </form>

                <p>Already Have Account please <Link to='/login' className='text-orange-800 font-bold'>LogIn</Link></p>
            </div>
        </div>
    );
};

export default SignUp;