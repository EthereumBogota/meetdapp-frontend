import React from 'react'
import { Box, Divider} from '@chakra-ui/react'
import CopyTextIcon from './CopyTextIcon'
import Blockies from 'react-blockies'

type Props = {
	wallet: string
}

export function AssistantAvatar(props: Props): JSX.Element {
	const { wallet } = props
  const shortened:string = wallet.substring(0, 6) + "..." + wallet.substring(wallet.length - 4);

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
						{shortened}
					</Box>

					<Box
						as={'button'}
						_hover={{
							transform: 'scale(1.06)',
							transition: 'transform 0.3s ease-in-out'
						}}
						_active={{
							transform: 'scale(0.9)'
						}}
					>
						<CopyTextIcon />
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
