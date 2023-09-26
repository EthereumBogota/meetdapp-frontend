import { useEffect, useState } from 'react'
import Hero from '@/components/home/Hero'
import MiddleSections from '@/components/home/MiddleSections'
import { ethers } from 'ethers'
import { MeetdAppFactory } from '../../@types/typechain-types'
import { CONTRACTS_JSON } from '@/constants/constants'
import Head from 'next/head'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import '../config/i18n'
import { PROVIDER } from '@/constants/constants'

const metadata = {
	title: 'MeetdApp',
	description: 'Embrace meaningful connections'
}

export default function Home() {
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const fetchActiveEvents = async () => {
		setTimeout(() => {
			const rpcProvider: ethers.providers.JsonRpcProvider =
				new ethers.providers.JsonRpcProvider(PROVIDER)

			const meetdAppFactoryContract: MeetdAppFactory = new ethers.Contract(
				CONTRACTS_JSON.meetdAppFactory.address,
				CONTRACTS_JSON.meetdAppFactory.abi,
				rpcProvider
			) as MeetdAppFactory

			setIsLoading(false)
		}, 3000)
	}

	useEffect(() => {
		fetchActiveEvents()
	}, [])

	return (
		<>
			<Head>
				<title>{metadata.title}</title>
				<meta name='description' content={metadata.description} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/images/favicon.ico' sizes='any' />
			</Head>
			<Navbar />
			<Hero />
			<MiddleSections isLoading={isLoading} />
			<Footer />
		</>
	)
}
