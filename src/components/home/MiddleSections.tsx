import React from 'react'
import { useTranslation } from 'react-i18next'

import { Flex } from '@chakra-ui/react'

import Events from './Events'
import FAQ from './FAQ'
import Section from './Section'

type Props = {
	isLoading: boolean
}

export default function MiddleSections(props: Props) {
	const { isLoading } = props
	const { t } = useTranslation()

	return (
		<Flex
			width={'100%'}
			zIndex={50}
			gap={'8em'}
			direction={'column'}
			align={'center'}
			justify={'center'}
			py={'5em'}
			background='#DDEBED'
		>
			<Events isLoading={isLoading} />

			<Section
				badge={t('landing.section1.badge')}
				heading={t('landing.section1.title')}
				description={t('landing.section1.description')}
				button={t('landing.section1.button')}
				image={'/images/section_1_image.png'}
				imageRight={true}
			/>

			<Section
				badge={t('landing.section2.badge')}
				heading={t('landing.section2.title')}
				description={t('landing.section2.description')}
				button={t('landing.section2.button')}
				image={'/images/section_2_image.png'}
				imageRight={false}
			/>

			<Section
				badge={t('landing.section3.badge')}
				heading={t('landing.section3.title')}
				description={t('landing.section3.description')}
				button={t('landing.section3.button')}
				image={'/images/section_3_image.svg'}
				imageRight={true}
			/>

			<Section
				badge={t('landing.section4.badge')}
				heading={t('landing.section4.title')}
				description={t('landing.section4.description')}
				button={t('landing.section4.button')}
				image={'/images/section_4_image.png'}
				imageRight={false}
			/>

			<FAQ />
		</Flex>
	)
}
