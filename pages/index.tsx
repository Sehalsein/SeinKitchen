import Layout from '@components/Layout'
import React from 'react'
import dynamic from 'next/dynamic'
import NextImage from 'next/image'

const RecipeCardSmall = dynamic(
  () => import('@components/Cards/RecipeCardSmall')
)

const HomePage = () => {
  const {
    title,
    category,
    author: { name: authorName, id: authorId }
  } = {
    title: 'Fried Chicken',
    category: 'Dinner',
    author: {
      id: '0',
      name: 'Sehal Sein'
    }
  }
  return (
    <Layout>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 p-2 mb-4 sm:mb-8 md:mb-12'>
        <div className='flex flex-col justify-center items-start sm:col-span-1'>
          <span className='text-sm mx-1 border-b-4 border-pink-600 w-min text-pink-600 font-bold'>
            {category}
          </span>
          <h1 className='text-4xl md:text-6xl font-medium text-black dark:text-white mt-2'>{title}</h1>
          <span className='mx-1 text-gray-800 dark:text-white'>
            {authorName}
          </span>
        </div>
        <div className='sm:col-span-2'>
          <NextImage
            className='rounded-2xl bg-grey-300'
            src='/images/placeholder.webp'
            alt={category}
            layout='responsive'
            width={2}
            height={1.25}
            objectFit='cover'
          />
        </div>
      </div>
      <h1 className='font-bold text-3xl md:text-5xl mb-4 text-black dark:text-white p-2'>
        Featured
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {[...Array(6)].map((_, index) => (
          <RecipeCardSmall
            key={index}
            title={title}
            author={authorName}
            recipeSlug={(index + 1).toString()}
            authorId={authorId}
          />
        ))}
      </div>
      <h1 className='font-bold text-3xl md:text-5xl mt-8 mb-4 text-black dark:text-white p-2'>
        Latest
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {[...Array(6)].map((_, index) => (
          <RecipeCardSmall
            key={index}
            title={title}
            author={authorName}
            recipeSlug={(index + 1).toString()}
            authorId={authorId}
          />
        ))}
      </div>
    </Layout>
  )
}

export default HomePage
