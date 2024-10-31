import React, { useState } from 'react';
import '/src/index.css'

const VolumeControl: React.FC = () => {
    const [volume, setVolume] = useState<number>(50);

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(event.target.value));
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
            {/* <p className='flex justify-end text-sm ml-32'>{volume}</p> */}
        </div >
    );
};

export default VolumeControl;