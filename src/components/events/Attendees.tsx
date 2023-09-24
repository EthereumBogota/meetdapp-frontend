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
			maxW={'50.313em'}
			minH='500px'
			h='fit-content'
			borderRadius='3xl'
			margin='auto 74px'
			bg='#DDEBED'
			backgroundPosition={{ base: '100%', md: 'left top' }}
			align='flex-start'
			w='70%'
			flexDirection='column'
			px={12}
			py={10}
			gap={5}
		>
			<Text
				fontSize='1.953rem'
				fontFamily={'space'}
				fontWeight='semibold'
				color={'#00001C'}
				textAlign={{ base: 'start', md: 'start' }}
			>
				{`(${attendees.length})`} Asistentes
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
