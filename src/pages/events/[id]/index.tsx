import Attendees from '@/components/events/Attendees'
import EventDetails from '@/components/events/EventDetails'
import EventImage from '@/components/events/EventImage'
import EventLocation from '@/components/events/EventLocation'
import GetTicketCard from '@/components/events/GetTicketCard'
import PreviousEvents from '@/components/events/PreviousEvents'
import TagsSection from '@/components/events/TagsSection'
import { Box, Flex, Grid } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import MeetdAppFactoryJson from '../../../assets/contracts/MeetdAppFactory.json'
import MeetdAppFactoryEventJson from '../../../assets/contracts/MeetdAppEvent.json'
import { useEffect } from 'react'
import {
	MeetdAppEvent,
	MeetdAppFactory
} from '../../../../@types/typechain-types'
import { ethers } from 'ethers'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import '../../../config/i18n'

interface Event {
	id: string
	title: string
	description: string
}

interface EventPageProps {
	event: Event
}

function Event({ event }: EventPageProps) {
	const router = useRouter()
	const slug: string | string[] | undefined = router.query?.id

	const fetchData = async () => {
		const ethereum = (window as any).ethereum
		const web3Provider: ethers.providers.Web3Provider =
			new ethers.providers.Web3Provider(ethereum)
		await web3Provider.send('eth_requestAccounts', [])
		const web3Signer: ethers.providers.JsonRpcSigner = web3Provider.getSigner()

		const meetdAppFactoryContract: ethers.Contract = new ethers.Contract(
			MeetdAppFactoryJson.address,
			MeetdAppFactoryJson.abi,
			web3Signer
		) as MeetdAppFactory

		const eventId: string = 'mC8cCmWH5Ws8IZQy'
		const bytesValue = ethers.utils.toUtf8Bytes(eventId)
		const hashBytes32 = ethers.utils.keccak256(bytesValue)

		const eventContractAdress: string =
			await meetdAppFactoryContract.mapIdEvent(hashBytes32)
		const eventContract = new ethers.Contract(
			eventContractAdress,
			MeetdAppFactoryEventJson.abi,
			web3Signer
		) as MeetdAppEvent
		await eventContract.buyTicket()
	}

	useEffect(() => {
		fetchData()
	}, [])

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
						<GetTicketCard />
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
						<GetTicketCard />
					</Flex>
				</Flex>
			</Flex>
			<Footer />
		</>
	)
}

export default Event
