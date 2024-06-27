'use client';

import { useCartStorage } from '@/store';

export default function Cart() {
  const useStore = useCartStorage();
  return (
    <>
        <div className='flex items-center cursor-pointer relative '>
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
        >
            <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707h12.586a1 1 0 0 0 .707-1.707L16.2 13M16 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0z '
            />
        </svg>
        <span className='bg-teal-600 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center absolute left-3 bottom-3 '>
            2
        </span>
        </div>
    </>
  );
}
