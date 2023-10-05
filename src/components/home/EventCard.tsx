import { Box, Text, Image, Heading, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

interface Props {
	title: string,
	organizer: string,
	address: string,
	attendees: string,
	cost: string,
	image: string
}

export default function EventCard(props: Props): React.ReactNode {
	const { title, organizer, address, attendees, cost, image } = props
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
				src={image}
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
					bgImage={'url(/images/eth_logo.svg)'}
					position={'absolute'}
					bgSize={'cover'}
					bgPosition={'center'}
					right={4}
					top={-7}
				></Box>
				<Heading fontSize={{ base: 'xl' }} fontFamily={'spaceBold'} >
					<h1 style={{
						overflow: 'hidden',
						display: '-webkit-box',
						WebkitBoxOrient: 'vertical',
						WebkitLineClamp: 2
					}}>
						{title}
					</h1>
				</Heading>
				<Flex direction={'column'} gap={5} fontFamily={'space'}>
					<Flex gap={4}>
						<Image w={4} src={'/images/organization.svg'} />
						<Text>{organizer}</Text>
					</Flex>

					<Flex gap={4}>
						<Image w={4} src={'/images/location.svg'} />
						<Text>{address}</Text>
					</Flex>
					<Flex gap={4}>
						<Image w={5} src={'/images/user_group.svg'} />
						<Text>{attendees}</Text>
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
					{cost}
				</Text>
			</Flex>
		</Flex>
	)
}
