import { Center } from '@chakra-ui/react'
import { TailSpin } from 'react-loader-spinner'

interface loaderProps {
	width: string
	height: string
	color: string
}

export default function Loader(props: loaderProps): JSX.Element {
	const { width, height, color } = props

	return (
		<Center w={width} h={height}>
			<TailSpin
				height='60'
				width='60'
				color={color}
				ariaLabel='tail-spin-loading'
				radius='1'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
			/>
		</Center>
	)
}
