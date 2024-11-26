import React from 'react';
import "/src/index.css";

interface LyricsProps {
    lyrics: string;
}

const Lyrics: React.FC<LyricsProps> = ({ lyrics }) => {
    return (
        <div
            className="h-full w-full p-4 overflow-y-auto text-left"
            style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "14px",
                lineHeight: "1.6",
                whiteSpace: "pre-wrap", // Mantener saltos de línea
                color: "#fff", // Ajustar para modo oscuro
                scrollbarWidth: "thin", // Estilizar el scroll en navegadores compatibles
            }}
        >
            {lyrics || "Lyrics not available for this song."}
        </div>
    );
};

export default Lyrics;
