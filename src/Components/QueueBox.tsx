import { useTheme } from './ThemeContext';
import { Song } from '../songs';

interface QueueBoxProps {
    queue: Song[];
    setQueue: React.Dispatch<React.SetStateAction<Song[]>>; // Setter para actualizar la cola
}

const QueueBox: React.FC<QueueBoxProps> = ({ queue, setQueue }) => {
    const { isDarkMode } = useTheme();

    const handleContextMenu = (e: React.MouseEvent, index: number) => {
        e.preventDefault();
        const menu = document.createElement('div');
        menu.className = "absolute bg-white shadow-md rounded p-2 z-50";
        menu.style.left = `${e.pageX}px`;
        menu.style.top = `${e.pageY}px`;

        const removeOption = document.createElement('div');
        removeOption.className = "p-2 cursor-pointer hover:bg-gray-200";
        removeOption.textContent = "Remove from Queue";
        removeOption.onclick = () => {
            setQueue((prevQueue) => prevQueue.filter((_, i) => i !== index));
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
        <div className={`text-center w-full h-full p-1 rounded-lg overflow-hidden ${isDarkMode ? 'bg-[#1e1d1d]' : 'bg-[#ebeaeaf4] text-black'}`}>
            <h1 className="text-lg font-semibold">Queue</h1>
            <h1>------------------</h1>
            <div className="overflow-y-auto max-h-[500px]">
                {queue.length === 0 ? (
                    <p>There is no songs in the queue.</p>
                ) : (
                    <ul className="flex flex-col gap-2">
                        {queue.map((song, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-4 py-2"
                                onContextMenu={(e) => handleContextMenu(e, index)} // Maneja el clic derecho
                            >
                                <img className="w-12 h-12" src={song.image} alt={song.name} />
                                <div className="flex flex-col">
                                    <p className="text-base font-semibold">{song.name}</p>
                                    <p className="text-base text-gray-500">{song.artist}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default QueueBox;
