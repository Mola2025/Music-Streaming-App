import React, { useState } from 'react';
import { useTheme } from './ThemeContext';

const CurrentPlay = () => {

    const { isDarkMode } = useTheme(); // Obtener el estado y la función del contexto

    return (
        <div className={`text-center w-[100%] h-full flex-auto p-1 rounded-lg overflow-hidden ${isDarkMode ? 'bg-[#1e1d1d]' : 'bg-[#ebeaeaf4] text-black'}`}>
            <div className="overflow-y-auto">
                <div className="flex flex-col items-center">
                    <img src="/src/assets/react.svg" className="h-[200px] w-[200px] rounded-full" alt="" />
                </div>
                <div className="flex flex-col mt-10 w-[84%]">
                    <p className="text-3xl font-semibold text-left">Song Name</p>
                    <p className="text-xl text-gray-500 text-left">Artist Name</p>
                </div>
                <div className="flex justify-end float-end mt-[-55px]">
                    <button className="flex items-center gap-2 px-2 py-1">
                        <img src={isDarkMode ? "/src/assets/frontend-assets/add.png" : "/src/assets/frontend-assets/adddark.png"} className="h-10 w-10" alt="" />
                    </button>
                </div>
            </div>
        </div >
    )
}

export default CurrentPlay
