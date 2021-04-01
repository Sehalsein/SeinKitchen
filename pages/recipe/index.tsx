import Layout from '@components/Layout'
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import withApollo from '@utils/graphql/withApollo'
import {
  Recipe,
  RecipesQuery,
  useRecipesQuery
} from '@graphql/generated/graphql'
import renderList from '@utils/renderList'
import { PropType } from '@utils/misc'
import useDebounce from '@utils/hooks/useDebounce'

const RecipeCardSmall = dynamic(
  () => import('@components/Cards/RecipeCardSmall')
)

type RecipeListType = PropType<RecipesQuery, 'recipes'> | undefined

const RecipeListPage = () => {
  const { loading, error, data, refetch } = useRecipesQuery({
    variables: {
      title: ''
    }
  })
  const [debouncedValue, _, setValue] = useDebounce('', 500)

  useEffect(() => {
    refetch({
      title: debouncedValue.trim()
    })
  }, [debouncedValue])

  if (error) return <h1>Error</h1>

  return (
    <Layout title='Sein Kitchen' description=''>
      <div className='relative w-full mb-4 p-2'>
        <input
          aria-label='Search recipes'
          type='text'
          onChange={(e) => {
            setValue(e.target.value)
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
        {renderList<RecipeListType>(
          data?.recipes,
          loading,
          ({ slug, title, author, coverImage }: Recipe) => (
            <RecipeCardSmall
              key={slug}
              title={title}
              coverImage={coverImage?.url}
              author={author?.name || ''}
              recipeSlug={slug}
              authorId={author?.id || ''}
            />
          ),
          () => {
            return <h1>No Data</h1>
          },
          () => {
            return <h1>loading</h1>
          }
        )}
      </div>
    </Layout>
  )
}

export default withApollo({ ssr: true })(RecipeListPage)
