import React from 'react'
import Link from 'next/link'
import Blockies from 'react-blockies'

import { SCAN } from '@/constants/constants'
import { Box, Divider, Text, useClipboard, useToast } from '@chakra-ui/react'

import CopyTextIcon from './CopyTextIcon'

type Props = {
	wallet: string
}

export function AssistantAvatar(props: Props): JSX.Element {
	const { wallet } = props
	const shortened: string =
		wallet.substring(0, 6) + '...' + wallet.substring(wallet.length - 4)

	const { hasCopied, onCopy } = useClipboard(wallet)

	const handleCopy = () => {
		onCopy()
		// toast({
		// 	title: 'Copied!',
		// 	description: 'Address copied to clipboard',
		// 	status: 'success',
		// 	duration: 1000,
		// 	isClosable: true
		// })
	}

	return (
		<Box
			bg={'#C9DCDF'}
			maxW='sm'
			borderWidth='1px'
			borderRadius='xl'
			display='flex'
			flexDirection={'column'}
			alignItems={'center'}
			p={3}
			gap={5}
		>
			<Blockies seed={wallet} size={11} scale={8} />
			<Divider borderColor={'gray.500'} />
			<Box p='3' paddingY={0} fontFamily={'space'} textAlign='center'>
				<Box
					display='flex'
					alignItems='center'
					justifyContent={'center'}
					gap={1}
				>
					<Box as='span' color='gray.500'>
						<Link href={SCAN(wallet)}>
							<Text _hover={{ color: 'teal' }}>{shortened}</Text>
						</Link>
					</Box>

					<Box
						as='button'
						onClick={handleCopy}
						_hover={{
							transform: 'scale(1.06)',
							transition: 'transform 0.3s ease-in-out'
						}}
						_active={{
							transform: 'scale(0.9)'
						}}
						position='relative'
					>
						<CopyTextIcon />
						{hasCopied && (
							<span
								style={{
									position: 'absolute',
									animation: 'fadeInOut 1s forwards',
									opacity: 0,
									top: '-20px',
									right: '0',
									fontSize: '0.8rem',
									background: '#C9DCDFay',
									padding: '2px 5px',
									borderRadius: '3px',
									boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
									color: 'teal'
								}}
							>
								Copied!
							</span>
						)}
						<style jsx>{`
							@keyframes fadeInOut {
								0% {
									opacity: 0;
								}
								50% {
									opacity: 1;
								}
								100% {
									opacity: 0;
								}
							}
						`}</style>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
