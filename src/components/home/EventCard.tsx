import { useTranslation } from 'react-i18next'

import { Box, Flex, Image, Text } from '@chakra-ui/react'

type Props = {
	capacity: number
	image: string
	location: string
	owner: string
	title: string
}

export default function EventCard(props: Props): JSX.Element {
	const { capacity, image, location, owner, title } = props
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
			mx={'auto'}
			height={'full'}
		>
			<Image
				objectFit={'cover'}
				w={'full'}
				h={'200px'}
				zIndex={0}
				alt={'event image'}
				src={image}
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
					bgImage={'url(/images/eth_logo.svg)'}
					position={'absolute'}
					bgSize={'cover'}
					bgPosition={'center'}
					right={4}
					top={-7}
				></Box>
				<Box fontSize={{ base: 'xl' }} fontFamily={'spaceBold'}>
					<h1
						style={{
							overflow: 'hidden',
							display: '-webkit-box',
							WebkitBoxOrient: 'vertical',
							WebkitLineClamp: 2
						}}
					>
						{title}
					</h1>
				</Box>
				<Flex direction={'column'} gap={5} fontFamily={'space'}>
					<Flex gap={4}>
						<Image
							w={4}
							src={'/images/organization.svg'}
							alt={'oganization image'}
						/>
						<Text>{owner}</Text>
					</Flex>

					<Flex gap={4}>
						<Image w={4} src={'/images/location.svg'} alt={'location image'} />
						<Text>{location}</Text>
					</Flex>
					<Flex gap={4}>
						<Image
							w={5}
							src={'/images/user_group.svg'}
							alt={'user group image'}
						/>
						<Text>{`${capacity} attendees`}</Text>
					</Flex>
				</Flex>

				<Text
					textTransform={'uppercase'}
					background={'-webkit-linear-gradient(#FF9A03, #FF0000)'}
					backgroundClip={'text'}
					textAlign={'right'}
					fontFamily={'spaceBold'}
					fontSize={'xl'}
				>
					Free
				</Text>
			</Flex>
		</Flex>
	)
}
