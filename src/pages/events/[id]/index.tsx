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
import { PROVIDER } from '@/constants/constants'

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
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [meetdAppEventContract, setMeetdAppEventContract] =
		useState<MeetdAppEvent | null>(null)
	const router = useRouter()
	const slug: string | string[] | undefined = router.query?.id

	const fetchEventInformation = async () => {
		setTimeout(async () => {
			const rpcProvider: ethers.providers.JsonRpcProvider =
				new ethers.providers.JsonRpcProvider(PROVIDER)

			const meetdAppFactoryContract: MeetdAppFactory = new ethers.Contract(
				MeetdAppFactoryJson.address,
				MeetdAppFactoryJson.abi,
				new ethers.providers.JsonRpcProvider(PROVIDER)
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

			setMeetdAppEventContract(eventContract)
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
							<GetTicketCard />
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
