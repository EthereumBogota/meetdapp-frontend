import '@/styles/globals.css'
import { Box, Flex, Text, Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import { Link } from '@chakra-ui/next-js'

export default function Navbar(): React.ReactNode {
	const { t, i18n } = useTranslation()

	const english: boolean = i18n.language === "en"

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng)
	}

	return (
		<>
			<Flex
				bgColor={'transparent'}
				position={'fixed'}
				zIndex={'100'}
				width={'100%'}
				py={'.8rem'}
				justifyContent={'center'}
			>
				<Flex
					alignItems={'center'}
					justifyContent={'space-between'}
					width={'100%'}
					px={6}
					maxWidth={'1300px'}
				>
					<Link href={'/'}>
						<Logo />
					</Link>

					<Flex
						flexShrink={'1'}
						alignItems={'center'}
						gap={{ base: '.5rem', lg: '1rem' }}
					>
						<ButtonGroup
							size={{ base: 'xs', lg: 'sm' }}
							isAttached
							variant={'outline'}
						>
							<Button
								borderTopLeftRadius={'3xl'}
								borderBottomLeftRadius={'3xl'}
								color={'#DDEBED'}
								_hover={{ pointerEvents: english ? 'none' : 'auto' }}
								background={english ? '#348793' : 'transparent'}
								onClick={() => changeLanguage('en')}
							>
								En
							</Button>
							<Button
								borderTopRightRadius={'3xl'}
								borderBottomRightRadius={'3xl'}
								color={'#DDEBED'}
								_hover={{ pointerEvents: english ? 'auto' : 'none' }}
								background={english ? 'transparent' : '#348793'}
								onClick={() => changeLanguage('es')}
							>
								Es
							</Button>
						</ButtonGroup>
						<Flex
							position={'relative'}
							top={'10px'}
							textAlign={'center'}
							flexDirection={'column'}
							gap={'3px'}
						>
							<Button
								margin={'0 auto'}
								width={'80%'}
								fontSize={{ base: '.8em', md: '1em' }}
								color={'#DDEBED'}
								background={'#348793'}
								borderRadius={'3xl'}
							>
								{t('navbar.log-in')}
							</Button>

							<Box>
								<Text
									display={'inline'}
									fontSize={{ base: '0.4em', md: '.8em' }}
									color={'#DDEBED'}
								>
									{t('navbar.no-account')}
								</Text>
								<Text
									display={'inline'}
									fontSize={{ base: '0.4em', md: '.8em' }}
									color={'#348793'}
								>
									{' '}
									{t('navbar.register')}{' '}
								</Text>
							</Box>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</>
	)
}
