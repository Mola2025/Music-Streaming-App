import React from 'react';
import '/src/index.css';

interface VolumeControlProps {
    volume: number;
    onVolumeChange: (volume: number) => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({ volume, onVolumeChange }) => {
    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onVolumeChange(Number(event.target.value));
    };

    return (
        <div>
            <input
                id="volume-slider"
                placeholder='volume'
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className='w-[100px] h-1 mr-5'
            />
        </div>
    );
};

export default VolumeControl;