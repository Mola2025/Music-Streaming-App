import React, { useState } from 'react';
import { useTheme } from './ThemeContext';

const LeftSideBar = () => {
  const { isDarkMode } = useTheme(); // Obtener el estado y la función del contexto
  const [isExpanded, setIsExpanded] = useState(false);

  // Función para alternar el ancho y la visibilidad del contenido
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`text-center h-full bg-[#1e1d1d] flex-auto flex-shrink-1 p-2 rounded-lg transition-all duration-300
        ${isExpanded ? 'w-[20%] max-w-[20%]' : 'w-[90px] min-w-[90px]'} ${isDarkMode ? 'bg-[#1e1d1d]' : 'bg-[#ebeaeaf4]'}`}>
      <div className={`h-[68px] w-[100%] rounded flex flex-row p-3 items-center justify-between overflow-hidden ${isDarkMode ? 'bg-[#1e1d1d]' : 'bg-[#ebeaeaf4] text-black'}`}>
        <img
          className='cursor-pointer'
          src={isDarkMode ? "/src/assets/frontend-assets/stack.png" : "/src/assets/frontend-assets/stackdark.png"}
          alt=""
          onClick={toggleSidebar} // Alterna ancho y visibilidad al hacer clic
        />
        <div className={`${isExpanded ? 'visible' : 'invisible'} flex items-center gap-2 ${isDarkMode ? 'bg-[#1e1d1d]' : 'bg-[#ebeaeaf4]'}`}>
          <p className={`font-semibold text-sm ml-[12px] ${isDarkMode ? 'bg-[#1e1d1d]' : 'text-black'}`}>Your Library</p>
          <button className={`rounded-full p-2 text-white ${isDarkMode ? 'bg-[#1e1d1d]' : 'bg-[#ebeaeaf4]'}`}>
            <img className='w-5' src={isDarkMode ? "/src/assets/frontend-assets/plus.png" : "/src/assets/frontend-assets/plusdark.png"} alt="" />
          </button>
          <button className={`rounded-full p-2 text-white ${isDarkMode ? 'bg-[#1e1d1d]' : 'bg-[#ebeaeaf4]'}`}>
            <img className='w-8' src={isDarkMode ? "/src/assets/frontend-assets/left-arrow-back.png" : "/src/assets/frontend-assets/left-arrow-backdark.png"} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
