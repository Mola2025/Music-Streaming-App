import { useState } from 'react';
import { useTheme } from './ThemeContext';
import { Song } from '../songs';

interface LeftSideBarProps {
  library: Song[];
  setLibrary: React.Dispatch<React.SetStateAction<Song[]>>;
  handleTrackClick: (trackUri: string) => void;
}

const LeftSideBar: React.FC<LeftSideBarProps> = ({ library, setLibrary, handleTrackClick }) => {
  const { isDarkMode } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAlphabetical, setIsAlphabetical] = useState(false); // Estado para alternar el orden

  const sortedLibrary = isAlphabetical
    ? [...library].sort((a, b) => a.name.localeCompare(b.name))
    : library;

  // Función para alternar el ancho y la visibilidad del contenido
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  // Función para alternar el orden de las canciones
  const toggleOrder = () => {
    setIsAlphabetical(!isAlphabetical);
    if (isAlphabetical) {
      setLibrary((prevLibrary) =>
        [...prevLibrary].sort((a, b) => a.name.localeCompare(b.name))
      );
    } else {
      setLibrary((prevLibrary) => [...prevLibrary]);
    }
  };

  const handleContextMenu = (e: React.MouseEvent, songId: number) => {
    e.preventDefault();

    const menu = document.createElement('div');
    menu.className = 'absolute bg-white shadow-md rounded p-2 z-50';
    menu.style.left = `${e.pageX}px`;
    menu.style.top = `${e.pageY}px`;

    const removeOption = document.createElement('div');
    removeOption.className = 'p-2 cursor-pointer hover:bg-gray-200';
    removeOption.textContent = 'Remove from Library';
    removeOption.onclick = () => {
      setLibrary((prevLibrary) => prevLibrary.filter((song) => song.id !== songId));
      document.body.removeChild(menu);
    };

    menu.appendChild(removeOption);
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
    <div
      className={`text-center h-full max-w-[100px] flex-shrink-1 p-2 rounded-lg transition-all duration-300 ${isExpanded ? 'min-w-[20%]' : 'min-w-[100px]'
        } ${isDarkMode ? 'bg-[#1e1d1d]' : 'bg-[#ebeaeaf4]'}`}
    >
      <div
        className={`h-[68px] w-[100%] rounded flex flex-row p-3 items-center justify-between overflow-hidden ${isDarkMode ? 'bg-[#1e1d1d]' : 'bg-[#ebeaeaf4] text-black'
          }`}
      >
        <img
          className="cursor-pointer"
          src={
            isDarkMode
              ? '/src/assets/frontend-assets/stack.png'
              : '/src/assets/frontend-assets/stackdark.png'
          }
          alt=""
          onClick={toggleSidebar}
        />
        <div
          className={`${isExpanded ? 'visible' : 'invisible'
            } flex items-center gap-2 ${isDarkMode ? 'bg-[#1e1d1d]' : 'bg-[#ebeaeaf4]'}`}
        >
          <p
            className={`font-semibold text-sm ml-[12px] ${isDarkMode ? 'bg-[#1e1d1d]' : 'text-black'
              }`}
          >
            Your Library
          </p>
          <button
            title="Toggle order"
            onClick={toggleOrder}
            className={`rounded-full p-2 text-white ${isDarkMode ? 'bg-[#1e1d1d]' : 'bg-[#ebeaeaf4]'
              }`}
          >
            <img
              className="w-5"
              src={
                isDarkMode
                  ? '/src/assets/frontend-assets/alphabetical-dark.png'
                  : '/src/assets/frontend-assets/alphabetical.png'
              }
              alt="Toogle order"
            />
          </button>
          <button
            title="Close"
            onClick={toggleSidebar}
            className={`rounded-full p-2 text-white ${isDarkMode ? 'bg-[#1e1d1d]' : 'bg-[#ebeaeaf4]'
              }`}
          >
            <img
              className="w-8"
              src={
                isDarkMode
                  ? '/src/assets/frontend-assets/left-arrow-back.png'
                  : '/src/assets/frontend-assets/left-arrow-backdark.png'
              }
              alt=""
            />
          </button>
        </div>
      </div>
      {/* Lista de canciones en la biblioteca */}
      {isExpanded && (
        <div className="overflow-y-auto max-h-[500px]">
          <style>{`
            .overflow-y-auto::-webkit-scrollbar {
              width: 0px;
              background: transparent;
            }
          `}</style>
          <ul className="mt-4">
            {sortedLibrary.map((song) => (
              <li
                key={song.id}
                className="flex items-center gap-2 mb-2 cursor-pointer"
                onClick={() => handleTrackClick(song.path)} // Reproduce la canción al darle click
                onContextMenu={(e) => handleContextMenu(e, song.id)} // Clic derecho para eliminar
              >
                <img
                  src={song.image}
                  alt={song.name}
                  className="w-16 h-16 rounded-lg"
                />
                {isExpanded && (
                  <div className="text-left">
                    <p className="text-sm font-bold">{song.name}</p>
                    <p className="text-xs text-gray-400">
                      {song.artist.join(', ')}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      {!isExpanded && (
        <div className="overflow-y-auto max-h-[500px]">
          <style>{`
            .overflow-y-auto::-webkit-scrollbar {
              width: 0px;
              background: transparent;
            }
          `}</style>
          <ul className="mt-4">
            {sortedLibrary.map((song) => (
              <li
                key={song.id}
                className="flex items-center gap-2 mb-2 cursor-pointer"
                onClick={() => handleTrackClick(song.path)} // Reproduce la canción al darle click
                onContextMenu={(e) => handleContextMenu(e, song.id)} // Clic derecho para eliminar
              >
                <img
                  src={song.image}
                  alt={song.name}
                  className="w-16 h-16 rounded-lg"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LeftSideBar;


