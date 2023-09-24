import Attendees from '@/components/events/Attendees'
import EventDetails from '@/components/events/EventDetails'
import EventImage from '@/components/events/EventImage'
import EventLocation from '@/components/events/EventLocation'
import GetTicketCard from '@/components/events/GetTicketCard'
import PreviousEvents from '@/components/events/PreviousEvents'
import TagsSection from '@/components/events/TagsSection'
import { Flex, useToast } from '@chakra-ui/react'
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
import Loader from '@/components/shared/Loader'
import { useTranslation } from 'react-i18next'

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
	const [hasTicket, setHasTicket] = useState<boolean>(false)
	const [isBuyTicketLoading, setIsBuyTicketLoading] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [meetdAppEventContract, setMeetdAppEventContract] =
		useState<MeetdAppEvent | null>(null)
	const [owner, setOwner] = useState<string | undefined>(undefined)
	const router = useRouter()
	// TODO: generate nanoId
	const slug: string | string[] | undefined = router.query?.id
	const { t } = useTranslation()
	const toast = useToast()

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

			if (meetdAppEventContract) {
				const meetdAppFactoryContractWithSigner: MeetdAppEvent =
					meetdAppEventContract.connect(signer)

				const tx = await meetdAppFactoryContractWithSigner.buyTicket({
					gasLimit: 2500000
				})
				await tx.wait(1)

				setIsBuyTicketLoading(false)
				setHasTicket(true)

				toast({
					title: t('toasts.ticket-bought.title'),
					description: t('toasts.ticket-bought.description'),
					status: 'success',
					duration: 3000,
					isClosable: false,
					position: 'top-right'
				})
			}
		} catch (error) {
			setIsBuyTicketLoading(false)

			if (error instanceof Error) {
				if (error.message.includes('user rejected transaction')) {
					return
				} else if (error.message.includes('transaction failed')) {
					toast({
						title: 'Could not create account',
						description: '',
						status: 'success',
						duration: 3000,
						isClosable: false,
						position: 'top-right'
					})
				} else {
					console.error('error: ', error)
					toast({
						title: 'Account created.',
						description: "We've created your account for you.",
						status: 'success',
						duration: 3000,
						isClosable: false,
						position: 'top-right'
					})
				}
			} else {
				toast({
					title: 'Account created.',
					description: "We've created your account for you.",
					status: 'success',
					duration: 3000,
					isClosable: false,
					position: 'top-right'
				})
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
				rpcProvider
			) as MeetdAppFactory

			const eventId: string = 'mC8cCmWH5Ws8IZQy'
			const bytesEventId = ethers.utils.toUtf8Bytes(eventId)
			const hashBytes32EventId = ethers.utils.keccak256(bytesEventId)

			const eventContractAdress: string =
				await meetdAppFactoryContract.mapIdEvent(hashBytes32EventId)

			const eventContract = new ethers.Contract(
				eventContractAdress,
				MeetdAppFactoryEventJson.abi,
				rpcProvider
			) as MeetdAppEvent

			if (address) {
				const ticket: boolean = await eventContract.eventAttendees(address)
				setHasTicket(ticket)
			}

			setOwner(address)

			setMeetdAppEventContract(eventContract)
			setIsLoading(false)
		}, 3000)
	}

	useEffect(() => {
		if (owner === undefined) {
			fetchEventInformation()
			return
		}

		if (address && meetdAppEventContract) {
			meetdAppEventContract.eventAttendees(address).then((ticket: boolean) => {
				setHasTicket(ticket)
				setOwner(address)
			})
		}
	}, [address])

	return (
		<>
			<Navbar />

			<Flex
				background={
					'linear-gradient(180deg, #348793 -0.41%, #00001C -0.4%, #053763 73.8%)'
				}
				gap={6}
				paddingBottom={6}
				alignItems={'center'}
				justifyContent={'center'}
			>
				{isLoading ? (
					<Loader width='full' height='100vh' color='#DDEBED' />
				) : (
					<>
						<Flex
							mt={'8em'}
							mb={'3em'}
							maxW={'1200px'}
							width={'90%'}
							display={{ base: 'none', lg: 'flex' }}
							gap={'3em'}
							direction={'row'}
							justifyContent={'center'}
						>
							<Flex
								direction={'column'}
								flex={7}
								w={'full'}
								gap={'3em'}
								order={{ base: 1, lg: 0 }}
							>
								<EventImage />
								<EventDetails />
								<PreviousEvents />
								<Attendees />
								<TagsSection />
							</Flex>

							<Flex
								direction={'column'}
								flex={3}
								w={'full'}
								gap={'3em'}
								order={{ base: 0, lg: 1 }}
							>
								<EventLocation />
								<GetTicketCard
									getTicket={onBuyTicket}
									isBuyTicketLoading={isBuyTicketLoading}
									hasTicket={hasTicket}
								/>
							</Flex>
						</Flex>

						<Flex
							mt={'8em'}
							width={'90%'}
							display={{ base: 'flex', lg: 'none' }}
							gap={'3em'}
							direction={'column'}
							justifyContent={'center'}
							mb={'3em'}
						>
							<Flex direction={'column'} w={'full'} gap={'3em'}>
								<EventImage />
								<EventLocation />
								<EventDetails />
								<PreviousEvents />
								<Attendees />
								<TagsSection />
								<GetTicketCard
									getTicket={onBuyTicket}
									isBuyTicketLoading={isBuyTicketLoading}
									hasTicket={hasTicket}
								/>
							</Flex>
						</Flex>
					</>
				)}
			</Flex>
			<Footer />
		</>
	)
}

export default Event
