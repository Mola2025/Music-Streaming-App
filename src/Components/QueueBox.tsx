import React from 'react'
import { useTheme } from './ThemeContext';

const QueueBox = () => {

    const { isDarkMode } = useTheme(); // Obtener el estado y la función del contexto

    return (
        <div className={`text-center w-[100%] h-full flex-auto p-1 rounded-lg overflow-hidden ${isDarkMode ? 'bg-[#1e1d1d]' : 'bg-[#ebeaeaf4] text-black'}`}>
            <div className="overflow-y-auto">
                <div className="flex flex-col gap-2 p-2">
                    <h1 className="text-lg font-semibold text-left">Current Song</h1>
                    <div className="flex items-center gap-2 py-3">
                        <img className="w-12 h-12" src="/src/assets/react.svg" alt="" />
                        <div className="flex flex-col">
                            <p className="text-base font-semibold">Song Name</p>
                            <p className="text-base text-gray-500">Artist Name</p>
                        </div>
                    </div>
                    <h1 className="text-lg font-semibold text-left">Next Songs</h1>
                    <ul className="flex flex-col gap-2 py-2">
                        <li className="flex items-center gap-4 py-2">
                            <img className="w-12 h-12" src="/src/assets/react.svg" alt="" />
                            <div className="flex flex-col">
                                <p className="text-base font-semibold">Song Name</p>
                                <p className="text-base text-gray-500">Artist Name</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-4 py-2">
                            <img className="w-12 h-12" src="/src/assets/react.svg" alt="" />
                            <div className="flex flex-col">
                                <p className="text-base font-semibold">Song Name</p>
                                <p className="text-base text-gray-500">Artist Name</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-4 py-2">
                            <img className="w-12 h-12" src="/src/assets/react.svg" alt="" />
                            <div className="flex flex-col">
                                <p className="text-base font-semibold">Song Name</p>
                                <p className="text-base text-gray-500">Artist Name</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-4 py-2">
                            <img className="w-12 h-12" src="/src/assets/react.svg" alt="" />
                            <div className="flex flex-col">
                                <p className="text-base font-semibold">Song Name</p>
                                <p className="text-base text-gray-500">Artist Name</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default QueueBox
