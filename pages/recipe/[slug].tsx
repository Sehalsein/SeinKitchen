import React from 'react'
import Layout from '@components/Layout'
import NextImage from 'next/image'
import withApollo from '@utils/graphql/withApollo'
import { useRecipeQuery } from '@graphql/generated/graphql'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import NextLink from 'next/link'

const RecipeDetailPage = () => {
  const router = useRouter()
  const { slug } = router.query
  const { loading, error, data } = useRecipeQuery({
    variables: {
      slug: slug as string
    }
  })

  if (error) return <h1>{'Error'}</h1>
  if (loading) return <h1>{'Loading'}</h1>

  return (
    <Layout
      title={data?.recipe?.title || 'Sein Kitchen'}
      description={
        data?.recipe?.summary || data?.recipe?.title || 'Sein Kitchen'
      }
      date={data?.recipe?.publishedAt}
      image={data?.recipe?.coverImage?.url}
    >
      {data && data.recipe && (
        <>
          <span className='mx-1 border-b-4 border-pink-600 w-max text-pink-600 font-bold uppercase'>
            {data.recipe.category}
          </span>
          <h1 className='text-4xl md:text-6xl font-medium text-black dark:text-white mt-2'>
            {data.recipe.title}
          </h1>
          <div className='flex items-center justify-start my-2'>
            <span className='flex items-center justify-center mx-1 text-gray-800 dark:text-white'>
              <NextImage
                className='rounded-full bg-grey-300'
                src={
                  data.recipe.author?.displayPicture?.url ||
                  '/images/placeholder.webp'
                }
                alt={data.recipe.author?.name}
                layout='fixed'
                width={35}
                height={35}
                objectFit='cover'
              />
              <NextLink href={`/author/${data.recipe.author?.id}`}>
                <a className='text-gray-800 dark:text-white uppercase ml-1 hover:text-pink-500 dark:hover:text-pink-500'>
                  {data.recipe.author?.name}
                </a>
              </NextLink>
            </span>
            <span className='mx-1 text-gray-800 dark:text-white'>
              {new Date(data.recipe.publishedAt).toDateString()}
            </span>
          </div>

          <NextImage
            className='rounded-2xl bg-grey-300'
            src={data.recipe.coverImage?.url || '/images/placeholder.webp'}
            alt={data.recipe.title}
            layout='responsive'
            width={2}
            height={1}
            objectFit='cover'
          />
          <div className='mt-8'>
            <ReactMarkdown>{data.recipe.content.markdown}</ReactMarkdown>
          </div>
        </>
      )}

      {!data || (!data.recipe && <h1>{'No Recipe Found'}</h1>)}
    </Layout>
  )
}

export default withApollo({ ssr: true })(RecipeDetailPage)
