import React from 'react'
import { Flex, Button, Text } from '@chakra-ui/react'

const GetTicketCard = () => {
	return (
		<Flex
			h={'fit-content'}
			borderRadius={{ lg: '3xl' }}
			borderTopStartRadius={'3xl'}
			borderTopEndRadius={'3xl'}
			mx='auto'
			bg={{ base: '#AACDD1', lg: '#DDEBED' }}
			flexDirection='column'
			justifyContent='center'
			w='full'
			p={{ base: 5, md: 7 }}
			position={{ base: 'fixed', lg: 'static' }}
			right={0}
			left={0}
			bottom={0}
			zIndex={90}
			boxShadow={'0 -5px 15px 5px rgba(0, 0, 0, 0.30)'}
		>
			<Flex
				direction={{ base: 'row', lg: 'column' }}
				gap={3}
				justifyContent={'center'}
			>
				<Text
					fontSize='1.563rem'
					fontFamily={'space'}
					fontWeight='semibold'
					color={'#00001C'}
					textAlign={'center'}
				>
					¡GRATIS!
				</Text>
				<Button
					boxShadow={
						'0px 0px 0px 0px rgba(0, 0, 0, 0.30), 3px 2px 8px 0px rgba(0, 0, 0, 0.29), 11px 8px 14px 0px rgba(0, 0, 0, 0.26), 25px 18px 19px 0px rgba(0, 0, 0, 0.15), 45px 31px 22px 0px 45px 31px 22px 0px rgba(0, 0, 0, 0.04), 71px 49px 24px 0px rgba(0, 0, 0, 0.01)'
					}
					rounded={'12px'}
					bg={'#FF8D3E'}
					color={'#FFF'}
					fontFamily={'neue'}
					fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
					fontWeight={400}
					// onClick={getUserInfo}
					_hover={{
						bg: '#EE7A29',
						transform: 'scale(1.03)',
						transition: 'transform 0.3s ease-in-out'
					}}
					_active={{
						transform: 'scale(0.98)'
					}}
				>
					Conseguir Entrada
				</Button>
			</Flex>
		</Flex>
	)
}

export default GetTicketCard
