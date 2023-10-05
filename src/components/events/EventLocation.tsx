import {
	Flex,
	Text,
	VStack,
	Box,
	HStack,
	Divider,
	Avatar
} from '@chakra-ui/react'
import { CalendarIcon, InfoIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import { Event } from '@/models/event.model'
import { useEffect, useState } from 'react'
import moment from 'moment'
import 'moment/locale/es';

interface EventLocationProps {
	event: Event | null
}

const EventLocation = ({ event }: EventLocationProps) => {
	const [startDate, setStartDate] = useState<string>('');
	const { t, i18n } = useTranslation()

	useEffect(() => {
		if (event) {
			readDate()
		}
	}, [event, i18n.language])

	const readDate = () => {
		console.log(i18n.language);
		moment.locale(i18n.language as string)
		const date = moment.unix(event?.startTime!).format('DD MMMM YYYY')
		console.log(date);
		setStartDate(date)
	}

	return (
		<Flex
			borderRadius='3xl'
			mx='auto'
			bg='#DDEBED'
			w='full'
			flexDirection='column'
			p={{ base: 5, md: 7 }}
		>
			<HStack spacing={4} mb={4}>
				<Avatar size='md' src={'/images/eth_logo.svg'} />
				<VStack align='start' spacing={0}>
					<Text
						fontSize='md'
						fontFamily={'space'}
						fontWeight='semibold'
						color={'gray.500'}
					>
						{t('event.hosted-by')}
					</Text>
					<Text fontSize='lg' fontFamily={'space'} color={'#00001C'}>
						{/* TODO include in smart contract structure */}
						{'Ethereum Bogotá'}
					</Text>
				</VStack>
			</HStack>

			<Divider mb={4} borderColor={'gray.500'} />

			<HStack spacing={4} mb={4} align='center'>
				<Box w='24px' h='24px' bg='gray.200'>
					<CalendarIcon />
				</Box>
				<Text fontSize='md' color={'#00001C'}>
					{startDate}
				</Text>
			</HStack>
			<HStack spacing={4} mb={4} align='center'>
				<Box w='24px' h='24px' bg='gray.200'>
					<InfoIcon />
				</Box>
				<Text fontSize='md' color={'#00001C'}>
					{event?.location}
				</Text>
			</HStack>
			{/* <Box flex='1' w='100%' h='full' bg='gray.300' borderRadius='md' mt={4}>
				<Text textAlign='center' verticalAlign='middle' m='auto'>
					Map Placeholder
				</Text>
			</Box> */}
		</Flex>
	)
}

export default EventLocation
