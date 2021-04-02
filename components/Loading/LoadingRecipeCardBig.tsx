import React from 'react'

const LoadingRecipeCardBig = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 p-2 mb-4 sm:mb-8 md:mb-12'>
      <div className='flex flex-col justify-center items-start sm:col-span-1'>
        <div className='animate-pulse mt-2 w-full h-12 bg-gray-300 rounded-md'></div>
        <div className='animate-pulse mt-2 w-full h-6 bg-gray-300 rounded-md'></div>
      </div>
      <div className='sm:col-span-2'>
        <div className='animate-pulse relative rounded-lg w-full bg-gray-300 h-72 cursor-pointer' />
      </div>
    </div>
  )
}

export default LoadingRecipeCardBig
