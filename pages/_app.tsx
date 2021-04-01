import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>{"Sein Kitchen"}</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
