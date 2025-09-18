import type { AppProps } from "next/app";
import Head from "next/head";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Show loader for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Mindor.Tech</title>
        <meta
          name="description"
          content="One Partner, Infinite Possibilites. Web, Mobile, AI & Digital Solutions to power smarter enterprises."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon.png" />
        <link rel="icon" type="" sizes="32x32" href="/assets/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}
