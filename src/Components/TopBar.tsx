import React, { useEffect } from 'react';
import { useTheme } from './ThemeContext';
import '/src/index.css';
import { useNavigate } from 'react-router-dom';

interface TopBarProps {
    toggleMenu: () => void;
    onSearch: (query: string) => void;
}

const TopBar: React.FC<TopBarProps> = ({ toggleMenu, onSearch }) => {
    const navigate = useNavigate();
    const { isDarkMode } = useTheme();

    useEffect(() => {
        const minimizeButton = document.querySelector<HTMLButtonElement>('#minimize-btn');
        const maximizeButton = document.querySelector<HTMLButtonElement>('#maximize-btn');
        const closeButton = document.querySelector<HTMLButtonElement>('div[onClick="() => window.close()"]');

        minimizeButton?.addEventListener('click', () => {
            const windowElement = document.querySelector<HTMLElement>('.window');
            console.log('Minimize button clicked!');
            if (windowElement) {
                windowElement.style.height = '30px';
            }
        });

        maximizeButton?.addEventListener('click', () => {
            const windowElement = document.querySelector<HTMLElement>('.window');
            console.log('Maximize button clicked!');
            if (windowElement) {
                windowElement.style.width = '100%';
                windowElement.style.height = '100%';
            }
        });

        closeButton?.addEventListener('click', () => {
            window.close();
        });
    }, []);

    const handleSearchInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch((e.target as HTMLInputElement).value);
        }
    };

    return (
        <div className={`overflow-auto flex-row min-h-16 p-1 flex relative`}>
            <div id='arrows' className={`h-[100%] w-14 p-4 self-center ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
                <img src={isDarkMode ? "/src/assets/frontend-assets/left_arrow.png" : "/src/assets/frontend-assets/left_arrowdark.png"} alt="" className='cursor-pointer' onClick={() => window.history.back()} />
            </div>
            <div id='arrows' className={`h-[100%] w-14 p-4 self-center ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
                <img src={isDarkMode ? "/src/assets/frontend-assets/right_arrow.png" : "/src/assets/frontend-assets/right_arrowdark.png"} alt="" className='cursor-pointer' onClick={() => window.history.forward()} />
            </div>
            <div className={`bg-trasparent h-12 w-[550px] rounded-full flex justify-center items-center self-center md:mx-[350px] ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
                <div className='h-12 w-12 rounded-full flex justify-center items-center'>
                    <img src={isDarkMode ? "/src/assets/frontend-assets/home.png" : "/src/assets/frontend-assets/homedark.png"} alt="" className='h-8 w-8 cursor-pointer' />
                </div>
                <div className={`h-10 w-[90%] rounded-full flex items-center justify-center p-4 ml-1 ${isDarkMode ? 'bg-black' : 'bg-[#ebeaeaf4]'}`}>
                    <img src={isDarkMode ? "/src/assets/frontend-assets/search.png" : "/src/assets/frontend-assets/searchdark.png"} alt="" className='h-6 w-6 cursor-pointer' />
                    <input
                        id='search-input'
                        type="text"
                        placeholder='¿What do you want to reproduce?  '
                        className='bg-transparent outline-none px-2 tracking-tighter w-full'
                        onKeyPress={handleSearchInput}
                    />
                </div>
            </div>
            <div className={`h-12 w-12 rounded-full flex justify-center items-center mr-2 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
                <img src={isDarkMode ? "/src/assets/frontend-assets/forum.png" : "/src/assets/frontend-assets/forumdark.png"} alt="" className='h-10 w-10 cursor-pointer' onClick={() => navigate("/forum")} />
            </div>
            <div className={`h-12 w-12 rounded-full flex justify-center items-center mr-5 ${isDarkMode ? 'bg-black' : 'bg-white'}`} onClick={toggleMenu}>
                <img src={isDarkMode ? "/src/assets/frontend-assets/user-icon.png" : "/src/assets/frontend-assets/user-icondark.png"} alt="" className='h-9 w-9 cursor-pointer' />
            </div>
            <div className={`h-12 w-12 rounded-full flex justify-center items-center ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
                <img id='minimize-btn' src={isDarkMode ? "/src/assets/frontend-assets/minimize.png" : "/src/assets/frontend-assets/minimizedark.png"} alt="" className='h-5 w-5 cursor-pointer' />
            </div>
            <div className={`h-12 w-12 rounded-full flex justify-center items-center ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
                <img id='maximize-btn' src={isDarkMode ? "/src/assets/frontend-assets/maximize.png" : "/src/assets/frontend-assets/maximizedark.png"} alt="" className='h-5 w-5 cursor-pointer' />
            </div>
            <div className={`h-12 w-12 rounded-full flex justify-center items-center ${isDarkMode ? 'bg-black' : 'bg-white'}`} onClick={() => window.close()}>
                <img src={isDarkMode ? "/src/assets/frontend-assets/close.png" : "/src/assets/frontend-assets/closedark.png"} alt="" className='h-5 w-5 cursor-pointer' />
            </div>
        </div>
    );
};

export default TopBar;