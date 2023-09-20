import '@/styles/globals.css'
import { Box, Flex, Text, Button, Input, ButtonGroup, Avatar, CloseButton, Tooltip } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import { Link } from '@chakra-ui/next-js'
import { useWeb3Auth } from '@/services/web3auth'

export default function Navbar(): React.ReactNode {
	const { t, i18n } = useTranslation()
	const { login, user, getAccounts, logout, userInfo } = useWeb3Auth()
	const english: boolean = i18n.language === 'en'
	const [address, setAddress] = useState<string>('')
	const [navbarBlur, setNavbarBlur] = useState<boolean>(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setNavbarBlur(true);
			} else {
				setNavbarBlur(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		onGetAccounts()
	}, [user])

	const onGetAccounts = async () => {
		if (!user) return
		const response = await getAccounts()
		console.log('respose is ', response)
		setAddress(response[0])
	}

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng)
	}

	const onLogin = async () => {
		const response = await login()
		console.log(response)
	}

	const onLogout = async () => {
		const response = await logout()
		console.log(response)
	}

	const showAddress = (address: string): string => {
		return address.slice(0, 4) + '...' + address.slice(-4)
	}

	const showChars = (str: string, x: number): string => {
		return str.slice(0, x) + '...'
	}

	return (
		<>
			<Flex
				bgColor={navbarBlur ? "blackAlpha.400" : "transparent"}
				backdropFilter={navbarBlur ? 'blur(10px)' : "blur(0)"}
				position={'fixed'}
				zIndex={'100'}
				width={'100%'}
				py={'.8rem'}
				justifyContent={'center'}
				transition={'background-color .3s ease-in'}
				fontFamily="neue"
				fontWeight={"light"}
			>
				<Flex
					alignItems={'center'}
					justifyContent={'space-between'}
					width={{ base: 'full', md: '90%' }}
					px={{ base: 4, lg: 0 }}
					maxWidth={'1200px'}
				>
					<Link href={'/'}>
						<Logo />
					</Link>

					<Flex
						flexShrink={'1'}
						alignItems={'center'}
						gap={{ base: '.5rem', lg: '1.5rem' }}
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
								_active={{ background: english ? 'auto' : '#236677' }}
								_hover={{ background: english ? 'auto' : 'transparent' }}
								background={english ? '#348793' : 'transparent'}
								transition={"background .3s"}
								onClick={() => changeLanguage('en')}
							>
								En
							</Button>
							<Button
								borderTopRightRadius={'3xl'}
								borderBottomRightRadius={'3xl'}
								color={'#DDEBED'}
								_active={{ background: english ? '#236677' : 'auto' }}
								_hover={{ background: english ? 'transparent' : 'auto' }}
								background={english ? 'transparent' : '#348793'}
								transition={"background .3s"}
								onClick={() => changeLanguage('es')}
							>
								Es
							</Button>
						</ButtonGroup>
						{!user ? (
							<Button
								margin={'0 auto'}
								px={{ base: ".5em", lg: "2.5em" }}
								fontSize={{ base: '.8em', md: '1em' }}
								color={'#DDEBED'}
								background={'#348793'}
								borderRadius={'3xl'}
								onClick={onLogin}
								_hover={{ bg: "#236677", transform: "scale(1.05)", transition: "transform .3s" }}
							>
								{t('navbar.log-in')}
							</Button>
						) : (
							<Flex alignItems="center" gap="0.5rem">
								<Avatar
									size={{ base: "sm", lg: "md" }}
									src={'../../assets/navbar/Avatar.png'}
								/>
								<Box color={'#DDEBED'}>
									<Text fontSize={{ base: "xs", lg: "lg" }}>{userInfo?.nickName ? showChars(userInfo.nickName, 15) : t('navbar.user')}</Text>
									<Text fontSize={{ base: "2xs", lg: "xs" }}>{showAddress(address)}</Text>
								</Box>
								<Tooltip label={t('navbar.log-out')}>
									<CloseButton
										size={{ base: "sm", lg: "md" }}
										borderRadius="50%"
										onClick={onLogout}
										backgroundColor='whiteAlpha.900'
									/>
								</Tooltip>
							</Flex>
						)}
					</Flex>
				</Flex>
			</Flex>
		</>
	)
}
