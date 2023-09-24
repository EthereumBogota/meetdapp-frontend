import React from 'react'
import { Flex, Text, VStack, SimpleGrid, Box } from '@chakra-ui/react'
import { AssistantAvatar } from './AssistantAvatar'
type Props = {
	attendees: string[]
}
const Attendees = (props: Props) => {
	const { attendees } = props
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
				Asistentes
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
