import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

function Navbar() {
  // const useStore = useCartStorage();

  return (
    <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300 '>
      <Link
        href='/'
        className='uppercase font-bold text-md h-12 flex items-center '
      >
        Next Store
      </Link>
      <div className='flex items-center gap-8'>
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
        <div>
          <SignedIn>
            <UserButton></UserButton>
          </SignedIn>
          <SignedOut>
            <SignInButton mode='modal'>
              <button className='border rounded-md border-gray-400 ox-3 py-3 '>
                Fazer login
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
