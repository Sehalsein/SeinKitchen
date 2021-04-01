import React from 'react'
import Layout from '@components/Layout'
import NextImage from 'next/image'

const RecipeDetailPage = () => {
  const {
    title,
    category,
    publishedAt,
    author: { name: authorName }
  } = {
    title: 'Fried Chicken',
    category: 'Dinner',
    publishedAt: '1 April 2021',
    author: {
      name: 'Sehal Sein'
    }
  }
  return (
    <Layout>
      <span className='mx-1 border-b-4 border-pink-600 w-min text-pink-600 font-bold'>
        {category}
      </span>
      <h1 className='text-6xl text-black dark:text-white mt-2'>{title}</h1>
      <div className='flex items-center justify-start my-2'>
        <span className='mx-1 text-gray-800 dark:text-white'>{publishedAt}</span>
        <span className='mx-1 text-gray-800 dark:text-white'>{authorName}</span>
      </div>

      <NextImage
        className='rounded-2xl bg-grey-300'
        src='/images/placeholder.webp'
        alt={title}
        layout='responsive'
        width={2}
        height={1}
        objectFit='cover'
      />

      <div className="mt-8">
        <h1>Content</h1>
      </div>
    </Layout>
  )
}

export default RecipeDetailPage
