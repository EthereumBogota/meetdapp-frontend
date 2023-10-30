import React from 'react'

import { Avatar, Box, Divider } from '@chakra-ui/react'

import CopyTextIcon from './CopyTextIcon'

export default function AssistantCard() {
	return (
		<Box
			bg={'#C9DCDF'}
			maxW='sm'
			borderWidth='1px'
			borderRadius='xl'
			display='flex'
			flexDirection={'column'}
			alignItems={'center'}
			p={3}
			gap={5}
		>
			<Avatar
				size='xl'
				name='Ethereum Bogotá'
				src='https://i.ibb.co/XXc9MhN/Eth-Avatar.jpg'
			/>

			<Divider borderColor={'gray.500'} />

			<Box p='3' paddingY={0} fontFamily={'space'} textAlign='center'>
				<Box fontWeight='medium' as='h4' lineHeight='tight' color={'#00001C'}>
					Ethereum Bogotá
				</Box>

				<Box
					display='flex'
					alignItems='center'
					justifyContent={'center'}
					gap={1}
				>
					<Box as='span' color='gray.500'>
						0x91c...71A3
					</Box>

					<Box
						as={'button'}
						_hover={{
							transform: 'scale(1.06)',
							transition: 'transform 0.3s ease-in-out'
						}}
						_active={{
							transform: 'scale(0.9)'
						}}
					>
						<CopyTextIcon />
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
