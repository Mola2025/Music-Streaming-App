import React from 'react';
import { useTheme } from './ThemeContext';
import { Song } from '../songs';

interface CurrentPlayProps {
    currentSong: Song;
    library: Song[];
    setLibrary: React.Dispatch<React.SetStateAction<Song[]>>;
}

const CurrentPlay: React.FC<CurrentPlayProps> = ({ currentSong, library, setLibrary }) => {
    const { isDarkMode } = useTheme();

    const isInLibrary = library.some(song => song.id === currentSong.id);

    const handleAddToLibrary = () => {
        if (isInLibrary) return;
        setLibrary(prevLibrary => [...prevLibrary, currentSong]);
    };

    return (
        <div
            className={`text-center w-[100%] h-full flex-auto p-1 rounded-lg overflow-hidden ${isDarkMode ? 'bg-[#1e1d1d] text-white' : 'bg-[#ebeaeaf4] text-black'}`}
        >
            <div className="overflow-y-auto">
                <div className="flex flex-col items-center">
                    <img
                        src={currentSong.image}
                        className="h-[200px] w-[200px]"
                        alt={`${currentSong.name} cover`}
                    />
                </div>
                <div className="flex flex-col mt-10 w-[84%]">
                    <p className="text-3xl font-semibold text-left">{currentSong.name}</p>
                    <p className="text-xl text-gray-500 text-left">{currentSong.artist.join(', ')}</p>
                </div>
                <div className="flex justify-end float-end mt-[-55px]">
                    <button
                        title="Add to Library"
                        className="flex items-center gap-2 px-2 py-1"
                        onClick={handleAddToLibrary}
                    >
                        <img
                            src={
                                isInLibrary
                                    ? isDarkMode ? '/src/assets/frontend-assets/checked-white.png' : '/src/assets/frontend-assets/checked-dark.png'
                                    : isDarkMode
                                        ? '/src/assets/frontend-assets/add.png'
                                        : '/src/assets/frontend-assets/adddark.png'
                            }
                            className="h-10 w-10"
                            alt="Add to Library"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CurrentPlay;
