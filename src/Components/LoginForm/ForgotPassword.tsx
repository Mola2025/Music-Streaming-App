import React, { useState } from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | null | undefined>(undefined);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!email) {
                setError('Please enter your email');
                return;
            }
            await sendPasswordResetEmail(auth, email);
            alert("Check your email");
        } catch (err: any) {
            setError(err.code);
        }
    };

    return (
        <div className='h-screen items-center justify-center min-h-[100vh] flex'>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Forgot Password</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FaUser className='icon' />
                    </div>
                    {error && <p style={{ color: 'red', marginTop: -15, marginBottom: 25 }}>{error}</p>}
                    <button type="submit">Forgot Password</button>

                    <div className='register'>
                        <span onClick={() => navigate('/login')}>Go Back</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;