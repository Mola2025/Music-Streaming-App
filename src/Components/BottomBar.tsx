import React, { useState, useEffect, useRef } from 'react';
import VolumeControl from './VolumeControl';
import CurrentPlay from './CurrentPlay';
import QueueBox from './QueueBox';
import Lyrics from './Lyrics';
import { useTheme } from './ThemeContext';
import { songList } from '../songs';
import { Song } from '../songs';

interface BottomBarProps {
    trackUri: string | null;
    queue: Song[];
    setQueue: React.Dispatch<React.SetStateAction<Song[]>>; // Setter para queue
    library: Song[]; // Viene del spotify container este estado/setter
    setLibrary: React.Dispatch<React.SetStateAction<Song[]>>; // viene del spotify container este setter/estado
}

const BottomBar: React.FC<BottomBarProps> = ({ trackUri, queue, setQueue, library, setLibrary }) => {
    const { isDarkMode } = useTheme();
    const [activeView, setActiveView] = useState<string | null>(null);
    const [currentSong, setCurrentSong] = useState(songList[0]);
    const [playHistory, setPlayHistory] = useState<Song[]>([]); // Historial de canciones
    const [lyrics, setLyrics] = useState<string>(''); // Estado para almacenar las letras
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false); // Estado para Loop
    const [isShuffling, setIsShuffling] = useState(false); // Estado para Shuffle
    const [volume, setVolume] = useState<number>(50);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleQueueClick = () => {
        setActiveView(activeView === 'queue' ? null : 'queue');
    };

    const handleCurrentSongClick = () => {
        setActiveView(activeView === 'currentPlay' ? null : 'currentPlay');
    };

    const handleLyricsClick = () => {
        setActiveView(activeView === 'lyrics' ? null : 'lyrics');
    };

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleNext = () => {
        if (queue.length > 0) {
            const nextSong = queue[0];
            setPlayHistory((prevHistory: Song[]) => [...prevHistory, currentSong]); // Historial
            setQueue((prevQueue: Song[]) => prevQueue.slice(1)); // Quita la canción de la cola
            setCurrentSong(nextSong);
        } else if (isShuffling) { // Si está activado el shuffle
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * songList.length);
            } while (songList[randomIndex].id === currentSong.id);

            setPlayHistory((prevHistory: Song[]) => [...prevHistory, currentSong]); // Historial
            setCurrentSong(songList[randomIndex]);
        } else { // Si no está activado el shuffle
            const nextSongIndex = songList.findIndex((song) => song.id === currentSong.id) + 1;
            if (nextSongIndex < songList.length) {
                setPlayHistory((prevHistory: Song[]) => [...prevHistory, currentSong]); // Historial
                setCurrentSong(songList[nextSongIndex]);
            } else {
                setPlayHistory((prevHistory: Song[]) => [...prevHistory, currentSong]); // Historial
                setCurrentSong(songList[0]);
            }
        }
    };

    const handlePrevious = () => {
        if (playHistory.length > 0) {
            const lastSong = playHistory[playHistory.length - 1];
            setPlayHistory((prevHistory: Song[]) => prevHistory.slice(0, -1)); // Quita la última canción del historial
            setCurrentSong(lastSong);
        } else {
            const prevSongIndex = songList.findIndex((song) => song.id === currentSong.id) - 1;
            if (prevSongIndex >= 0) {
                setCurrentSong(songList[prevSongIndex]);
            } else {
                setCurrentSong(songList[songList.length - 1]);
            }
        }
    };

    const handleLoop = () => {
        setIsLooping(!isLooping);
    };

    const handleShuffle = () => {
        setIsShuffling(!isShuffling);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            const seekTime = (parseFloat(e.target.value) / 100) * duration;
            audioRef.current.currentTime = seekTime;
        }
    };

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // Nuevo useEffect para controlar la cancion y reproduccion
    useEffect(() => {
        if (audioRef.current) {
            const updateTime = () => setCurrentTime(audioRef.current!.currentTime);
            const setAudioDuration = () => setDuration(audioRef.current!.duration);

            audioRef.current.volume = volume / 100;
            audioRef.current.loop = isLooping;

            if (isPlaying) {
                audioRef.current.play();
            }

            audioRef.current.addEventListener('timeupdate', updateTime);
            audioRef.current.addEventListener('loadedmetadata', setAudioDuration);

            return () => {
                audioRef.current?.removeEventListener('timeupdate', updateTime);
                audioRef.current?.removeEventListener('loadedmetadata', setAudioDuration);
            };
        }
    }, [currentSong, volume, isPlaying, isLooping]);

    // Nuevo useEffect para cargar la cancion
    useEffect(() => {
        if (audioRef.current && trackUri) {
            audioRef.current.src = trackUri;
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [trackUri]);

    // Nuevo useEffect para cargar la cancion que yo clickee
    useEffect(() => {
        if (trackUri) {
            const selectedSong = songList.find(song => song.path === trackUri);
            if (selectedSong) {
                setCurrentSong(selectedSong);
            }
        }
    }, [trackUri]);

    // Nuevo useEffect para cargar las letras
    useEffect(() => {
        const loadLyrics = async () => {
            if (currentSong.lyrics) {
                try {
                    const response = await fetch(currentSong.lyrics);
                    const text = await response.text();
                    setLyrics(text);
                } catch (error) {
                    console.error('Error al cargar las letras:', error);
                    setLyrics('No lyrics available.');
                }
            } else {
                setLyrics('No lyrics available.');
            }
        };

        loadLyrics();
    }, [currentSong]);

    // Nuevo useEffect para controlar la reproduccion
    useEffect(() => {
        if (audioRef.current) {
            isPlaying ? audioRef.current.play() : audioRef.current.pause();
        }
    }, [isPlaying]);

    return (
        <div className={`min-h-20 max-w-full flex-end p-2 flex-col justify-between ${isDarkMode ? 'bg-black' : 'bg-[#ebeaeaf4]'}`}>
            <div className={`hidden lg:flex items-center gap-4 ${isDarkMode ? 'bg-black' : 'bg-[#ebeaeaf4]'}`}>
                <img
                    className="w-20 h-[70px] object-cover"
                    src={currentSong.image} // Imagen de la portada del álbum
                    alt={currentSong.name}
                />
                <div className="flex flex-col overflow-hidden">
                    <p
                        className={`text-sm whitespace-nowrap overflow-hidden ${currentSong.artist.length > 20 ? 'scrolling-text' : ''}`}
                    >
                        {currentSong.artist}
                    </p>
                    <p
                        className={`text-sm whitespace-nowrap overflow-hidden ${currentSong.name.length > 20 ? 'scrolling-text' : ''}`}
                    >
                        {currentSong.name}
                    </p>
                </div>
                <div className={`flex flex-col items-center gap-1 m-auto ${isDarkMode ? 'bg-black' : 'bg-[#ebeaeaf4]'}`}>
                    <div className="flex gap-4">
                        <img className="w-4 cursor-pointer" src={isDarkMode ? (isShuffling ? "/src/assets/frontend-assets/shuffle-green.png" : "/src/assets/frontend-assets/shuffle.png")
                            : (isShuffling ? "/src/assets/frontend-assets/shuffle-green.png" : "/src/assets/frontend-assets/shuffledark.png")} alt="" onClick={handleShuffle} />
                        <img className="w-4 cursor-pointer" src={isDarkMode ? "/src/assets/frontend-assets/prev.png" : "/src/assets/frontend-assets/prevdark.png"} alt="" onClick={handlePrevious} />
                        <img onClick={handlePlayPause} className="w-4 cursor-pointer" src={isDarkMode ? (isPlaying ? "/src/assets/frontend-assets/pause.png" : "/src/assets/frontend-assets/play.png") : (isPlaying ? "/src/assets/frontend-assets/pausedark.png" : "/src/assets/frontend-assets/playdark.png")} alt="" />
                        <img className="w-4 cursor-pointer" src={isDarkMode ? "/src/assets/frontend-assets/next.png" : "/src/assets/frontend-assets/nextdark.png"} alt="" onClick={handleNext} />
                        <img className="w-4 cursor-pointer" src={isDarkMode ? (isLooping ? "/src/assets/frontend-assets/loop-green.png" : "/src/assets/frontend-assets/loop.png")
                            : (isLooping ? "/src/assets/frontend-assets/loop-green.png" : "/src/assets/frontend-assets/loopdark.png")} alt="" onClick={handleLoop} />
                    </div>
                    <div className="flex items-center gap-4 w-full max-w-[500px]">
                        <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                            {formatTime(currentTime)}
                        </p>
                        <div
                            className={`relative w-[60vw] max-w-[500px] h-2 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                            <input
                                title='Audio Bar'
                                type="range"
                                min="0"
                                max="100"
                                value={(currentTime / duration) * 100 || 0}
                                onChange={handleSeek}
                                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div
                                className={`absolute top-0 left-0 h-2 rounded-full ${isDarkMode ? "bg-green-500" : "bg-green-700"
                                    }`}
                                style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                            ></div>
                        </div>
                        <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                            {formatTime(duration)}
                        </p>
                    </div>
                </div>
                <div className="hidden lg:flex items-center gap-2 opacity-75 mr-10">
                    <img className="w-4 cursor-pointer" src={isDarkMode ? "/src/assets/frontend-assets/plays.png" : "/src/assets/frontend-assets/playsdark.png"} alt="" onClick={handleCurrentSongClick} />
                    <img className="w-4 cursor-pointer" src={isDarkMode ? "/src/assets/frontend-assets/mic.png" : "/src/assets/frontend-assets/micdark.png"} alt="" onClick={handleLyricsClick} />
                    <img className="w-4 cursor-pointer" src={isDarkMode ? "/src/assets/frontend-assets/queue.png" : "/src/assets/frontend-assets/queuedark.png"} alt="" onClick={handleQueueClick} />
                    <img className="w-4 cursor-pointer" src={isDarkMode ? "/src/assets/frontend-assets/volume.png" : "/src/assets/frontend-assets/volumedark.png"} alt="" />
                    <div className="flex items-center -mt-9">
                        <VolumeControl volume={volume} onVolumeChange={setVolume} />
                    </div>
                </div>
            </div>

            <audio ref={audioRef} src={currentSong.path} loop={isLooping} onEnded={handleNext} hidden />

            <div className={`absolute right-0 top-16 bottom-16 text-center w-[25%] h-auto p-2 rounded-lg overflow-hidden transition-opacity duration-300 ease-in-out ${activeView ? 'opacity-100' : 'opacity-0'} ${isDarkMode ? 'bg-[#1e1d1d]' : 'bg-[#ebeaeaf4]'}`}>
                <div className={`transition-opacity duration-300 ease-in-out ${activeView === 'currentPlay' ? 'opacity-100' : 'opacity-0 h-0'}`}>
                    <CurrentPlay currentSong={currentSong} library={library} setLibrary={setLibrary} />
                </div>
                <div className={`transition-opacity duration-300 ease-in-out ${activeView === 'lyrics' ? 'opacity-100' : 'opacity-0 h-0'}`}>
                    <div className="h-full flex flex-col justify-center items-center bg-[#1e1d1d] rounded-lg">
                        <Lyrics lyrics={lyrics} />
                    </div>
                </div>
                <div className={`transition-opacity duration-300 ease-in-out ${activeView === 'queue' ? 'opacity-100' : 'opacity-0 h-0'}`}>
                    <QueueBox queue={queue} setQueue={setQueue} />
                </div>
            </div>
        </div>
    );
};

export default BottomBar;
