import React from 'react'
import NextImage from 'next/image'
import NextLink from 'next/link'

type RecipeCardSmallType = {
  title: string
  author: string
  authorId: string
  recipeSlug: string
  rating?: number
  coverImage?: string
  onClick?: () => void
}

const RecipeCardSmall: React.FC<RecipeCardSmallType> = ({
  title,
  rating = 0,
  author,
  authorId,
  recipeSlug,
  coverImage="/images/placeholder.webp"
}: RecipeCardSmallType) => {
  return (
    <div className='rounded-xl p-2'>
      <NextLink href={`/recipe/${recipeSlug}`}>
        <div className='relative rounded-2xl w-full bg-grey-300 h-52 cursor-pointer'>
          <NextImage
            src={coverImage}
            alt={title}
            layout='fill'
            objectFit='cover'
            className='rounded-2xl'
          />
        </div>
      </NextLink>
      <NextLink href={`/recipe/${recipeSlug}`}>
        <a>
          <h4 className='text-lg mt-2 font-medium text-left capitalize text-black dark:text-white'>
            {title}
          </h4>
        </a>
      </NextLink>
      <div className='flex justify-between items-center'>
        <span className='flex items-center justify-start'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            className='h-4 w-4 text-black dark:text-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
            />
          </svg>
          <span className='ml-0.5 text-black dark:text-white'>{rating}</span>
        </span>
        <NextLink href={`/author/${authorId}`}>
          <a className='text-gray-800 dark:text-white uppercase hover:text-pink-500 dark:hover:text-pink-500'>
            {author}
          </a>
        </NextLink>
      </div>
    </div>
  )
}
export default RecipeCardSmall
