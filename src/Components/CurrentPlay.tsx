import React from 'react'

const CurrentPlay = () => {
    return (
        <div className='text-center w-[100%] h-full bg-[#1e1d1d] flex-auto p-1 rounded-lg overflow-hidden'>
            <div className="overflow-y-auto">
                <div className="flex justify-end">
                    <button className="flex items-center gap-1 px-2 py-1 bg-[#1e1d1d] rounded-md">
                        <img src="/src/assets/frontend-assets/close.png" alt="" className='h-5 w-5 cursor-pointer' />
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/src/assets/react.svg" className="h-[200px] w-[200px] rounded-full" alt="" />
                </div>
                <div className="flex flex-col mt-10 bg-[#1e1d1d] w-[84%]">
                    <p className="text-3xl font-semibold text-left">Song Name</p>
                    <p className="text-xl text-gray-500 text-left">Artist Name</p>
                </div>
                <div className="flex justify-end bg-[#1e1d1d]0 float-end mt-[-55px]">
                    <button className="flex items-center gap-2 px-2 py-1">
                        <img src="/src/assets/frontend-assets/add.png" className="h-10 w-10" alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CurrentPlay
