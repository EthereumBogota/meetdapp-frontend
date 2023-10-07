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
import { FactoryEvent } from '@/models/event.model'

const metadata = {
	title: 'MeetdApp',
	description: 'Embrace meaningful connections'
}

export default function Home() {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [activeEvents, setActiveEvents] = useState<FactoryEvent[]>([])

	const fetchActiveEvents = async () => {
		const rpcProvider: ethers.providers.JsonRpcProvider =
			new ethers.providers.JsonRpcProvider(PROVIDER)

		const meetdAppFactoryContract: MeetdAppFactory = new ethers.Contract(
			CONTRACTS_JSON.meetdAppFactory.address,
			CONTRACTS_JSON.meetdAppFactory.abi,
			rpcProvider
		) as MeetdAppFactory

		setActiveEvents(await getActiveFactoryEvents(meetdAppFactoryContract))

		setIsLoading(false)
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
			</Head>
			<Navbar />
			<Hero />
			<MiddleSections isLoading={isLoading} />
			<Footer />
		</>
	)
}

async function getActiveFactoryEvents(
	meetdAppFactoryContract: MeetdAppFactory
): Promise<FactoryEvent[]> {
	let numberFactoryEvents: ethers.BigNumber | number =
		await meetdAppFactoryContract.numEvents()

	numberFactoryEvents = numberFactoryEvents.toNumber()

	const factoryEvents: FactoryEvent[] = []

	for (let i = 1; i <= numberFactoryEvents; i++) {
		const factoryEvent: FactoryEvent =
			await meetdAppFactoryContract.mapEventNum(i)
		if (factoryEvent.active) {
			factoryEvents.push(factoryEvent)
		}
	}

	return factoryEvents
}
