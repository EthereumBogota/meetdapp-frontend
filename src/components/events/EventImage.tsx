import React from 'react'

import { Box, Flex, Text } from '@chakra-ui/react'
interface EventImageProps {
	eventName: string
	eventId: string
}
const EventImage = ({ eventName, eventId }: EventImageProps) => {
	const firstEvent: boolean = eventId === 'mC8cCmWH5Ws8IZQy'

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
					{eventName}
				</Text>
			</Box>
			<Flex
				minH={{ base: '300px', md: '400px', lg: '500px' }}
				mx='auto'
				bg={'brand.newBlack'}
				backgroundImage={
					firstEvent ? '/images/voluntarioBSL.png' : '/images/side_event.jpg'
				}
				backgroundSize={'cover'}
				backgroundRepeat={'no-repeat'}
				backgroundPosition={'center'}
				align='center'
				position='relative'
				borderRadius={'3xl'}
			/>
		</Box>
	)
}

export default EventImage
