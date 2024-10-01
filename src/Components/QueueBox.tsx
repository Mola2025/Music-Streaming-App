import React from 'react'

const QueueBox = () => {
    return (
        <div className='text-center w-[100%] h-full bg-[#1e1d1d] flex-auto p-1 rounded-lg overflow-hidden'>
            <div className="overflow-y-auto">
                <div className="flex justify-end">
                    <button className="flex items-center gap-1 px-2 py-1 bg-[#1e1d1d] rounded-md">
                        <img src="/src/assets/frontend-assets/close.png" alt="" className='h-5 w-5 cursor-pointer' />
                    </button>
                </div>
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
