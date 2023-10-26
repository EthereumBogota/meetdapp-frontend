import React from 'react'
import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { AssistantAvatar } from './AssistantAvatar'
import { useTranslation } from 'react-i18next'

type Props = {
	attendees: string[]
}

const Attendees = (props: Props) => {
	const { attendees } = props
	const { t } = useTranslation()
	return (
		<Flex
			borderRadius='3xl'
			mx='auto'
			bg='#DDEBED'
			w='100%'
			flexDirection='column'
			gap={5}
			p={{ base: 5, md: 7 }}
		>
			<Text
				fontSize={{ base: '2xl', lg: '3xl' }}
				fontFamily={'space'}
				fontWeight='semibold'
				color={'#00001C'}
				textAlign={{ base: 'start', md: 'start' }}
			>
				{t('event.assistants')}
				{` (${attendees.length})`}
			</Text>

			<SimpleGrid columns={{ sm: 2, md: 3 }} spacing='8'>
				{attendees.map((attendee: string, index: number) => (
					<AssistantAvatar key={index} wallet={attendee} />
				))}
			</SimpleGrid>
		</Flex>
	)
}

export default Attendees
