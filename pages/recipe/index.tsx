import Layout from '@components/Layout'
import React from 'react'
import dynamic from 'next/dynamic'

const RecipeCardSmall = dynamic(
  () => import('@components/Cards/RecipeCardSmall')
)

const RecipeListPage = () => {
  return (
    <Layout>
      <div className='relative w-full mb-4 p-2'>
        <input
          aria-label='Search recipes'
          type='text'
          onChange={() => {
            console.log('Search')
          }}
          placeholder='Search Recipes'
          className='px-4 py-3 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
        />
        <svg
          className='absolute right-5 top-5 h-5 w-5 text-gray-400 dark:text-gray-300'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {[...Array(1000)].map((_, index) => (
          <RecipeCardSmall
            key={index}
            title={`Recipe ${index + 1}`}
            author='Sehal Sein'
            recipeSlug={(index + 1).toString()}
            authorId={(index + 1).toString()}
          />
        ))}
      </div>
    </Layout>
  )
}

export default RecipeListPage
