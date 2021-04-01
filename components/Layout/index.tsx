import React, { ReactNode, useEffect, useState } from 'react'
import NextHead from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'

type LayoutType = {
  children: ReactNode
  title: string
  description: string
  image?: string
  date?: string
  type?: string
}

const Layout: React.FC<LayoutType> = ({ children, ...meta }: LayoutType) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  const router = useRouter()

  return (
    <div className='bg-white dark:bg-black'>
      <NextHead>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://kitchen.sehalsein.com${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://kitchen.sehalsein.com${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Lee Robinson' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta
          property='og:image'
          content={meta.image || '/images/placeholder.webp'}
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@leeerob' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </NextHead>
      <nav className='sticky top-0 z-10	flex justify-between items-center bg-white dark:bg-black max-w-5xl w-full mx-auto py-8 px-2 '>
        <button
          aria-label='Toggle Dark Mode'
          type='button'
          className='bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              stroke='currentColor'
              className='h-4 w-4 text-black dark:text-white'
            >
              {theme === 'dark' ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                />
              )}
            </svg>
          )}
        </button>
        <div>
          <NextLink href='/'>
            <a className='p-1 sm:p-4 text-black dark:text-white hover:bg-gray-200 hover:text-black dark:hover:bg-gray-800 rounded-md'>
              Home
            </a>
          </NextLink>
          <NextLink href='/recipe'>
            <a className='p-1 sm:p-4 text-black dark:text-white hover:bg-gray-200 hover:text-black dark:hover:bg-gray-800 rounded-md'>
              Recipes
            </a>
          </NextLink>
          <NextLink href='/about'>
            <a className='p-1 sm:p-4 text-black dark:text-white hover:bg-gray-200 hover:text-black dark:hover:bg-gray-800 rounded-md'>
              About
            </a>
          </NextLink>
        </div>
      </nav>
      <main className='flex flex-col max-w-5xl w-full mx-auto py-8 px-2'>
        {children}
      </main>
      <footer className='flex flex-col justify-center items-start max-w-5xl mx-auto w-full px-2'>
        <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mb-8' />
        <div className='w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3'>
          <div className='flex flex-col space-y-4'>
            <NextLink href='/'>
              <a className='text-black dark:text-white hover:text-pink-500 dark:hover:text-pink-500 transition'>
                Home
              </a>
            </NextLink>
            <NextLink href='/recipe'>
              <a className='text-black dark:text-white hover:text-pink-500 dark:hover:text-pink-500 transition'>
                Recipe
              </a>
            </NextLink>
            <NextLink href='/about'>
              <a className='text-black dark:text-white hover:text-pink-500 dark:hover:text-pink-500 transition'>
                About
              </a>
            </NextLink>
          </div>
          <div className='flex flex-col space-y-4'>
            <a
              className='text-black dark:text-white hover:text-pink-500 dark:hover:text-pink-500 transition'
              target='_blank'
              rel='noopener noreferrer'
              href='https://instagram.com/seinkitchen'
            >
              Instagram
            </a>
            <a
              className='text-black dark:text-white hover:text-pink-500 dark:hover:text-pink-500 transition'
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/Sehalsein/SeinKitchen'
            >
              Github
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
