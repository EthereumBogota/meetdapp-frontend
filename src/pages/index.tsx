import Head from 'next/head'
import React from 'react'
import Explorer from './explore/index'
import Hero from '../utils/components/Hero'
const metadata = {
	title: 'MeetDapp',
	description: 'Decentralized calculator'
}

export default function Home() {
	return (
		<>		
			<Head>
				<title>{metadata.title}</title>
				<meta name='description' content={metadata.description} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/Images/favicon.ico' sizes='any' />
			</Head>
			<Hero/>
		</>
	)
}
