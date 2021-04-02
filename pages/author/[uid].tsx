import Layout from '@components/Layout'
import { RecipesQuery, useAuthorQuery } from '@graphql/generated/graphql'
import { PropType } from '@utils/misc'
import renderList from '@utils/renderList'
import { useRouter } from 'next/router'
import React from 'react'
import dynamic from 'next/dynamic'
import withApollo from '@utils/graphql/withApollo'

const RecipeCardSmall = dynamic(
  () => import('@components/Cards/RecipeCardSmall')
)

type RecipeListType = PropType<RecipesQuery, 'recipes'>[0]

const AuthorDetail = () => {
  const router = useRouter()
  const { uid } = router.query
  const { loading, error, data } = useAuthorQuery({
    variables: {
      id: uid as string
    }
  })

  if (error) return <h1>{'Error'}</h1>
  if (loading) return <h1>{'Loading'}</h1>

  return (
    <Layout
      title={`${data?.author?.name || ''} - Sein Kitchen`}
      description={`${data?.author?.name || ''} - Sein Kitchen`}
      image={
        data?.author?.displayPicture?.url ||
        data?.author?.recipes[0].coverImage?.url ||
        '/images/applogo.png'
      }
    >
      {data && data.author && (
        <>
          <h1 className='font-bold text-3xl md:text-5xl mb-4 text-black dark:text-white p-2'>
            {`Recipes by ${data?.author?.name}`}
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
            {renderList<RecipeListType>(
              data.author.recipes,
              loading,
              ({ slug, title, coverImage }: RecipeListType) => (
                <RecipeCardSmall
                  key={slug}
                  title={title}
                  author={data?.author?.name || ''}
                  recipeSlug={slug}
                  authorId={data?.author?.id || ''}
                  coverImage={coverImage?.url}
                />
              ),
              () => {
                return <h1>{'No Data'}</h1>
              },
              () => {
                return <h1>{'Loading'}</h1>
              }
            )}
          </div>
        </>
      )}

      {!loading && data && !data.author && <h1>{'No Author Found'}</h1>}
    </Layout>
  )
}

export default withApollo({ ssr: true })(AuthorDetail)
