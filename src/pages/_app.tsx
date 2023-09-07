import React from 'react'
import { Web3Auth } from '@web3auth/modal'
import '@/styles/globals.css'
import { useState } from 'react'
import { User, UserContext } from '@/lib/UserContext'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../theme/theme'
import { Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { SafeEventEmitterProvider } from "@web3auth/base";
export default function App({ Component, pageProps }: AppProps) {
	const [user, setUser] = useState<User | null>(null)
	return (
		<ChakraProvider theme={customTheme}>
			<UserContext.Provider value={{ user, setUser }}>
				<Stack
					minH={'100vh'}
					direction={{ base: 'column', md: 'row' }}
					spacing={0}
				>
					<Flex
						p={8}
						flex={1}
						align={'center'}
						justify={'center'}
						background='linear-gradient(180deg, #348793 -0.41%, #00001C -0.4%, #053763 73.8%)'
					>
						<Stack spacing={6} w={'full'} maxW={'lg'}>
							<Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
								<Text
									as={'span'}
									position={'relative'}
									color={'#FFF'}
									_after={{
										content: "''",
										width: 'full',
										position: 'absolute',
										bottom: 1,
										left: 0,
										bg: '#FFF',
										zIndex: -1
									}}
								>
									Embrace
								</Text>
								<br />{' '}
								<Text color={'#FFF'} as={'span'}>
									Meaningful Connections
								</Text>{' '}
							</Heading>
							<Text fontSize={{ base: 'md', lg: 'lg' }} color={'#FFF'}>
								Where uniqueness thrives. Unlock the potencial of blockchain
								technology, elevate your event experience.
							</Text>
							<Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
								<Button
									rounded={'full'}
									bg={'blue.400'}
									color={'white'}
									_hover={{
										bg: 'blue.500'
									}}
								>
									Create Project
								</Button>
								<Button rounded={'full'}>How It Works</Button>
							</Stack>
						</Stack>
					</Flex>
					<Flex
						flex={1}
						align={'center'}
						justify={'center'}
						background='linear-gradient(180deg, #348793 -0.41%, #00001C -0.4%, #053763 73.8%)'
					>
						<Image
							alt={'Login Image'}
							objectFit={'cover'}
							src={
								'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
							}
						/>
					</Flex>
				</Stack>
				<Component {...pageProps} />
			</UserContext.Provider>
		</ChakraProvider>
	)
}
