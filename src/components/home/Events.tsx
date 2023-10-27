import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react'

import Loader from '../shared/Loader'

import EventCard from './EventCard'

type Props = {
	isLoading: boolean
}

export default function Events(props: Props): React.ReactNode {
	const { isLoading } = props
	const { t } = useTranslation()

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
								pathname: '/events/mC8cCmWH5Ws8IZQy'
							}}
						>
							<GridItem
								justifySelf={'center'}
								transition={'transform .3s'}
								_hover={{ transform: 'scale(1.03)' }}
							>
								<EventCard
									capacity={60}
									image={'images/bsl.jpg'}
									location={'Calle 19 #134 - 89, Bogotá'}
									owner={'ETHColombia'}
									title={
										'¡Web3 in action: Be an impactful volunteer in the BSL!'
									}
								/>
							</GridItem>
						</Link>
						<Link
							href={{
								pathname: '/events/mC8cCmWH5Ws8IZQz'
							}}
						>
							<GridItem
								justifySelf={'center'}
								transition={'transform .3s'}
								_hover={{ transform: 'scale(1.03)' }}
							>
								<EventCard
									capacity={60}
									image={'images/flyer_side_event_ethcol.jpeg'}
									location={'Life 72 - Av. Caracas No. 71-44'}
									owner={'ETHColombia'}
									title={
										'Side Event de ETHColombia en la BSL: Celebración de los Nodos Latinoamericanos'
									}
								/>
							</GridItem>
						</Link>
					</Grid>
				)}
			</Flex>
		</>
	)
}
