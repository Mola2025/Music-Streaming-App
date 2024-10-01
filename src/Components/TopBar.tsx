import React, { useEffect } from 'react'
import '/src/index.css'


const TopBar = () => {
    useEffect(() => {
        const minimizeButton = document.querySelector<HTMLButtonElement>('#minimize-btn');
        const maximizeButton = document.querySelector<HTMLButtonElement>('#maximize-btn');
        const closeButton = document.querySelector<HTMLButtonElement>('div[onClick="() => window.close()"]');

        minimizeButton?.addEventListener('click', () => {
            const windowElement = document.querySelector<HTMLElement>('.window');
            console.log('Minimize button clicked!');
            if (windowElement) {
                windowElement.style.height = '30px';
            }
        });

        maximizeButton?.addEventListener('click', () => {
            const windowElement = document.querySelector<HTMLElement>('.window');
            console.log('Maximize button clicked!');
            if (windowElement) {
                windowElement.style.width = '100%';
                windowElement.style.height = '100%';
            }
        });

        closeButton?.addEventListener('click', () => {
            window.close();
        });
    }, []);

    return (
        <div className='overflow-auto bg-black flex-row min-h-16 p-1 flex'>
            <div id='arrows' className='bg-black h-[100%] w-14 p-4 self-center'>
                <img src="/src/assets/frontend-assets/left_arrow.png" alt="" className='cursor-pointer' onClick={() => window.history.back()} />
            </div>
            <div id='arrows' className='bg-black h-[100%] w-14 p-4 self-center'>
                <img src="/src/assets/frontend-assets/right_arrow.png " alt="" className='cursor-pointer' onClick={() => window.history.forward()} />
            </div>
            <div className='bg-trasparent h-12 w-[550px] rounded-full flex justify-center items-center self-center md:mx-[350px]'>
                <div className='bg-black h-12 w-12 rounded-full flex justify-center items-center'>
                    <img src="/src/assets/frontend-assets/home.png" alt="" className='h-8 w-8 cursor-pointer' />
                </div>
                <div className='bg-black h-10 w-[90%] rounded-full flex items-center justify-center p-4 ml-1'>
                    <img src="/src/assets/frontend-assets/search.png" alt="" className='h-6 w-6 cursor-pointer' />
                    <input id='search-input' type="text" placeholder='¿What do you want to reproduce?  ' className='bg-transparent outline-none px-2 tracking-tighter w-full' />
                </div>
            </div>
            <div className='bg-black h-12 w-12 rounded-full flex justify-center items-center mr-2'>
                <img src="/src/assets/frontend-assets/forum.png" alt="" className='h-10 w-10 cursor-pointer' />
            </div>
            <div className='bg-black h-12 w-12 rounded-full flex justify-center items-center mr-5'>
                <img src="/src/assets/frontend-assets/user-icon.png" alt="" className='h-9 w-9 cursor-pointer' />
            </div>
            <div className='bg-black h-12 w-12 rounded-full flex justify-center items-center'>
                <img id='minimize-btn' src="/src/assets/frontend-assets/minimize.png" alt="" className='h-5 w-5 cursor-pointer' />
            </div>
            <div className='bg-black h-12 w-12 rounded-full flex justify-center items-center'>
                <img id='maximize-btn' src="/src/assets/frontend-assets/maximize.png" alt="" className='h-5 w-5 cursor-pointer' />
            </div>
            <div className='bg-black h-12 w-12 rounded-full flex justify-center items-center' onClick={() => window.close()}>
                <img src="/src/assets/frontend-assets/close.png" alt="" className='h-5 w-5 cursor-pointer' />
            </div>
        </div>
    )
}

export default TopBar
