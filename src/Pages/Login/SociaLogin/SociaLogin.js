import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleIcon from '../../../Images/logo/google.png'

const SociaLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate()
    if(user){
        navigate('/home')
    }

    if(loading){
        return <p className='text-center'>Loading...</p>;
    }

    let errorElement;
    if(error){
        errorElement= <p>Error: {error.message}</p>
    }
    return (
        <div>
            <p className='text-center text-danger'>{errorElement}</p>
            <button onClick={()=>signInWithGoogle()}  
                    className='btn btn-outline-info w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={googleIcon} alt="" />
                    <span className='px-2'>SignIn With Google</span>
                </button>
        </div>
    );
};

export default SociaLogin;