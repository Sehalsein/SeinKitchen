import React from 'react'
import NextImage from 'next/image'
import NextLink from 'next/link'

type RecipeCardBigType = {
  title: string
  author: string
  authorId: string
  recipeSlug: string
  coverImage?: string
  category?: string
  onClick?: () => void
}

const RecipeCardBig: React.FC<RecipeCardBigType> = ({
  title,
  author,
  authorId,
  recipeSlug,
  coverImage = '/images/placeholder.webp',
  category
}: RecipeCardBigType) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 p-2 mb-4 sm:mb-8 md:mb-12'>
      <div className='flex flex-col justify-center items-start sm:col-span-1'>
        <span className='text-sm mx-1 border-b-4 border-pink-600 w-max text-pink-600 font-bold uppercase'>
          {category}
        </span>
        <NextLink href={`/recipe/${recipeSlug}`}>
          <a>
            <h1 className='text-4xl md:text-6xl font-medium text-black dark:text-white mt-2'>
              {title}
            </h1>
          </a>
        </NextLink>

        <NextLink href={`/author/${authorId}`}>
          <a className='text-gray-800 dark:text-white uppercase hover:text-pink-500 dark:hover:text-pink-500'>
            {author}
          </a>
        </NextLink>
      </div>
      <div className='sm:col-span-2'>
        <NextImage
          className='rounded-2xl bg-grey-300'
          src={coverImage}
          alt={title}
          layout='responsive'
          width={2}
          height={1.25}
          objectFit='cover'
        />
      </div>
    </div>
  )
}
export default RecipeCardBig
