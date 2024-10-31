import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useTheme } from './ThemeContext';

const DropdownMenu = ({ menuVisible }) => {
    const navigate = useNavigate();
    const auth = getAuth();
    const { isDarkMode, toggleTheme } = useTheme(); // Obtener el estado y la función del contexto

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("User signed out");
            navigate('/');
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    const handleEditProfile = () => {
        if (auth.currentUser) {
            navigate("/edit");
        } else {
            console.error("User not authenticated yet.");
        }
    };


    return (
        <>
            {menuVisible && (
                <div className={`absolute top-14 right-28 rounded-md p-2 shadow-md z-10 border ${isDarkMode ? 'bg-trasparent border-white text-white' : 'bg-trasparent border-black text-black'}`}>
                    <ul className='list-none p-0 m-0'>
                        <li className='menu-item' onClick={toggleTheme}>
                            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                        </li>
                        <li className='menu-item' onClick={() => handleEditProfile()}>Edit Profile</li>
                        <li>
                            <span className='menu-item' onClick={handleLogout}>Logout</span>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default DropdownMenu;