import { useEffect, useState } from 'react'
import Hero from '@/components/home/Hero'
import MiddleSections from '@/components/home/MiddleSections'
import { ethers } from 'ethers'
import { MeetdAppFactory } from '../../@types/typechain-types'
import MeetdAppFactoryJson from '../assets/contracts/MeetdAppFactory.json'
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
	const [meetdAppFactory, setMeetdAppFactory] =
		useState<MeetdAppFactory | null>(null)

	const fetchActiveEvents = async () => {
		setTimeout(() => {
			const provider: ethers.providers.JsonRpcProvider =
				new ethers.providers.JsonRpcProvider(PROVIDER)

			const meetdAppFactoryContract: MeetdAppFactory = new ethers.Contract(
				MeetdAppFactoryJson.address,
				MeetdAppFactoryJson.abi,
				provider
			) as MeetdAppFactory

			setMeetdAppFactory(meetdAppFactoryContract)
			setIsLoading(false)
		}, 3000)
	}

	useEffect(() => {
		fetchActiveEvents()
		// const ethereum = (window as any).ethereum

		// if (
		// 	typeof ethereum !== 'undefined' &&
		// 	typeof ethereum === 'object' &&
		// 	typeof ethereum.web3 !== 'undefined'
		// ) {
		// 	// MetaMask is installed and web3 is available
		// } else {
		// 	// MetaMask is not installed or web3 is not available
		// 	console.log('MetaMask no está instalado en este navegador.')
		// }
	}, [])

	return (
		<>
			<Head>
				<title>{metadata.title}</title>
				<meta name='description' content={metadata.description} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/img/favicon.ico' sizes='any' />
			</Head>
			<Navbar />
			<Hero />
			<MiddleSections isLoading={isLoading} />
			<Footer />
		</>
	)
}
