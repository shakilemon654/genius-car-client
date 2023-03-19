import React, { useContext } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import { GrFacebookOption, GrGoogle, GrLinkedinOption } from "react-icons/gr";
import { RiLinkedinFill, RiLinkedinLine } from "react-icons/ri";
import '../Login/Login.css';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { user, createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
            .then((result) => {
                // Signed in
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
    }

    if (user && user.uid) {
        return <Navigate to='/' replace={true} />
    }

    return (
        <div className='form-container w-full max-w-4xl padding'>
            <div className='form-img'>
                <img src={loginImg} alt="" />
            </div>
            <form onSubmit={handleRegister} className='form grid grid-cols-1 gap-y-4 rounded-md border-grey'>
                <h3 className='mb-1 text-center font-semibold text-2xl uppercase'>Register</h3>

                <div>
                    <label>Name</label>
                    <input type="text" name="name" placeholder='Fatih Mehmed' />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder='email@example.com' />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" placeholder='********' />
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" placeholder='********' />
                </div>

                <div>
                    <button className='login-register-btn'>Register</button>
                </div>

                <div>
                    <span className='text-sm text-black text-center block mb-2'>
                        Or login with
                    </span>
                    <div className='text-center mt-1 mb-2 flex justify-center'>
                        <GrFacebookOption className='social-icon w-8 h-8 rounded-full p-1 text-blue-700 mr-2' />
                        <RiLinkedinFill className='social-icon w-8 h-8 rounded-full p-1 text-blue-700 mr-2' />
                        <GrGoogle className='social-icon w-8 h-8 rounded-full p-1 text-blue-700 mb-3' />
                    </div>
                    <span className='text-sm text-gray-500 text-center block'>
                        Already have an account?
                        <NavLink to='/user/login' className='ml-1 font-semibold text-red'>Login</NavLink>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Register;