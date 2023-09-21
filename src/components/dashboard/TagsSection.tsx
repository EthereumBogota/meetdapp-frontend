import React from 'react'
import { Flex, Text, VStack, Stack } from '@chakra-ui/react'
import TagComponent from './TagComponent'

const TagsSection = () => {
	return (
		<Flex
			maxW={'50.313em'}
			minH='fit-content'
			h='fit-content'
			borderRadius='3xl'
			margin='auto 74px'
			bg='#DDEBED'
			backgroundPosition={{ base: '100%', md: 'left top' }}
			align='flex-start'
			w='70%'
			flexDirection='column'
			px={12}
			py={10}
		>
			<VStack align='start' spacing={5}>
				<Text
					fontSize='1.953rem'
					fontFamily={'space'}
					fontWeight='semibold'
					color={'#00001C'}
				>
					Etiquetas
				</Text>
				<Stack direction='row' flexWrap={'wrap'} spacing={4}>
					<TagComponent text='#web3'/>
					<TagComponent text='#Blockchain'/>
					<TagComponent text='#Ethereum'/>
					<TagComponent text='#Bogota'/>
					<TagComponent text='#Bitcoin'/>
					<TagComponent text='#EventosPresenciales'/>
					<TagComponent text='#Colombia'/>
					<TagComponent text='#Educacion'/>
					<TagComponent text='#Networking'/>
				</Stack>
			</VStack>
		</Flex>
	)
}

export default TagsSection
