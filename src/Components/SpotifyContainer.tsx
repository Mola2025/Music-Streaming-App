import React, { useState, useEffect } from 'react';
import { getSpotifyToken, searchSpotify, SpotifySearchResults } from '../services/spotify';
import LeftSideBar from './LeftSideBar'
import TopBar from './TopBar'
import BottomBar from './BottomBar'
import DropdownMenu from './DropdownMenu'
import { useTheme } from './ThemeContext';

const SpotifyContainer: React.FC = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const { isDarkMode } = useTheme();
    const [token, setToken] = useState<string | null>(null);
    const [searchResults, setSearchResults] = useState<SpotifySearchResults>({});

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
            setSearchResults(results);
        } catch (error) {
            console.error("Error en la búsqueda:", error);
        }
    };

    return (
        <div className={`h-screen text-center text-5xl ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className="flex flex-col h-full">
                <TopBar toggleMenu={toggleMenu} onSearch={handleSearch} />
                <DropdownMenu menuVisible={menuVisible} />
                <LeftSideBar />
                <div className="flex-grow overflow-auto w-[88%] ml-28 mr-10 -mt-[80vh] h-[90%]">
                    <div className="p-4 m-4 border rounded-lg bg-trasparent">
                        {/* Mostrar tracks */}
                        {searchResults.tracks && searchResults.tracks.items.map(track => (
                            <div key={track.id} className="flex items-center mb-4">
                                <img src={track.album.images[0].url} alt={track.name} className="w-16 h-16 mr-4" />
                                <div>
                                    <div>{track.name}</div>
                                    <div className="text-sm text-gray-400">{track.artists[0].name}</div>
                                </div>
                            </div>
                        ))}

                        {/* Mostrar categorías */}
                        {searchResults.categories && searchResults.categories.items.map(category => (
                            <div key={category.id} className="flex items-center mb-4">
                                <img src={category.icons[0].url} alt={category.name} className="w-16 h-16 mr-4 text-gray-400 text-lg" />
                                <div className="text-sm text-gray-400">{category.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <BottomBar />
            </div>
        </div>
    )
}

export default SpotifyContainer
