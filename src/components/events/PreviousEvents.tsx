import React from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Flex, Text, VStack } from '@chakra-ui/react'

import Carousel from './Carousel'

export default function PreviousEvents() {
	const { t } = useTranslation()

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
						{t('event.event-pictures')}
					</Text>
					<Box justifyContent={'center'}>
						<Carousel />
					</Box>
				</VStack>
			</Flex>
		</>
	)
}
