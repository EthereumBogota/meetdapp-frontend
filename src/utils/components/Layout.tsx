import React from 'react'
import '@/styles/globals.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { Box } from '@chakra-ui/react'
import '../../config/i18n'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface LayoutProps {
	children: React.ReactNode
}

const metadata = {
	title: 'MeetdApp',
	description: 'Embrace meaningful connections'
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const router = useRouter()

	// Check if the current route is not defined in your application
	const isUndefinedRoute = router.pathname === '/404'

	return (
		<>
			<Head>
				<title>{metadata.title}</title>
				<meta name='description' content={metadata.description} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/img/favicon.ico' sizes='any' />
			</Head>

			{isUndefinedRoute ? (
				<Box overflow={'hidden'}>{children}</Box>
			) : (
				<Box overflow={'hidden'}>
					<Navbar />
					{children}
					<Footer />
				</Box>
			)}
		</>
	)
}

export default Layout
