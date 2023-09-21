import React from 'react'
import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import Carousel from './Carousel'

export default function PreviousEvents() {
	return (
    <>
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
      		overflow={'hidden'}
		>
			<VStack align='start' justifyContent={'flex-start'} spacing={0}>
				{' '}
				{/* Añadido VStack para apilar los textos verticalmente */}
				<Text
					fontSize='1.953rem'
					fontFamily={'space'}
					fontWeight='semibold'
					color={'#00001C'}
				>
					Fotos de Eventos Anteriores
				</Text>
				<Box 
        		justifyContent={'center'}
        		>
					<Carousel />
				</Box>
			</VStack>
		</Flex>
    </>
	)
}


