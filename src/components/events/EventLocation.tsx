import React, { useEffect } from 'react'
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
const EventLocation = () => {
	return (
		<Flex
			minH='500px'
			h='500px'
			borderRadius='3xl'
			margin='10px auto'
			bg='#DDEBED'
			backgroundPosition={{ base: '100%', md: 'left top' }}
			align='flex-start'
			w='30%'
			flexDirection='column'
			p={4}
		>
			{/* Header con Avatar y Título */}
			<HStack spacing={4} mb={4}>
				<Avatar
					size='md'
					// TODO: pick avatar from database
					src={'../../assets/navbar/Avatar.png'}
				/>
				<VStack align='start' spacing={0}>
					{' '}
					{/* Añadido VStack para apilar los textos verticalmente */}
					<Text
						fontSize='md'
						fontFamily={'space'}
						fontWeight='semibold'
						color={'gray.500'}
					>
						Hosted By
					</Text>
					<Text fontSize='lg' fontFamily={'space'} color={'#00001C'}>
						{'Ethereum Bogotá'}
					</Text>
				</VStack>
			</HStack>

			{/* Línea divisora */}
			<Divider mb={4} borderColor={'gray.500'} />

			{/* Calendario y Fecha */}
			<HStack spacing={4} mb={4} align='center'>
				<Box w='24px' h='24px' bg='gray.200'>
					<CalendarIcon />
				</Box>
				<Text fontSize='md' color={'#00001C'}>
					March 17, 2023
				</Text>
			</HStack>
			<HStack spacing={4} mb={4} align='center'>
				<Box w='24px' h='24px' bg='gray.200'>
					<InfoIcon />
				</Box>
				<Text fontSize='md' color={'#00001C'}>
					{'Restaurante Bitácora, Calle 85 # 12-51, Bogotá, Colombia'}
				</Text>
			</HStack>
			{/* Mapa */}
			<Box flex='1' w='100%' h='full' bg='gray.300' borderRadius='md' mt={4}>
				{/* Aquí podrías integrar un mapa real, como Google Maps */}
				<Text textAlign='center' verticalAlign='middle' m='auto'>
					Map Placeholder
				</Text>
			</Box>
		</Flex>
	)
}

export default EventLocation
