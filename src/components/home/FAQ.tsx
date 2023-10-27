import { useTranslation } from 'react-i18next'

import { Flex, Heading, Text } from '@chakra-ui/react'

import AccordionC from './AccordionC'

export default function Events(): React.ReactNode {
	const { t } = useTranslation()

	return (
		<>
			<Flex
				width={'90%'}
				maxW={'1200px'}
				flexDirection={'column'}
				gap={10}
				zIndex={50}
				color={'#00001C'}
				px={{ base: 4, lg: 0 }}
				my={10}
			>
				<Heading textAlign={'center'} fontFamily='spaceBold'>
					{t('landing.FAQ.title')}
				</Heading>
				{/* <AccordionC /> */}
				<Text
					textAlign={'center'}
					fontFamily={'spaceBold'}
					fontSize={'xl'}
					my={6}
				>
					{t('landing.FAQ.soon')}
				</Text>
			</Flex>
		</>
	)
}
