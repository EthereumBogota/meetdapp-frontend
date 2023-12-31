import { useTranslation } from 'react-i18next'

import { Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'

import UnderlineHero from './UnderlineHero'

export default function Hero() {
	const { t } = useTranslation()

	return (
		<Flex
			minH={{ base: 'auto', lg: '100vh' }}
			width={'full'}
			justify={'center'}
			position={'relative'}
			background={
				'linear-gradient(180deg, #348793 -0.41%, #00001C -0.4%, #053763 73.8%)'
			}
			fontFamily='neue'
			overflow={'hidden'}
		>
			<Flex
				mt={{ base: '6rem', lg: 20 }}
				gap={'3em'}
				px={{ base: 4, lg: 0 }}
				maxW={'1200px'}
				width={'90%'}
				alignItems={'center'}
				justify={{ base: 'space-evenly', lg: 'space-between' }}
				direction={{ base: 'column', lg: 'row' }}
			>
				<Stack
					width={{ base: '100%', lg: '50%' }}
					spacing={5}
					w={'full'}
					zIndex={50}
					mx={{ base: 'auto', lg: '0' }}
					textAlign={{ base: 'center', lg: 'left' }}
				>
					<Stack spacing={0}>
						<Heading
							mb={2}
							color={'#FFF'}
							mx={{ base: 'auto', lg: 0 }}
							fontFamily={'neueBold'}
							maxW={'550px'}
							fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '6xl' }}
							lineHeight={{ base: '20px', md: '40px', lg: '60px' }}
						>
							{t('landing.hero.title')}
						</Heading>
						<UnderlineHero />
					</Stack>
					<Text
						fontSize={{ base: 'lg', lg: '2xl' }}
						color={'#FFF'}
						fontStyle={'normal'}
						fontWeight={'normal'}
						lineHeight={'33px'}
					>
						{t('landing.hero.description')}
					</Text>
					{/* <Flex gap={'1em'} justify={{ base: 'center', lg: 'flex-start' }}>
						<Button
							boxShadow={
								'0px 0px 0px 0px rgba(0, 0, 0, 0.30), 3px 2px 8px 0px rgba(0, 0, 0, 0.29), 11px 8px 14px 0px rgba(0, 0, 0, 0.26), 25px 18px 19px 0px rgba(0, 0, 0, 0.15), 45px 31px 22px 0px rgba(0, 0, 0, 0.04), 71px 49px 24px 0px rgba(0, 0, 0, 0.01)'
							}
							padding={'.5em 1.2em'}
							rounded={'full'}
							bg={'#348793'}
							color={'#DDEBED'}
							fontSize={['18px', '24px']}
							fontWeight={100}
							_hover={{
								bg: '#227682',
								transform: 'scale(1.03)',
								transition: 'transform 0.3s ease-in-out'
							}}
						>
							{t('landing.hero.get-started')}
						</Button>
						<Button
							rightIcon={<ArrowRight />}
							fontFamily={'neue'}
							color={'#DDEBED'}
							variant={'outline'}
							rounded={'full'}
							padding={'.5em 1.2em'}
							fontSize={{ base: '14px', lg: '21px' }}
							fontWeight={100}
							_hover={{
								bg: 'transparent',
								transform: 'scale(1.03)',
								transition: 'transform 0.3s ease-in-out'
							}}
						>
							{t('landing.hero.more')}
						</Button>
					</Flex> */}
				</Stack>
				<Image
					alt={'Hero Image'}
					position={'relative'}
					objectFit={'cover'}
					src={'/images/hero_image.png'}
					zIndex={50}
					width={{ base: '600px', xl: 'auto' }}
					height={{ lg: '100%' }}
					left={{ xl: '6em' }}
					mx={'auto'}
					overflow={'visible'}
				/>
			</Flex>
			<Image
				alt={'Elipse Hero'}
				src={'/images/elipse_hero.svg'}
				position={'absolute'}
				right={{ lg: '-55vw' }}
				bottom={{ base: '-50vh' }}
				top={{ lg: '10vh' }}
				zIndex={0}
				transform={{ base: 'scale(1.2)', md: 'scale(1.3)', lg: 'scale(1)' }}
				width={'1508px'}
				height={'779px'}
			/>
		</Flex>
	)
}
