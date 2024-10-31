import React, { useState } from 'react';
import LeftSideBar from './LeftSideBar'
import TopBar from './TopBar'
import BottomBar from './BottomBar'
import Forum from './Forum/Forum'
import DropdownMenu from './DropdownMenu'
import { useTheme } from './ThemeContext';

const SpotifyContainer = () => {

    const [menuVisible, setMenuVisible] = useState(false);
    const { isDarkMode } = useTheme();

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className={`h-screen text-center text-5xl ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className="flex flex-col h-full">
                <TopBar toggleMenu={toggleMenu} /> {/* Pasa la función toggleMenu al TopBar */}
                <DropdownMenu menuVisible={menuVisible} /> {/* Renderiza el DropdownMenu aquí */}
                <LeftSideBar />
                <BottomBar />
            </div>
        </div>
    )
}

export default SpotifyContainer
