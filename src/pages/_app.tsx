import type { AppProps } from 'next/app'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { polygon, polygonMumbai } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

import { ChakraProvider } from '@chakra-ui/react'
import {
	connectorsForWallets,
	darkTheme,
	getDefaultWallets,
	RainbowKitProvider
} from '@rainbow-me/rainbowkit'

import customTheme from '../styles/chakra-themes/theme'

import '../styles/fonts.css'
import '@rainbow-me/rainbowkit/styles.css'

const { chains, publicClient, webSocketPublicClient } = configureChains(
	[
		...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'false' ? [polygon] : []),

		...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
			? [polygonMumbai]
			: [])
	],
	[publicProvider()]
)

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID ?? '0'

const { wallets } = getDefaultWallets({
	appName: 'RainbowKit dApp',
	projectId,
	chains
})

const connectors = connectorsForWallets([...wallets])

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
	webSocketPublicClient
})

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<WagmiConfig config={wagmiConfig}>
			<RainbowKitProvider
				chains={chains}
				coolMode
				modalSize='compact'
				theme={darkTheme({
					accentColor: '#236677',
					accentColorForeground: 'white',
					borderRadius: 'large',
					fontStack: 'system'
				})}
			>
				<ChakraProvider theme={customTheme}>
					<Component {...pageProps} />
				</ChakraProvider>
			</RainbowKitProvider>
		</WagmiConfig>
	)
}
