import React from 'react'
import {
	Flex,
	Text,
	Box,
} from '@chakra-ui/react'

const EventImage = () => {
	return (
		<Box position='relative' width='70%' mx='auto'>
			<Box
				position='absolute'
				top='-30px' // ajusta según el desplazamiento que desees
				left='15px'
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
					{/*TODO pick event title from database*/}
					{'¡Web3 en Acción: Sé voluntari@ de impacto!  '}
				</Text>
			</Box>
			<Flex
				minH='500px'
				borderRadius='3xl'
				margin='10px auto'
				bg={'brand.newBlack'}
				backgroundImage={'/img/Photo.png'}
				backgroundSize={'cover'}
				backgroundPosition={{ base: '100%', md: 'left top' }}
				align='center'
				w='100%'
				position='relative'
			/>
		</Box>
	)
}

export default EventImage
