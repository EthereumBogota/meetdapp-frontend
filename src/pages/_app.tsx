import React from 'react'
import '@/styles/globals.css'
import { useState } from 'react'
import { User, UserContext } from '@/lib/UserContext'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../theme/theme'
import Layout from '../utils/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
	const [user, setUser] = useState<User | null>(null)
	return (
		<ChakraProvider theme={customTheme}>
			<UserContext.Provider value={{user, setUser}}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</UserContext.Provider>
		</ChakraProvider>
	)
}
