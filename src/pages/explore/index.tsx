import React, { useState } from 'react'
import Head from 'next/head'
import { Text } from '@chakra-ui/react'

const metadata = {
	title: 'MeetDapp - Embrace Meaningfull Connections',
	description: 'Decentralized calculator'
}

const Explore = () => {
	return (
		<>
			<Head>
				<title>{metadata.title}</title>
				<meta name='description' content={metadata.description} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/Images/favicon.ico' sizes='any' />
			</Head>
			<Text
				as='h2'
				fontSize='5xl'
				marginY='12'
				fontWeight='bold'
				textColor='brand.newBlack'
			>
				MeetDapp 
			</Text>
		</>
	)
}

export default Explore
