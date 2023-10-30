import React from 'react'
import { useTranslation } from 'react-i18next'

import { Flex, Stack, Text, VStack } from '@chakra-ui/react'

import TagComponent from './TagComponent'

const TagsSection = () => {
	const { t } = useTranslation()
	return (
		<Flex
			p={{ base: 5, md: 7 }}
			borderRadius='3xl'
			mx='auto'
			bg='#DDEBED'
			align='flex-start'
			w='full'
			flexDirection='column'
		>
			<VStack align='start' spacing={5}>
				<Text
					fontSize={{ base: '2xl', lg: '3xl' }}
					fontFamily={'space'}
					fontWeight='semibold'
					color={'#00001C'}
				>
					{t('event.labels')}
				</Text>
				<Stack direction='row' flexWrap={'wrap'} spacing={4}>
					<TagComponent text='#web3' />
					<TagComponent text='#Blockchain' />
					<TagComponent text='#Ethereum' />
					<TagComponent text='#Bogota' />
					<TagComponent text='#Bitcoin' />
					<TagComponent text='#EventosPresenciales' />
					<TagComponent text='#Colombia' />
					<TagComponent text='#Educacion' />
					<TagComponent text='#Networking' />
				</Stack>
			</VStack>
		</Flex>
	)
}

export default TagsSection
