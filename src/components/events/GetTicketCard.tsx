import React from 'react'
import { Flex, Button, Text, VStack } from '@chakra-ui/react'
import { Event } from '@/models/event.model'

type Props = {
	event: Event
	getTicket: () => Promise<void>
	isBuyTicketLoading: boolean
	hasTicket: boolean
}

const GetTicketCard = (props: Props) => {
	const { event, getTicket, isBuyTicketLoading, hasTicket } = props
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
				alignItems={'center'}
			>
				<Text
					fontSize={{ base: 'md', lg: 'lg' }}
					fontFamily={'space'}
					fontWeight='semibold'
					color={'#00001C'}
					textAlign={'center'}
				>
					¡GRATIS! • Quedan {event.remainingTickets} cupos
				</Text>
				{hasTicket ? (
					<Button
						boxShadow={
							'0px 0px 0px 0px rgba(0, 0, 0, 0.30), 3px 2px 8px 0px rgba(0, 0, 0, 0.29), 11px 8px 14px 0px rgba(0, 0, 0, 0.26), 25px 18px 19px 0px rgba(0, 0, 0, 0.15), 45px 31px 22px 0px rgba(0, 0, 0, 0.04), 71px 49px 24px 0px rgba(0, 0, 0, 0.01)'
						}
						padding={'1em 0.5em'}
						rounded={'12px'}
						bg={'teal'}
						color={'#FFF'}
						fontFamily={'neue'}
						fontSize={{ base: 'md', lg: 'lg' }}
						fontWeight={400}
						_active={{
							transform: 'scale(0.98)'
						}}
						_hover={{ bg: 'teal' }}
						cursor={'default'}
					>
						Registrado
					</Button>
				) : (
					<Button
						boxShadow={
							'0px 0px 0px 0px rgba(0, 0, 0, 0.30), 3px 2px 8px 0px rgba(0, 0, 0, 0.29), 11px 8px 14px 0px rgba(0, 0, 0, 0.26), 25px 18px 19px 0px rgba(0, 0, 0, 0.15), 45px 31px 22px 0px rgba(0, 0, 0, 0.04), 71px 49px 24px 0px rgba(0, 0, 0, 0.01)'
						}
						padding={'1em 0.5em'}
						rounded={'12px'}
						bg={'#FF8D3E'}
						color={'#FFF'}
						fontFamily={'neue'}
						fontSize={['18px', '22px']}
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
						onClick={getTicket}
					>
						{isBuyTicketLoading ? 'Cargando...' : 'Conseguir Entrada NFT'}
					</Button>
				)}
			</Flex>
		</Flex>
	)
}

export default GetTicketCard
