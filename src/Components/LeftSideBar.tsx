import React from 'react';


const LeftSideBar = () => {
  return (
    <div className='text-center w-[90px] h-full bg-[#1e1d1d] flex-auto overflow-hidden resize-x flex-shrink-1 min-w-[90px] max-w-[20%] p-2 rounded-lg'>
      <div className='bg-[#1e1d1d] h-[68px] w-[100%] rounded flex flex-row p-3 items-center justify-between overflow-hidden'>
        <img className='cursor-pointer' src="/src/assets/frontend-assets/stack.png" alt="" />
        <p className='font-semibold text-sm text-white ml-[12px]'>Your Library</p>
        <div className='flex items-center gap-2'>
          <button className='bg-[#1e1d1d] rounded-full p-2 text-white'>
            <img className='w-5' src="/src/assets/frontend-assets/plus.png" alt="" />
          </button>
          <button className='bg-[#1e1d1d] rounded-full p-2 text-white'>
            <img className='w-8' src="/src/assets/frontend-assets/left-arrow-back.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar; 