import React, { useContext } from 'react';
import { Link, Navigate, NavLink } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import { GrFacebookOption, GrGoogle } from "react-icons/gr";
import { RiLinkedinFill } from "react-icons/ri";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Login.css';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const { user, signInUser, signInWithThirdParty } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
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


    const handleThirdPartySignIn = (provider) => {
        signInWithThirdParty(provider)
            .then(res => {
                const user = res.user;
                console.log(user);
            }).catch(error => {
                const errorCode = error.code;
                const errorMessage = error.Message;
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
            <form onSubmit={handleLogin} className='form grid grid-cols-1 gap-y-4 rounded-md border-grey'>
                <h3 className='mb-1 text-center font-semibold text-2xl uppercase'>Login</h3>

                <div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder='email@example.com' />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" placeholder='********' />
                </div>

                <div>
                    <button className='login-register-btn'>Login</button>
                </div>

                <div>
                    <span className='text-sm text-black text-center block mb-2'>
                        Login with
                    </span>
                    <div className='text-center mt-1 mb-2 flex justify-center'>
                        <Link onClick={() => handleThirdPartySignIn(facebookProvider)}>
                            <GrFacebookOption className='social-icon w-8 h-8 rounded-full p-1 text-blue-700 mr-2' />
                        </Link>
                        <Link>
                            <RiLinkedinFill className='social-icon w-8 h-8 rounded-full p-1 text-blue-700 mr-2' />
                        </Link>
                        <Link onClick={() => handleThirdPartySignIn(googleProvider)}>
                            <GrGoogle className='social-icon w-8 h-8 rounded-full p-1 text-blue-700 mb-3' />
                        </Link>
                    </div>
                    <span className='text-sm text-gray-500 text-center block'>
                        Or
                        <NavLink to='/user/register' className='ml-1 font-semibold text-red'>register an account</NavLink>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;