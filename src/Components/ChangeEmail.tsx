import React, { useState, useEffect } from "react";
import { auth } from "../firebase-config.ts";
import { useNavigate } from "react-router-dom";
import { updateEmail, reauthenticateWithCredential, EmailAuthProvider, sendEmailVerification } from "firebase/auth";
import "/src/index.css";

const ChangeEmail: React.FC = () => {
    const navigate = useNavigate();
    const [currentEmail, setCurrentEmail] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Function to check if the email is verified
    const checkEmailVerification = async () => {
        const user = auth.currentUser;
        if (user) {
            if (!user.emailVerified) {
                try {
                    await sendEmailVerification(user);
                    setSuccess("Your email is not verified. A verification email has been sent to your address. Please verify it before updating your email.");
                } catch (error) {
                    console.error("Error sending verification email:", error);
                    setError("Failed to send verification email.");
                }
            }
        }
    };

    // Check email verification when component mounts
    useEffect(() => {
        checkEmailVerification();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (currentEmail && newEmail && password) {
            try {
                const user = auth.currentUser;
                if (user && user.email) {
                    if (!user.emailVerified) {
                        setError("Please verify your current email before changing it.");
                        return;
                    }

                    // Reauthenticate the user
                    const credential = EmailAuthProvider.credential(user.email, password);
                    await reauthenticateWithCredential(user, credential);

                    // Update email and send verification email to the new address
                    await updateEmail(user, newEmail);
                    await sendEmailVerification(user);
                    setSuccess("Verification email sent. Please verify your new email address to complete the update.");
                }
            } catch (error: any) {
                console.error("Error updating email:", error);
                setError(error.message || "Error updating email. Please check your credentials.");
            }
        } else {
            setError("Please enter your current email, new email, and password.");
        }
    };

    return (
        <div className='h-screen items-center justify-center min-h-[100vh] flex'>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Change Email</h1>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder='Current Email'
                            value={currentEmail}
                            onChange={(e) => setCurrentEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder='New Email'
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder='Current Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p style={{ color: 'red', marginTop: -15, marginBottom: 25 }}>{error}</p>}
                    {success && <p style={{ color: 'green', marginTop: -15, marginBottom: 25 }}>{success}</p>}
                    <button type="submit">Send Verification</button>

                    <div className='register'>
                        <span onClick={() => navigate('/spotify-container')}>Go Back</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangeEmail;
