import '@/styles/globals.css'
import { Box, Flex, Text, Button, Input, ButtonGroup, Avatar, CloseButton, Tooltip } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import { Link } from '@chakra-ui/next-js'
import { useWeb3Auth } from '@/services/web3auth'
import avatarImg from '../../assets/navbar/Avatar.png'
export default function Navbar(): React.ReactNode {
	const { t, i18n } = useTranslation()
	const { login, user, getAccounts, logout, userInfo } = useWeb3Auth()
	const english: boolean = i18n.language === 'en'
	const [address, setAddress] = useState<string>('')
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
	//show no more than x amount of chars from a string
	const showChars = (str: string, x: number): string => {
		return str.slice(0, x) + '...'
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
						{!user ? (
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
									onClick={onLogin}
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
						) : (
							<Flex alignItems="center" gap="0.5rem">
							<Avatar
								size="md"
								//TODo pick avatar from database
								src={'../../assets/navbar/Avatar.png'}
							/>
							<Box color={'#DDEBED'}>
								<Text>{userInfo?.nickName ? showChars(userInfo.nickName, 15) : t('navbar.user')}</Text>
								<Text fontSize="xs">{showAddress(address)}</Text>
							</Box>
							<Tooltip label='Log out'>
								<CloseButton
									size="md"
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
