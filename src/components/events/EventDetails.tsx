import React from 'react'
import { useTranslation } from 'react-i18next'

import { Event } from '@/models/event.model'
import { Flex, Text, VStack } from '@chakra-ui/react'
interface EventDetailsProps {
	event: Event | null
}
const EventDetails = ({ event }: EventDetailsProps) => {
	const { t } = useTranslation()

	return (
		<Flex
			borderRadius='3xl'
			mx='auto'
			bg='#DDEBED'
			w='full'
			flexDirection='column'
			p={{ base: 5, md: 7 }}
		>
			<VStack align='start' spacing={5}>
				<Text
					fontSize={{ base: '2xl', lg: '3xl' }}
					fontFamily={'space'}
					fontWeight='semibold'
					color={'#00001C'}
				>
					{t('event.event-details')}
				</Text>
				<Text fontSize='md' color={'#00001C'} fontFamily={'space'}>
					{event?.description}
				</Text>
			</VStack>
		</Flex>
	)
}

export default EventDetails
