import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import { auth } from '../../firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            alert("User Registered Succesfully");
            navigate('/login');
        }
        catch (err: any) {
            setError(err.message);
        };
    };

    return (
        <div className='h-screen items-center justify-center min-h-[100vh] flex'>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <FaLock className='icon' />
                    </div>
                    {error && <p style={{ color: 'red', marginTop: -15, marginBottom: 25 }}>{error}</p>}

                    <button type="submit">Register</button>

                    <div className='register'>
                        <p>Do you have an account? <span onClick={() => navigate('/')}>Login</span></p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register;