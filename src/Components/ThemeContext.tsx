import React, { createContext, useContext, useState } from 'react';

// Define el tipo para el contexto
interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

// Crear el contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Proveedor del contexto
export const ThemeProvider: React.FC = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Por defecto en modo oscuro

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook para usar el contexto
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
    }
    return context;
};