import Attendees from '@/components/events/Attendees'
import EventDetails from '@/components/events/EventDetails'
import EventImage from '@/components/events/EventImage'
import EventLocation from '@/components/events/EventLocation'
import GetTicketCard from '@/components/events/GetTicketCard'
import PreviousEvents from '@/components/events/PreviousEvents'
import TagsSection from '@/components/events/TagsSection'
import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import MeetdAppFactoryJson from '../../../assets/contracts/MeetdAppFactory.json'
import MeetdAppFactoryEventJson from '../../../assets/contracts/MeetdAppEvent.json'
import { useEffect, useState } from 'react'
import {
	MeetdAppEvent,
	MeetdAppFactory
} from '../../../../@types/typechain-types'
import { ethers } from 'ethers'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import '../../../config/i18n'
import { CHAINID, PROVIDER } from '@/constants/constants'
import { useAccount, useNetwork } from 'wagmi'

interface Event {
	id: string
	title: string
	description: string
}

type Props = {
	event: Event
}

function Event(props: Props): JSX.Element {
	const { event } = props
	const [isBuyTicketLoading, setIsBuyTicketLoading] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [meetdAppFactoryContract, setMeetdAppFactoryContract] =
		useState<MeetdAppFactory | null>(null)
	const router = useRouter()

	// TODO: generate nanoId
	const slug: string | string[] | undefined = router.query?.id

	const { address } = useAccount()
	const { chain } = useNetwork()

	const onBuyTicket = async () => {
		const ethereum = (window as any).ethereum

		if (!ethereum) {
			// TODO: i18n
			alert('MetaMask no está instalado en este navegador.')
			return
		}

		if (!address) {
			// TODO: i18n
			alert('Conecta tu cuenta de MetaMask para comprar un ticket.')
			return
		}

		if (chain?.id !== CHAINID) {
			// TODO: i18n
			alert('Cambia a la red mumbai para comprar un ticket.')
			return
		}

		try {
			setIsBuyTicketLoading(true)

			const web3Provider: ethers.providers.Web3Provider =
				new ethers.providers.Web3Provider(ethereum)

			await web3Provider.send('eth_requestAccounts', [])

			const signer = new ethers.providers.Web3Provider(
				(window as any).ethereum
			).getSigner()

			const eventId: string = 'mC8cCmWH5Ws8IZQy'
			const bytesEventId = ethers.utils.toUtf8Bytes(eventId)
			const hashBytes32EventId = ethers.utils.keccak256(bytesEventId)

			if (meetdAppFactoryContract) {
				const eventContractAdress: string =
					await meetdAppFactoryContract.mapIdEvent(hashBytes32EventId)

				const meetdAppEventContract = new ethers.Contract(
					eventContractAdress,
					MeetdAppFactoryEventJson.abi,
					signer
				) as MeetdAppEvent

				const tx = await meetdAppEventContract.buyTicket({ gasLimit: 2500000 })
				await tx.wait(1)

				setIsBuyTicketLoading(false)

				// TODO: i18n
				alert('Se ha comprado el ticket correctamente.')
			}
		} catch (error) {
			setIsBuyTicketLoading(false)

			if (error instanceof Error) {
				if (error.message.includes('user rejected transaction')) {
					return
				} else if (error.message.includes('transaction failed')) {
					// TODO: i18n
					alert('La transacción falló')
				} else {
					// TODO: i18n
					console.error('error: ', error)
					alert('Ocurrió un error inesperado. Por favor intenta de nuevo.')
				}
			} else {
				// TODO: i18n
				alert('Ocurrió un error desconocido.')
			}
		}
	}

	const fetchEventInformation = async () => {
		setTimeout(async () => {
			const rpcProvider: ethers.providers.JsonRpcProvider =
				new ethers.providers.JsonRpcProvider(PROVIDER)

			const meetdAppFactoryContract: MeetdAppFactory = new ethers.Contract(
				MeetdAppFactoryJson.address,
				MeetdAppFactoryJson.abi,
				new ethers.providers.JsonRpcProvider(PROVIDER)
			) as MeetdAppFactory

			setMeetdAppFactoryContract(meetdAppFactoryContract)
			setIsLoading(false)
		}, 3000)
	}

	useEffect(() => {
		fetchEventInformation()
	}, [])

	return (
		<>
			<Navbar />
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<Flex
					background={
						'linear-gradient(180deg, #348793 -0.41%, #00001C -0.4%, #053763 73.8%)'
					}
					direction={{ base: 'column', lg: 'column' }}
					gap={6}
					paddingBottom={6}
				>
					<Flex
						paddingTop={{ base: '2rem', lg: 14 }}
						minH={{ base: 'auto', lg: '100vh' }}
						width={'full'}
						justify={'center'}
						position={'relative'}
					>
						<Flex
							mt={{ base: '6rem', lg: 5 }}
							gap={'3em'}
							px={3}
							maxW={'1300px'}
							width={'90%'}
							alignItems={'center'}
							justify={{ base: 'space-evenly', lg: 'space-between' }}
							direction={{ base: 'column', lg: 'row' }}
						>
							{isLoading ? (
								<p>Loading...</p>
							) : (
								<>
									<EventImage />
									<EventLocation />
								</>
							)}
						</Flex>
					</Flex>

					<Flex
						minH={{ base: 'auto', lg: '100vh' }}
						width={'full'}
						justify={'center'}
					>
						<Flex
							mt={{ base: '6rem', lg: 5 }}
							gap={'3em'}
							px={3}
							maxW={'1300px'}
							width={'90%'}
							alignItems={'initial'}
							justify={{ base: 'space-evenly', lg: 'space-between' }}
							direction={{ base: 'column', lg: 'row' }}
						>
							<EventDetails />
							<GetTicketCard
								getTicket={onBuyTicket}
								isBuyTicketLoading={isBuyTicketLoading}
							/>
						</Flex>
					</Flex>

					<PreviousEvents />
					<Attendees />
					<TagsSection />
				</Flex>
			)}

			<Footer />
		</>
	)
}

export default Event
