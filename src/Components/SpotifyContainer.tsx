import React from 'react'
import LeftSideBar from './LeftSideBar'
import TopBar from './TopBar'
import BottomBar from './BottomBar'
import QueueBox from './QueueBox'
import CurrentPlay from './CurrentPlay'

const SpotifyContainer = () => {
    return (
        <div className='h-screen bg-black text-center text-white text-5xl'>
            <div className="flex flex-col h-full">
                <TopBar />
                <LeftSideBar />
                <div className='absolute right-0 top-16 bottom-16 text-center w-[25%] h-auto bg-[#1e1d1d] flex-auto overflow-hidden  p-2 rounded-lg'>
                    {/* <QueueBox /> */}
                    <CurrentPlay />
                </div>
                <BottomBar />
            </div>
        </div>
    )
}

export default SpotifyContainer
