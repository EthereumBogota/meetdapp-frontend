import { useTranslation } from 'react-i18next'
import { FaInstagram, FaYoutube } from 'react-icons/fa'

import { Link } from '@chakra-ui/next-js'
import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'

import Logo from './Logo'

export default function Footer(): JSX.Element {
	const { t } = useTranslation()

	return (
		<>
			<Flex
				width={'100%'}
				align={'center'}
				justify={'center'}
				fontFamily={'neue'}
				background={'#00001C'}
				py={{ base: '3rem', md: '6rem' }}
			>
				<Flex
					width={'90%'}
					maxW={'1200px'}
					direction={'column'}
					px={{ base: 4, lg: 0 }}
				>
					<Flex
						justify={'space-between'}
						align={'center'}
						textAlign={'center'}
						gap={5}
						direction={{ base: 'column', md: 'row' }}
					>
						<Logo />
						<Text color={'#DDEBED'}>
							&copy; 2022 - 2023 {t('footer.copyright')}
						</Text>
						<HStack spacing={'1em'}>
							<Box>
								<Link
									href={'https://www.youtube.com/@EthereumBogota'}
									target='_blank'
								>
									<FaYoutube size={35} color='#fff' />
								</Link>
							</Box>
							<Box>
								<Link href={'https://twitter.com/ethcobogota'} target='_blank'>
									<Image
										src='/images/twitter.svg'
										alt='X'
										width={['30px', '38px', '45px']}
									/>
								</Link>
							</Box>
							<Box>
								<Link
									href={'https://www.instagram.com/ethcobogota/'}
									target='_blank'
								>
									<FaInstagram size={35} color='#fff' />
								</Link>
							</Box>
						</HStack>
					</Flex>
					{/* <Divider my={'4rem'} />
					<Grid templateColumns='repeat(3, 1fr)' gap={2} color={'#DDEBED'}>
						<GridItem>
							<Link href={'#'}>item</Link>
						</GridItem>
						<GridItem>
							<Link href={'#'}>item</Link>
						</GridItem>
						<GridItem>
							<Link href={'#'}>item</Link>
						</GridItem>
						<GridItem>
							<Link href={'#'}>item</Link>
						</GridItem>
						<GridItem>
							<Link href={'#'}>item</Link>
						</GridItem>
						<GridItem>
							<Link href={'#'}>item</Link>
						</GridItem>
						<GridItem>
							<Link href={'#'}>item</Link>
						</GridItem>
						<GridItem>
							<Link href={'#'}>item</Link>
						</GridItem>
						<GridItem>
							<Link href={'#'}>item</Link>
						</GridItem>
					</Grid> */}
				</Flex>
			</Flex>
			<style jsx>{`
				.container {
					margin: 50px;
				}
				p {
					color: blue;
				}
			`}</style>
		</>
	)
}
