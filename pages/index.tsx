import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '@components/sidebar'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Soptify 2.0</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <main className="">
        {/* Sidebar */}
        <Sidebar />
        {/* Center */}
      </main>
      <div>{/* Player */}</div>
    </div>
  )
}

export default Home
