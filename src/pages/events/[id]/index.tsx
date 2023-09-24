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
import { Event, EventDTO } from '@/models/event.model'
import { mapDTOtoEvent } from '@/functions/dto'

const initialEvent: Event = {
	id: '',
	name: '',
	description: '',
	location: '',
	totalTickets: 0,
	remainingTickets: 0,
	startTime: 0,
	endTime: 0,
	reedemableTime: 0,
	ownerAddress: '',
	nftAddress: ''
}
import Loader from '@/components/shared/Loader'
import { useTranslation } from 'react-i18next'

function Event(): JSX.Element {
	const [event, setEvent] = useState<Event>(initialEvent)
	const [hasTicket, setHasTicket] = useState<boolean>(false)
	const [isBuyTicketLoading, setIsBuyTicketLoading] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [meetdAppEventContract, setMeetdAppEventContract] =
		useState<MeetdAppEvent | null>(null)
	const [owner, setOwner] = useState<string | undefined>(undefined)
	const router = useRouter()
	// TODO: generate nanoId
	const splitedPath: string[] = router.asPath.split('/')
	const id = splitedPath[splitedPath.length - 1]
	const { t } = useTranslation()
	const toast = useToast()

	const { address } = useAccount()
	const { chain } = useNetwork()

	const onBuyTicket = async () => {
		const ethereum = (window as any).ethereum

		if (!ethereum) {
			toast({
				title: t('toasts.install-metamask.title'),
				description: t('toasts.install-metamask.description'),
				status: 'warning',
				duration: 3000,
				isClosable: false,
				position: 'top-right'
			})
			return
		}

		if (!address) {
			toast({
				title: t('toasts.connect-metamask.title'),
				description: t('toasts.connect-metamask.description'),
				status: 'warning',
				duration: 3000,
				isClosable: false,
				position: 'top-right'
			})
			return
		}

		if (chain?.id !== CHAINID) {
			toast({
				title: t('toasts.change-network.title'),
				description: t('toasts.change-network.description'),
				status: 'warning',
				duration: 2000,
				isClosable: false,
				position: 'top-right'
			})
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

				const newEvent = event
				newEvent.remainingTickets = newEvent.remainingTickets - 1
				setEvent(newEvent)

				setIsBuyTicketLoading(false)
				setHasTicket(true)

				toast({
					title: t('toasts.ticket-bought.title'),
					description: t('toasts.ticket-bought.description'),
					status: 'success',
					duration: 2000,
					isClosable: false,
					position: 'top-right'
				})
			}
		} catch (error) {
			setIsBuyTicketLoading(false)

			if (error instanceof Error) {
				if (error.message.includes('user rejected transaction')) {
					toast({
						title: t('toasts.failed.title'),
						description: t('toasts.failed.description'),
						status: 'error',
						duration: 2000,
						isClosable: false,
						position: 'top-right'
					})
					return
				} else if (error.message.includes('transaction failed')) {
					toast({
						title: t('toasts.failed.title'),
						description: t('toasts.failed.description'),
						status: 'error',
						duration: 2000,
						isClosable: false,
						position: 'top-right'
					})
				} else {
					console.error('error: ', error)
					toast({
						title: t('toasts.failed.title'),
						description: t('toasts.failed.description'),
						status: 'error',
						duration: 2000,
						isClosable: false,
						position: 'top-right'
					})
				}
			} else {
				toast({
					title: t('toasts.failed.title'),
					description: t('toasts.failed.description'),
					status: 'error',
					duration: 2000,
					isClosable: false,
					position: 'top-right'
				})
			}
		}
	}

	const fetchEventInformation = async () => {
		try {
			const rpcProvider: ethers.providers.JsonRpcProvider =
				new ethers.providers.JsonRpcProvider(PROVIDER)

			const meetdAppFactoryContract: MeetdAppFactory = new ethers.Contract(
				MeetdAppFactoryJson.address,
				MeetdAppFactoryJson.abi,
				rpcProvider
			) as MeetdAppFactory

			const bytesEventId = ethers.utils.toUtf8Bytes(id as string)
			const hashBytes32EventId = ethers.utils.keccak256(bytesEventId)

			const eventContractAdress: string =
				await meetdAppFactoryContract.mapIdEvent(hashBytes32EventId)

			const eventContract = new ethers.Contract(
				eventContractAdress,
				MeetdAppFactoryEventJson.abi,
				rpcProvider
			) as MeetdAppEvent

			const eventDTO: EventDTO = {
				id: await eventContract.eventId(),
				name: await eventContract.eventName(),
				description: await eventContract.eventDescription(),
				location: await eventContract.eventLocation(),
				totalTickets: await eventContract.eventTotalTickets(),
				remainingTickets: await eventContract.eventRemainingTickets(),
				startTime: await eventContract.eventStartTime(),
				endTime: await eventContract.eventRemainingTickets(),
				reedemableTime: await eventContract.eventReedemableTime(),
				ownerAddress: await eventContract.eventOwner(),
				nftAddress: await eventContract.eventNfts()
			}

			setEvent(mapDTOtoEvent(eventDTO))

			if (address) {
				const ticket: boolean = await eventContract.eventAttendees(address)
				setHasTicket(ticket)
			}

			setOwner(address)

			setMeetdAppEventContract(eventContract)
			setIsLoading(false)
		} catch (error) {
			router.push('/404')
		}
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
							mt={'9em'}
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
								alignItems={'center'}
								justify={'center'}
							>
								<EventImage />
								<EventDetails />
								<PreviousEvents />
								<Attendees />
								<TagsSection />
							</Flex>

							<Flex
								width={'full'}
								alignItems={'center'}
								gap={'3em'}
								flex={3}
								direction={'column'}
							>
								<EventLocation />
								<GetTicketCard
									event={event}
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
									event={event}
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
