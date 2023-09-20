import React from 'react'
import {
	Flex,
	Text,
	VStack,
} from '@chakra-ui/react'

const Attendees = () => {
	return (
		<Flex
			minH='500px'
			h='fit-content'
			borderRadius='3xl'
			margin='0px auto'
			bg='#DDEBED'
			backgroundPosition={{ base: '100%', md: 'left top' }}
			align='flex-start'
			w='70%'
			flexDirection='column'
			px={12}
            py={10}
		>
			<VStack align='start' spacing={3}>
				{' '}
				{/* Añadido VStack para apilar los textos verticalmente */}
				<Text fontSize='1.953rem' fontFamily={'bodySections'} fontWeight='semibold' color={'#00001C'}>
                    X Asistentes 
				</Text>
				<Text fontSize='lg' color={'#00001C'} fontFamily={'tittleSections'}>
                    🌐 Web3 en Acción: Sé voluntari@ de impacto 🌐<br />
				</Text>
			</VStack>
		</Flex>
	)
}

export default Attendees
