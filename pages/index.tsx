import Layout from '@components/Layout'
import React from 'react'
import dynamic from 'next/dynamic'
import {
  RecipesQuery,
  useHomePageRecipesQuery
} from '@graphql/generated/graphql'
import { PropType } from '@utils/misc'
import renderList from '@utils/renderList'
import withApollo from '@utils/graphql/withApollo'

const RecipeCardSmall = dynamic(
  () => import('@components/Cards/RecipeCardSmall')
)
const RecipeCardBig = dynamic(() => import('@components/Cards/RecipeCardBig'))
const LoadingRecipeCardSmall = dynamic(
  () => import('@components/Loading/LoadingRecipeCardSmall')
)
const LoadingRecipeCardBig = dynamic(
  () => import('@components/Loading/LoadingRecipeCardBig')
)

type RecipeListType = PropType<RecipesQuery, 'recipes'>[0]

const HomePage = () => {
  const { loading, error, data } = useHomePageRecipesQuery({
    variables: {
      first: 6,
      slug: 'fried-chicken-sehal-sein'
    }
  })

  if (error) return <h1>{'Error'}</h1>

  return (
    <Layout
      title='Sein Kitchen'
      description='Sein Kitchen'
      date={data?.recipe?.publishedAt}
      image={data?.recipe?.coverImage?.url}
    >
      {!loading && data && data.recipe && (
        <RecipeCardBig
          title={data.recipe.title}
          author={data.recipe.author?.name || ''}
          recipeSlug={data.recipe.slug}
          authorId={data.recipe.author?.id || ''}
          coverImage={data.recipe.coverImage?.url}
          category={data.recipe.category}
        />
      )}

      {loading && <LoadingRecipeCardBig />}

      <h1 className='font-bold text-3xl md:text-5xl mb-4 text-black dark:text-white p-2'>
        {'Featured'}
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {renderList<RecipeListType>(
          data?.recipes,
          loading,
          ({ slug, title, author, coverImage }: RecipeListType) => (
            <RecipeCardSmall
              key={slug}
              title={title}
              author={author?.name || ''}
              recipeSlug={slug}
              authorId={author?.id || ''}
              coverImage={coverImage?.url}
            />
          ),
          () => {
            return <h1>{'No Data'}</h1>
          },
          () => {
            return [0, 1, 2].map((val) => <LoadingRecipeCardSmall key={val} />)
          }
        )}
      </div>
      <h1 className='font-bold text-3xl md:text-5xl mt-8 mb-4 text-black dark:text-white p-2'>
        {'Latest'}
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {renderList<RecipeListType>(
          data?.recipes,
          loading,
          ({ slug, title, author, coverImage }: RecipeListType) => (
            <RecipeCardSmall
              key={slug}
              title={title}
              author={author?.name || ''}
              recipeSlug={slug}
              authorId={author?.id || ''}
              coverImage={coverImage?.url}
            />
          ),
          () => {
            return <h1>{'No Data'}</h1>
          },
          () => {
            return [0, 1, 2].map((val) => <LoadingRecipeCardSmall key={val} />)
          }
        )}
      </div>
    </Layout>
  )
}

export default withApollo({ ssr: true })(HomePage)
