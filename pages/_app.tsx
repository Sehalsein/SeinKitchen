import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <React.Fragment>
      <Head>
        <title>Sein Kitchen</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
