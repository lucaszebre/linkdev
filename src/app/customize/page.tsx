"use client"
import React from 'react'
import Head from 'next/head'
import Customize from '@/components/Customize'
const customize = () => {
  return (
    <div>
      <Head>
        <title>DevLink</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo-devlinks-small.svg" />
      </Head>
      <Customize />
    </div>
  )
}

export default customize