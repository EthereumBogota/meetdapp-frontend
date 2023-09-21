import React from 'react'
import { Flex, Text, VStack, SimpleGrid, Box } from '@chakra-ui/react'
import AssistantAvatar from './AssistantAvatar'

const Attendees = () => {
	return (
		<Flex
			maxW={'50.313em'}
			minH='500px'
			h='fit-content'
			borderRadius='3xl'
			margin='auto 74px'
			bg='#DDEBED'
			backgroundPosition={{ base: '100%', md: 'left top' }}
			align='flex-start'
			w='70%'
			flexDirection='column'
			px={12}
			py={10}
      gap={5}
		>
      <Text
        fontSize='1.953rem'
        fontFamily={'space'}
        fontWeight='semibold'
        color={'#00001C'}
        textAlign={{ base: 'start', md: 'start' }}
      >
        X Asistentes
      </Text>

        <SimpleGrid
          columns={{ sm: 2, md: 3 }}
          spacing='8'
        >
          <AssistantAvatar 
            src='https://i.ibb.co/XXc9MhN/Eth-Avatar.jpg'
            name='Ethereum Bogotá'
            wallet='0x91c...71A3'
          />
          <AssistantAvatar 
            src='https://i.ibb.co/z2SV7rv/Chris.jpg'
            name='Christian Arévalo'
            wallet='0x89a...88Z1'
          />
          <AssistantAvatar 
            src='https://i.ibb.co/R01cYb0/Sebas.jpg'
            name='Sebastián Guaqueta'
            wallet='0x9x8...13Y9'
          />
          <AssistantAvatar 
            src='https://i.ibb.co/KyMxkyP/juanda.jpg'
            name='Juan David Reyes'
            wallet='0x09d...1MY2'
          />
          <AssistantAvatar 
            src='https://i.ibb.co/kJ0S3FP/Neil.jpg'
            name='Neil Díaz Ramírez'
            wallet='0x67a...0EL2'
          />
          <AssistantAvatar 
            src='https://i.ibb.co/7YG18Sw/Julio.jpg'
            name='Julio Cesar Arango'
            wallet='0x0jk...Q6r3'
          />

        </SimpleGrid>
    </Flex>
	)
}

export default Attendees
