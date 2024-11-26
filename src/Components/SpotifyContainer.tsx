import React, { useState, useEffect } from 'react';
import { getSpotifyToken, searchSpotify, SpotifySearchResults } from '../services/spotify';
import LeftSideBar from './LeftSideBar';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import DropdownMenu from './DropdownMenu';
import { useTheme } from './ThemeContext';
import MainContent from './MainContent';
import { songList } from '../songs'; // Importa la lista de canciones
import { Song } from '../songs';

const SpotifyContainer: React.FC = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const { isDarkMode } = useTheme();
    const [token, setToken] = useState<string | null>(null);
    const [searchResults, setSearchResults] = useState<SpotifySearchResults | null>(null);
    const [currentTrackUri, setCurrentTrackUri] = useState<string | null>(null);
    const [randomSongs, setRandomSongs] = useState(songList.slice(0, 10)); // Estado para las canciones aleatorias
    const [queue, setQueue] = useState<Song[]>([]);
    const [library, setLibrary] = useState<Song[]>([]); // Estado para manejar la biblioteca

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const newToken = await getSpotifyToken();
                setToken(newToken);
            } catch (error) {
                console.error('Error fetching token:', error);
            }
        };

        fetchToken();
    }, []);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleSearch = async (query: string) => {
        if (!token) return;

        try {
            const results = await searchSpotify(query, token);
            setSearchResults(results); // Muestra los resultados de búsqueda
        } catch (error) {
            console.error('Error during search:', error);
        }
    };

    const handleTrackClick = (trackUri: string) => {
        setCurrentTrackUri(trackUri); // Reproduce la canción seleccionada
    };

    const loadRandomSongs = () => {
        const shuffledSongs = [...songList].sort(() => 0.5 - Math.random()); // Mezcla aleatoriamente las canciones
        setRandomSongs(shuffledSongs.slice(0, 10)); // Obtén las primeras 10 canciones
        setSearchResults(null); // Limpia los resultados de búsqueda
    };

    useEffect(() => {
        loadRandomSongs(); // Carga canciones aleatorias al inicio
    }, []);

    return (
        <div className={`h-screen text-center text-5xl ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className="flex flex-col h-full">
                <TopBar toggleMenu={toggleMenu} onSearch={handleSearch} onHomeClick={loadRandomSongs} />
                <DropdownMenu menuVisible={menuVisible} />

                {/* Contenedor de Sidebar y MainContent */}
                <div className="flex flex-grow bg-transparent border rounded-lg">
                    {/* Sidebar con ancho fijo */}
                    <LeftSideBar library={library} setLibrary={setLibrary} handleTrackClick={handleTrackClick} />

                    {/* MainContent se adapta al espacio restante */}
                    <div className="flex-grow overflow-auto bg-transparent border rounded-lg">
                        <MainContent
                            searchResults={searchResults}
                            randomSongs={randomSongs}
                            handleTrackClick={handleTrackClick}
                            setQueue={setQueue} // Pass the state updater
                        />
                    </div>
                </div>

                <BottomBar trackUri={currentTrackUri} queue={queue} setQueue={setQueue} library={library} setLibrary={setLibrary} />
            </div>
        </div>
    );
};

export default SpotifyContainer;
