import React, { useEffect } from 'react'
import { Flex, List, ListItem, Text, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Event } from '@/models/event.model'
interface EventDetailsProps {
	event: Event | null
}
const EventDetails = ({event} : EventDetailsProps) => {
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
				<Text
					fontSize='md'
					color={'#00001C'}
					fontFamily={'space'}
					fontWeight={'bold'}
				>
					BENEFICIOS COMO VOLUNTARIADO
				</Text>
				<Text fontSize='md' color={'#00001C'} fontFamily={'space'}>
					{}
				</Text>
			</VStack>
		</Flex>
	)
}

export default EventDetails
