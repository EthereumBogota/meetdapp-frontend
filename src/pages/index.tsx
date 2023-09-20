import Head from 'next/head'
import React from 'react'
import Hero from '../utils/components/Hero'
import MiddleSections from '../utils/components/MiddleSections'
import '../config/i18n'


const metadata = {
	title: 'MeetdApp',
	description: 'Embrace meaningful connections'
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
			<Hero />
			<MiddleSections />
		</>
	)
}
