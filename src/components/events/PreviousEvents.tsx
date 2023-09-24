import React from 'react'
import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import Carousel from './Carousel'

export default function PreviousEvents() {
	return (
		<>
			<Flex
				h='fit-content'
				borderRadius='3xl'
				mx='auto'
				bg='#DDEBED'
				w='full'
				flexDirection='column'
				p={{ base: 5, lg: 7 }}
				overflow={'hidden'}
			>
				<VStack align='start' justifyContent={'flex-start'} spacing={0}>
					<Text
						fontSize={{ base: '2xl', lg: '3xl' }}
						fontFamily={'space'}
						fontWeight='semibold'
						color={'#00001C'}
					>
						Fotos de Eventos Anteriores
					</Text>
					<Box justifyContent={'center'}>
						<Carousel />
					</Box>
				</VStack>
			</Flex>
		</>
	)
}
