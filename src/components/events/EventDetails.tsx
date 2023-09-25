import React from 'react'
import { Flex, List, ListItem, Text, VStack } from '@chakra-ui/react'

const EventDetails = () => {
	return (
		<Flex
			borderRadius='3xl'
			mx='auto'
			bg='#DDEBED'
			w='full'
			flexDirection='column'
			p={{ base: 5, md: 7 }}
		>
			<VStack align='start' spacing={5}>
				<Text
					fontSize={{ base: '2xl', lg: '3xl' }}
					fontFamily={'space'}
					fontWeight='semibold'
					color={'#00001C'}
				>
					Detalles del Evento
				</Text>
				<Text fontSize='md' color={'#00001C'} fontFamily={'space'}>
					🌐 Felicidades has sido pre-seleccionado como voluntario para el
					Blockchain Summit Latam! 🌐
				</Text>
				<Text
					fontSize='md'
					color={'#00001C'}
					fontFamily={'space'}
					fontWeight={'bold'}
				>
					BENEFICIOS COMO VOLUNTARIADO
				</Text>
				<List spacing={1}>
					<ListItem ml={1}>
						🚀 Formarás parte de un equipo exclusivo de gente que quiere
						impactar en Web3
					</ListItem>
					<ListItem ml={1}>
						🚀 Conocerás experiencias de líderes que comenzaron como voluntarios
						en nuestro MeetUP con ETH Colombia.
					</ListItem>
					<ListItem ml={1}>🚀 Recibirás el swag oficial del evento.</ListItem>
					<ListItem ml={1}>
						🚀 Tendrás acceso a un día completo del evento.
					</ListItem>
					<ListItem ml={1}>
						🚀 Serás invitado a nuestra exclusiva fiesta VIP, donde podrás hacer
						valiosas conexiones.
					</ListItem>
					<ListItem ml={1}>
						🚀 Consideración para programas en Colledge.
					</ListItem>
					<ListItem ml={1}>
						🚀 Tendrás la oportunidad de participar activamente en el evento y
						establecer conexiones con oradores y participantes.
					</ListItem>
					<ListItem ml={1}>🚀 Recibirás NFT y POAP de participación.</ListItem>
				</List>
				<Text fontSize='md' color={'#00001C'} fontFamily={'space'}>
					¡Llegó tu oportunidad de marcar la diferencia!
				</Text>
			</VStack>
		</Flex>
	)
}

export default EventDetails
