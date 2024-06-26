import clsx from 'clsx';

export default function SkeletonCard({ isLoading }: { isLoading?: boolean }) {
  return (
    <div
      className={clsx(
        'rounded-md   flex flex-col shadow-lg h-96 bg-slate-800 p-3 text-gray-300',
        {
          'relative overflow-hidden before-absolute before:inset-0 before:translate-x-full before:animate-[shimmer_1.5_infinite before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent ]':
            isLoading,
        }
      )}
    >
      <div className='relative mas-h-72 flex-1 bg-zinc-700 '></div>
      <div className='flex justify-between font-bold my-2 bg-zinc-700 '></div>
      <div className='h-3 w-8/12 rounded-md bg-zinc-700 '></div>
      <div className='flex justify-between font-bold my-2 bg-zinc-700 '></div>
      <div className='rounded-md  bg-zinc-700 w-auto h-10'> </div>
    </div>
  );
}
