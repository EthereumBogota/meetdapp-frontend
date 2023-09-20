import React from 'react'
import {
	Flex,
	Button,
	Text,
	VStack,
} from '@chakra-ui/react'

const GetTicketCard = () => {
	return (
		<Flex
			position={'sticky'}
			h='fit-content'
			borderRadius='3xl'
			margin='0px auto'
			bg='#DDEBED'
			backgroundPosition={{ base: '100%', md: 'left top' }}
			align='center'
      		justifyContent="center"
			w='30%'
			flexDirection='column'
			p={4}
		>
			<VStack spacing={3}>
				<Text fontSize='1.563rem' fontFamily={'tittleSections'} fontWeight='semibold' color={'#00001C'}>
					¡GRATIS!
				</Text>
				<Button
          boxShadow={'0px 0px 0px 0px rgba(0, 0, 0, 0.30), 3px 2px 8px 0px rgba(0, 0, 0, 0.29), 11px 8px 14px 0px rgba(0, 0, 0, 0.26), 25px 18px 19px 0px rgba(0, 0, 0, 0.15), 45px 31px 22px 0px rgba(0, 0, 0, 0.04), 71px 49px 24px 0px rgba(0, 0, 0, 0.01)'}
          padding={"1em 0.5em"}
          rounded={'12px'}
          bg={'#FF8D3E'}
          color={'#FFF'}
          fontSize={['20px', '24px']}
          fontWeight={400}
          // onClick={getUserInfo}
          _hover={{
            bg: '#EE7A29',
            transform: 'scale(1.03)',
            transition: 'transform 0.3s ease-in-out'
          }}
        >
          Conseguir Entrada NFT
        </Button>
			</VStack>
		</Flex>
	)
}

export default GetTicketCard
