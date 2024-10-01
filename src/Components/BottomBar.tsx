import React from 'react'
import VolumeControl from './VolumeControl'

const BottomBar = () => {
    return (
        <div className='min-h-20 max-w-full bg-black flex-end p-2 flex-col justify-between'>
            <div className='bg-black hidden lg:flex items-center gap-4'>
                <img className='w-20 p-1' src="/src/assets/react.svg" alt="" />
                <div>
                    <p className='text-sm'>Song Name</p>
                    <p className='text-sm'>Description</p>
                </div>
                <div className='flex flex-col items-center gap-1 bg-black m-auto'>
                    <div className='flex gap-4'>
                        <img className='w-4 cursor-pointer' src="/src/assets/frontend-assets/shuffle.png" alt="" />
                        <img className='w-4 cursor-pointer' src="/src/assets/frontend-assets/prev.png" alt="" />
                        <img className='w-4 cursor-pointer' src="/src/assets/frontend-assets/play.png" alt="" />
                        <img className='w-4 cursor-pointer' src="/src/assets/frontend-assets/next.png" alt="" />
                        <img className='w-4 cursor-pointer' src="/src/assets/frontend-assets/loop.png" alt="" />
                    </div>
                    <div className='flex items-center gap-5'>
                        <p className='text-sm'>0:00</p>
                        <div className="w-[60vw] max-w-[500px] bg-gray-200 rounded-full">
                            <hr className="h-1 border-none w-full bg-green-700 rounded-full"></hr>
                        </div>
                        <p className='text-sm'>0:00</p>
                    </div>
                </div>
                <div className='hidden lg:flex items-center gap-2 opacity-75 mr-10'>
                    <img className='w-4 cursor-pointer' src="/src/assets/frontend-assets/plays.png" alt="" />
                    <img className='w-4 cursor-pointer' src="/src/assets/frontend-assets/mic.png" alt="" />
                    <img className='w-4 cursor-pointer' src="/src/assets/frontend-assets/queue.png" alt="" />
                    <img className='w-4 cursor-pointer' src="/src/assets/frontend-assets/volume.png" alt="" />
                    <div className='flex items-center -mt-9'>
                        <VolumeControl />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomBar
