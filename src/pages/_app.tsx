import React from 'react'
import '../styles/fonts.css'
import { useState } from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../theme/theme'
import { Web3AuthProvider } from '@/services/web3auth'
import { CHAIN_CONFIG_TYPE } from '@/config/chainConfig'
import { WEB3AUTH_NETWORK_TYPE } from '@/config/web3AuthNetwork'
import Layout from '@/utils/components/Layout'

export default function App({ Component, pageProps }: AppProps) {

  const [web3AuthNetwork, setWeb3AuthNetwork] = useState<WEB3AUTH_NETWORK_TYPE>('testnet');
  const [chain, setChain] = useState<CHAIN_CONFIG_TYPE>('polygon');

  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
