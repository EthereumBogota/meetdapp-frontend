import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/react'

const EventImage = () => {
	return (
		<Box position='relative' width='full' mx='auto'>
			<Box
				position='absolute'
				top='-24px'
				left={{ base: '0', md: '15px' }}
				bg='#348793'
				px='6'
				py='3'
				borderRadius='md'
				zIndex='1'
			>
				<Text
					color='#DDEBED'
					fontFamily={'space'}
					fontWeight={'bold'}
					fontSize={{ base: '16px', lg: '19px' }}
				>
					{'¡Web3 en Acción: Sé voluntari@ de impacto!  '}
				</Text>
			</Box>
			<Flex
				minH={{ base: '300px', md: '400px', lg: '500px' }}
				borderRadius='3xl'
				mx='auto'
				bg={'brand.newBlack'}
				backgroundImage={'/images/bsl.jpg'}
				backgroundSize={'cover'}
				align='center'
				position='relative'
			/>
		</Box>
	)
}

export default EventImage
