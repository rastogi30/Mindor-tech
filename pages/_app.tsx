import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mindor.Tech</title>
        <meta name="description" content="One Partner, Infinite Possibilites. Web, Mobile, AI & Digital Solutions to power smarter enterprises."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
