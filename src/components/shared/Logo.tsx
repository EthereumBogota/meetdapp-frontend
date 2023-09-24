import { Flex, Image, Text } from '@chakra-ui/react'

export default function Logo() {
	return (
		<>
			<Flex
				flexShrink={'1'}
				flexDirection={'row'}
				color={'#DDEBED'}
				position={'relative'}
				alignItems={'center'}
				justifyContent={'center'}
				gap={{ base: '.4rem', lg: '1rem' }}
			>
				<Image
					src={'/images/logo.svg'}
					alt='MeetdApp logo'
					width={['30px', '38px', '45px']}
				/>
				<Text fontSize={{ base: '1rem', md: '1.2rem', lg: '2rem' }}>
					MeetdApp
				</Text>
				<Text
					position={'absolute'}
					fontSize={{ base: '2xs', lg: 'sm' }}
					fontWeight={'bold'}
					top={-0.5}
					right={{ base: -6, lg: -9 }}
					color={'#FF9A03'}
				>
					alpha
				</Text>
			</Flex>
		</>
	)
}
