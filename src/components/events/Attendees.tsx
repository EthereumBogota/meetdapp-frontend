import React from 'react'
import { Flex, Text, VStack, SimpleGrid, Box } from '@chakra-ui/react'
import AssistantAvatar from './AssistantAvatar'

const Attendees = () => {
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
				<AssistantAvatar
					src='https://i.ibb.co/XXc9MhN/Eth-Avatar.jpg'
					name='Ethereum Bogotá'
					wallet='0x91c...71A3'
				/>
				<AssistantAvatar
					src='https://i.ibb.co/z2SV7rv/Chris.jpg'
					name='Christian Arévalo'
					wallet='0x89a...88Z1'
				/>
				<AssistantAvatar
					src='https://i.ibb.co/R01cYb0/Sebas.jpg'
					name='Sebastián Guaqueta'
					wallet='0x9x8...13Y9'
				/>
				<AssistantAvatar
					src='https://i.ibb.co/KyMxkyP/juanda.jpg'
					name='Juan David Reyes'
					wallet='0x09d...1MY2'
				/>
				<AssistantAvatar
					src='https://i.ibb.co/kJ0S3FP/Neil.jpg'
					name='Neil Díaz Ramírez'
					wallet='0x67a...0EL2'
				/>
				<AssistantAvatar
					src='https://i.ibb.co/7YG18Sw/Julio.jpg'
					name='Julio Cesar Arango'
					wallet='0x0jk...Q6r3'
				/>
			</SimpleGrid>
		</Flex>
	)
}

export default Attendees
