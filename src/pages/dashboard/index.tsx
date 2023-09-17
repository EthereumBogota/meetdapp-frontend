import EventImage from '@/components/dashboard/EventImage'
import EventLocation from '@/components/dashboard/EventLocation'
import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
const metadata = {
	title: 'MeetdApp | Dashboard',
	description: 'Embrace meaningful connections'
}
const Dashboard = () => {
	return (
		<>
			<Head>
				<title>{metadata.title}</title>
				<meta name='description' content={metadata.description} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/Images/favicon.ico' sizes='any' />
			</Head>
			<Flex
				minH={{ base: 'auto', lg: '100vh' }}
				width={'full'}
				justify={'center'}
				position={'relative'}
				background={
					'linear-gradient(180deg, #348793 -0.41%, #00001C -0.4%, #053763 73.8%)'
				}
			>
				<Flex
					mt={{ base: '6rem', lg: 5 }}
					gap={'3em'}
					px={6}
					maxW={'1300px'}
					width={'90%'}
					alignItems={'center'}
					justify={{ base: 'space-evenly', lg: 'space-between' }}
					direction={{ base: 'column', lg: 'row' }}
				>
					<EventImage />
					<EventLocation />
				</Flex>
			</Flex>
		</>
	)
}

export default Dashboard
