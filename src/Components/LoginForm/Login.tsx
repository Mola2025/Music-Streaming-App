import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithGooglePopup } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
            alert("User Connected Succesfully");
            navigate('/spotify-container');
        }
        catch (err: any) {
            setError(err.message);
        };
    };

    const handlegoogleSubmit = async () => {
        const response = signInWithGooglePopup();
        console.log(response);
    }

    return (
        <div className='h-screen items-center justify-center min-h-[100vh] flex'>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <FaLock className='icon' />
                    </div>

                    {error && <p style={{ color: 'red', marginTop: -15, marginBottom: 25, textAlign: 'center' }}>{error}</p>}

                    <div className='forgot'>
                        <span onClick={() => navigate('/forgot')}>Forgot Password</span>
                    </div>

                    <button type="submit">Login</button>

                    <div className='bg-white rounded-full h-14 w-14 flex items-center justify-center p-3 mt-5 m-auto'>
                        <FcGoogle className='cursor-pointer size-20' onClick={handlegoogleSubmit} />
                    </div>

                    <div className='register'>
                        <p style={{ textAlign: 'center' }}>Don't have an account? <span onClick={() => navigate('/register')}>Register</span></p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login
