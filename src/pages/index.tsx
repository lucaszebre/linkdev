import Head from 'next/head'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Navbar from '@/components/Navbar'
import Customize from '@/components/Customize'
import Link from '@/components/Link'
import Profile from '@/components/Profile'
import Preview from '@/components/Preview'
export default function Home() {
  return (
    <>
      <Head>
        <title>DevLink</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo-devlinks-small.svg" />
      </Head>
      <Preview />
    </>
  )
}
