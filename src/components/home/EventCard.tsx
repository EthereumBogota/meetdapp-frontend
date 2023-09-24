'use client'

import { Box, Text, Image, Heading, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export default function EventCard() {
	const { t } = useTranslation()

	return (
		<Flex
			direction={'column'}
			boxShadow={'2xl'}
			rounded={'md'}
			overflow={'hidden'}
			borderRadius={15}
			alignItems={'flex-start'}
			maxW={'400px'}
		>
			<Image
				objectFit={'cover'}
				w={'full'}
				h={'200px'}
				src={'/img/BSL.jpg'}
				zIndex={0}
			/>

			<Flex
				bgColor={'#C9DCDF'}
				direction={'column'}
				w={'full'}
				px={6}
				py={5}
				gap={4}
				position={'relative'}
				borderRadius={15}
				zIndex={100}
				mt={-5}
			>
				<Box
					w={'50px'}
					h={'50px'}
					bgImage={'url(/img/ETHLogo.svg)'}
					position={'absolute'}
					bgSize={'cover'}
					bgPosition={'center'}
					right={4}
					top={-7}
				></Box>
				<Heading fontSize={{ base: 'xl' }} fontFamily={'spaceBold'}>
					{t('landing.top-events.card.title')}
				</Heading>
				<Flex direction={'column'} gap={5} fontFamily={'space'}>
					<Flex gap={4}>
						<Image w={4} src={'/img/organization.svg'} />
						<Text>Ethereum Bogotá</Text>
					</Flex>

					<Flex gap={4}>
						<Image w={4} src={'/img/location.svg'} />
						<Text>Calle 19 #134 - 89, Bogotá</Text>
					</Flex>
					<Flex gap={4}>
						<Image w={5} src={'/img/user_group.svg'} />
						<Text>50 {t('landing.top-events.card.attendees')}</Text>
					</Flex>
				</Flex>

				<Text
					background={'-webkit-linear-gradient(#FF9A03, #FF0000)'}
					backgroundClip={'text'}
					textAlign={'right'}
					fontFamily={'spaceBold'}
					fontSize={'xl'}
				>
					FREE
				</Text>
			</Flex>
		</Flex>
	)
}
