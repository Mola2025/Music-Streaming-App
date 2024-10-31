import React, { useState } from 'react';
import VolumeControl from './VolumeControl';
import CurrentPlay from './CurrentPlay';
import QueueBox from './QueueBox';
import Lyrics from './Lyrics';
import { useTheme } from './ThemeContext';

const BottomBar = () => {
    const { isDarkMode } = useTheme(); // Obtener el estado y la función del contexto
    const [activeView, setActiveView] = useState(null); // Estado para la vista activa (queue o currentPlay)

    const handleQueueClick = () => {
        setActiveView(activeView === 'queue' ? null : 'queue');
    };

    const handleCurrentSongClick = () => {
        setActiveView(activeView === 'currentPlay' ? null : 'currentPlay');
    };

    const handleLyricsClick = () => {
        setActiveView(activeView === 'lyrics' ? null : 'lyrics');
    };

    return (
        <div className={`min-h-20 max-w-full flex-end p-2 flex-col justify-between ${isDarkMode ? 'bg-black' : 'bg-[#ebeaeaf4]'}`}>
            <div className={`hidden lg:flex items-center gap-4 ${isDarkMode ? 'bg-black' : 'bg-[#ebeaeaf4]'}`}>
                <img className='w-20 p-1' src="/src/assets/react.svg" alt="" />
                <div>
                    <p className='text-sm'>Song Name</p>
                    <p className='text-sm'>Description</p>
                </div>
                <div className={`flex flex-col items-center gap-1 m-auto ${isDarkMode ? 'bg-black' : 'bg-[#ebeaeaf4]'}`}>
                    <div className='flex gap-4'>
                        <img className='w-4 cursor-pointer' src={isDarkMode ? "/src/assets/frontend-assets/shuffle.png" : "/src/assets/frontend-assets/shuffledark.png"} alt="" />
                        <img className='w-4 cursor-pointer' src={isDarkMode ? "/src/assets/frontend-assets/prev.png" : "/src/assets/frontend-assets/prevdark.png"} alt="" />
                        <img className='w-4 cursor-pointer' src={isDarkMode ? "/src/assets/frontend-assets/play.png" : "/src/assets/frontend-assets/playdark.png"} alt="" />
                        <img className='w-4 cursor-pointer' src={isDarkMode ? "/src/assets/frontend-assets/next.png" : "/src/assets/frontend-assets/nextdark.png"} alt="" />
                        <img className='w-4 cursor-pointer' src={isDarkMode ? "/src/assets/frontend-assets/loop.png" : "/src/assets/frontend-assets/loopdark.png"} alt="" />
                    </div>
                    <div className='flex items-center gap-5'>
                        <p className='text-sm'>0:00</p>
                        <div className="w-[60vw] max-w-[500px] bg-gray-200 rounded-full">
                            <hr className="h-1 border-none w-full bg-green-700 rounded-full"></hr>
                        </div>
                        <p className='text-sm'>0:00</p>
                    </div>
                </div>
                <div className='hidden lg:flex items-center gap-2 opacity-75 mr-10'>
                    <img className='w-4 cursor-pointer' src={isDarkMode ? "/src/assets/frontend-assets/plays.png" : "/src/assets/frontend-assets/playsdark.png"} alt="" onClick={handleCurrentSongClick} />
                    <img className='w-4 cursor-pointer' src={isDarkMode ? "/src/assets/frontend-assets/mic.png" : "/src/assets/frontend-assets/micdark.png"} alt="" onClick={handleLyricsClick} />
                    <img className='w-4 cursor-pointer' src={isDarkMode ? "/src/assets/frontend-assets/queue.png" : "/src/assets/frontend-assets/queuedark.png"} alt="" onClick={handleQueueClick} />
                    <img className='w-4 cursor-pointer' src={isDarkMode ? "/src/assets/frontend-assets/volume.png" : "/src/assets/frontend-assets/volumedark.png"} alt="" />
                    <div className='flex items-center -mt-9'>
                        <VolumeControl />
                    </div>
                </div>
            </div>

            <div className={`absolute right-0 top-16 bottom-16 text-center w-[25%] h-auto p-2 rounded-lg overflow-hidden transition-opacity duration-300 ease-in-out ${activeView ? 'opacity-100' : 'opacity-0'} ${isDarkMode ? 'bg-[#1e1d1d]' : 'bg-[#ebeaeaf4]'}`}>
                <div
                    className={`transition-opacity duration-300 ease-in-out ${activeView === 'currentPlay' ? 'opacity-100' : 'opacity-0 h-0'}`}
                >
                    <CurrentPlay />
                </div>
                <div
                    className={`transition-opacity duration-300 ease-in-out ${activeView === 'lyrics' ? 'opacity-100' : 'opacity-0 h-0'}`}
                >
                    <Lyrics />
                </div>
                <div
                    className={`transition-opacity duration-300 ease-in-out ${activeView === 'queue' ? 'opacity-100' : 'opacity-0 h-0'}`}
                >
                    <QueueBox />
                </div>
            </div>
        </div >
    );
};

export default BottomBar;