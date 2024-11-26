import React from 'react';
import { SpotifySearchResults } from '../services/spotify';
import { Song } from '../songs'; // Importa el tipo Song

interface MainContentProps {
    searchResults: SpotifySearchResults | null;
    randomSongs: Song[];
    handleTrackClick: (trackUri: string) => void;
    setQueue: React.Dispatch<React.SetStateAction<Song[]>>; // Proper typing for state setter
}

const MainContent: React.FC<MainContentProps> = ({ searchResults, randomSongs, handleTrackClick, setQueue }) => {
    const songsToDisplay = searchResults?.tracks?.items || randomSongs; // Muestra resultados o canciones aleatorias

    const handleContextMenu = (e: React.MouseEvent, song: Song) => {
        e.preventDefault();
        const menu = document.createElement('div');
        menu.className = "absolute bg-white shadow-md rounded p-2 z-50";
        menu.style.left = `${e.pageX}px`;
        menu.style.top = `${e.pageY}px`;

        const addToQueueOption = document.createElement('div'); // Crear un nuevo elemento div para "Add to Queue"
        addToQueueOption.className = "p-2 cursor-pointer hover:bg-gray-200";
        addToQueueOption.textContent = "Add to Queue"; // Mostrar el texto "Add to Queue"
        addToQueueOption.onclick = () => {
            setQueue((prevQueue: Song[]) => [...prevQueue, song]); // Ensure proper typing
            document.body.removeChild(menu);
        };

        menu.appendChild(addToQueueOption);
        document.body.appendChild(menu);

        const removeMenu = () => {
            if (menu.parentNode) {
                document.body.removeChild(menu);
            }
            document.removeEventListener('click', removeMenu);
        };

        document.addEventListener('click', removeMenu);
    };

    return (
        <div className="p-2 m-2 border rounded-lg bg-transparent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {songsToDisplay.map((item, index) => (
                <div
                    key={item.id || index} // Usa ID de Spotify o índice único
                    className="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleTrackClick(item.uri || item.path)} // Usa URI o ruta de MP3
                    onContextMenu={(e) => handleContextMenu(e, item)}
                >
                    <img
                        src={item.album?.images[0]?.url || item.image} // Imagen de Spotify o local
                        alt={item.name}
                        className="w-16 h-16 mr-2"
                    />
                    <div className="text-base">
                        <div className="font-bold">{item.name}</div>
                        <div className="text-gray-400">{item.artists?.[0]?.name || item.artist}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MainContent;
