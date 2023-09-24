import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Image } from '@chakra-ui/react'

export default function NotFoundPage() {
	const router = useRouter()

	const goHome = () => {
		router.push('/')
	}

	return (
		<Box
			width={'100%'}
			height={'100vh'}
			display={'flex'}
			flexDir={'column'}
			alignItems={'center'}
			justifyContent={'center'}
			textAlign={'center'}
			bgColor={"#00001C"}
			color={"#DDEBED"}
		>
			<Image src='/img/Logo.svg' width={"100px"} />
			<Text marginY={6} fontSize='3xl' as='b'>
				This Page could not be found
			</Text>
			<Text marginBottom={6} fontSize='1xl' textTransform={"uppercase"}>
				Error code: 404
			</Text>
			<Button onClick={goHome}>GO BACK HOME</Button>
		</Box>
	)
}
