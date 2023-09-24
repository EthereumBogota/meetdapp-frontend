import '@/styles/globals.css'
import {
	Box,
	Flex,
	Text,
	Button,
	ButtonGroup,
	Avatar,
	CloseButton,
	Tooltip
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import { Link } from '@chakra-ui/next-js'
import Wallet from '@/components/Wallet'

export default function Navbar(): React.ReactNode {
	const { t, i18n } = useTranslation()
	const english: boolean = i18n.language === 'en'
	const [address, setAddress] = useState<string>('')
	const [navbarBlur, setNavbarBlur] = useState<boolean>(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setNavbarBlur(true)
			} else {
				setNavbarBlur(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng)
	}

	return (
		<>
			<Flex
				bgColor={navbarBlur ? 'blackAlpha.400' : 'transparent'}
				backdropFilter={navbarBlur ? 'blur(10px)' : 'blur(0)'}
				position={'fixed'}
				zIndex={'100'}
				width={'100%'}
				py={'.8rem'}
				justifyContent={'center'}
				transition={'background-color .3s ease-in'}
				fontFamily='neue'
				fontWeight={'light'}
			>
				<Flex
					alignItems={'center'}
					justifyContent={'space-between'}
					width={{ base: 'full', md: '90%' }}
					px={{ base: 4, lg: 0 }}
					maxWidth={'1200px'}
				>
					<Link href={'/'} _hover={{ textDecoration: 'none' }}>
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
								transition={'background .3s'}
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
								transition={'background .3s'}
								onClick={() => changeLanguage('es')}
							>
								Es
							</Button>
						</ButtonGroup>
						<Wallet />
					</Flex>
				</Flex>
			</Flex>
		</>
	)
}
