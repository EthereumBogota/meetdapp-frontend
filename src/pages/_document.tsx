import React from 'react'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='icon' href='/images/favicon.ico' sizes='any' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
