import React from 'react'

const LoadingRecipeCardSmall = () => {
  return (
    <div className='rounded-xl p-2'>
      <div className='animate-pulse relative rounded-lg w-full bg-gray-300 h-52 cursor-pointer' />
      <div className='animate-pulse mt-2 w-full h-6 bg-gray-300 rounded-md'></div>
    </div>
  )
}

export default LoadingRecipeCardSmall
