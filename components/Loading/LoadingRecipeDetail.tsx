import React from 'react'

const LoadingRecipeDetail = () => {
  return (
    <div>
      <div className='animate-pulse mt-2 w-full h-8 bg-gray-300 rounded-md'></div>
      <div className='animate-pulse mt-2 w-full h-6 bg-gray-300 rounded-md'></div>
      <div className='animate-pulse mt-2 rounded-lg w-full bg-gray-300 h-72 cursor-pointer' />

    </div>
  )
}

export default LoadingRecipeDetail
