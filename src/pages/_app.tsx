import React from 'react'
import '@/styles/globals.css'
import { useState } from 'react'
import { User, UserContext } from '@/lib/UserContext'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../theme/theme'
import Layout from '../utils/components/Layout'
import Navbar from '../../utils/components/Navbar'
import Footer from '../../utils/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | null>(null)
  const [xxx, dasds] = useState<boolean>(false)
  return (
    <ChakraProvider theme={customTheme}>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </UserContext.Provider>
    </ChakraProvider>
  )
}
