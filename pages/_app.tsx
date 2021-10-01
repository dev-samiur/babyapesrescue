/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import TagManager from 'react-gtm-module'
import theme from '../config/theme'

const tagManagerArgs = {
	gtmId: 'GTM-K4KCKZW',
}

export default class MyApp extends App {
	componentDidMount() {
		TagManager.initialize(tagManagerArgs)
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles && jssStyles.parentElement) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}

	render() {
		const { Component, pageProps } = this.props

		return (
			<>
				<Head>
					<title>Baby Apes Rescue</title>
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width"
					/>
					<meta name="theme-color" content={theme.palette.primary.main} />
				</Head>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</>
		)
	}
}
