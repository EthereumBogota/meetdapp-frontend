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
						Hosted By
					</Text>
					<Text fontSize='lg' fontFamily={'space'} color={'#00001C'}>
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
					March 17, 2023
				</Text>
			</HStack>
			<HStack spacing={4} mb={4} align='center'>
				<Box w='24px' h='24px' bg='gray.200'>
					<InfoIcon />
				</Box>
				<Text fontSize='md' color={'#00001C'}>
					Restaurante Bitácora, Calle 85 # 12-51, Bogotá, Colombia
				</Text>
			</HStack>
			<Box flex='1' w='100%' h='full' bg='gray.300' borderRadius='md' mt={4}>
				<Text textAlign='center' verticalAlign='middle' m='auto'>
					Map Placeholder
				</Text>
			</Box>
		</Flex>
	)
}

export default EventLocation
