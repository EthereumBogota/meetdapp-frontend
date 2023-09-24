import { Center, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import EventCard from './EventCard'
import Link from 'next/link'
import Loader from '../shared/Loader'

const first_event = {
	id: 0,
	title: 'Web3 en acción',
	description: 'ndineondeond'
}

type Props = {
	isLoading: boolean
}

export default function Events(props: Props): React.ReactNode {
	const { isLoading } = props
	const { t } = useTranslation()

	const eventId: string = 'mC8cCmWH5Ws8IZQy'

	return (
		<>
			<Flex
				width={'90%'}
				maxW={'1200px'}
				flexDirection={'column'}
				gap={10}
				zIndex={50}
				color={'#00001C'}
				px={{ base: 4, lg: 0 }}
			>
				<Heading fontFamily='spaceBold'>
					{t('landing.top-events.title')} 🔥
				</Heading>
				{isLoading ? (
					<Loader width='full' height='300px' color='#00001C' />
				) : (
					<Grid
						width={'full'}
						templateColumns={{
							base: 'repeat(1, 1fr)',
							md: 'repeat(2, 1fr)',
							lg: 'repeat(3, 1fr)'
						}}
						gap={{ base: 10, lg: 16 }}
					>
						<Link
							href={{
								pathname: `/events/${eventId}`
							}}
						>
							<GridItem
								justifySelf={'center'}
								transition={'transform .3s'}
								_hover={{ transform: 'scale(1.03)' }}
							>
								<EventCard />
							</GridItem>
						</Link>
					</Grid>
				)}
			</Flex>
		</>
	)
}
