import React from 'react'
import Head from 'next/head'
import Preview from '@/components/Preview'
const preview = () => {
  return (
    <div>
      <Head>
        <title>DevLink</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo-devlinks-small.svg" />
      </Head>
      <Preview />
    </div>
  )
}

export default preview