import { Box, Button, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

export default function NotFoundPage() {
	const router = useRouter()
	const { t } = useTranslation()

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
			bgColor={'#00001C'}
			textAlign={'center'}
			color={'#DDEBED'}
		>
			<Image src='/images/logo.svg' w={{ base: '70px', lg: '100px' }} />
			<Text marginY={6} fontSize={{ base: '2xl', lg: '3xl' }} as='b'>
				{t('404.not-found')}
			</Text>
			<Text marginBottom={6} fontSize='1xl' textTransform={'uppercase'}>
				{t('404.error-code')}: 404
			</Text>
			<Button onClick={goHome} textTransform={'uppercase'}>
				{t('404.home')}
			</Button>
		</Box>
	)
}
