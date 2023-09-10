import React from 'react'
import '@/styles/globals.css'
import { useState } from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../theme/theme'
import Layout from '../utils/components/Layout'
import { Web3AuthProvider } from '@/services/web3auth'
import { WEB3AUTH_NETWORK_TYPE } from "../config/web3AuthNetwork";
import { CHAIN_CONFIG_TYPE } from "../config/chainConfig";
export default function App({ Component, pageProps }: AppProps) {

	const [user, setUser] = useState<User | null>(null)
	const [web3AuthNetwork, setWeb3AuthNetwork] = useState<WEB3AUTH_NETWORK_TYPE>('testnet');
  const [chain, setChain] = useState<CHAIN_CONFIG_TYPE>('polygon');

	return (
		<ChakraProvider theme={customTheme}>
			<Web3AuthProvider chain={chain} web3AuthNetwork={web3AuthNetwork}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Web3AuthProvider>
		</ChakraProvider>
	)
}
