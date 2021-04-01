import Layout from '@components/Layout'
import React from 'react'
import dynamic from 'next/dynamic'

const RecipeCardSmall = dynamic(
  () => import('@components/Cards/RecipeCardSmall')
)

const DefaultPage = () => {
  return (
    <Layout>
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

export default DefaultPage
