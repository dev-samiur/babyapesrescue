/* eslint-disable react/no-danger */
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" style={{ scrollBehavior: 'smooth' }}>
				<Head>
					<script
						dangerouslySetInnerHTML={{
							__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-K4KCKZW');`,
						}}
					/>
					<meta name="Description" content="Baby Apes Rescue" />
					<link rel="shortcut icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700;900&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="preload"
						href="/fonts/JungleLand/JungleLand.ttf"
						as="font"
						crossOrigin=""
					/>
					<link href="/fonts/style.css" rel="stylesheet" />
					<link
						rel="stylesheet"
						type="text/css"
						charSet="UTF-8"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
					/>
				</Head>
				<body>
					<noscript
						dangerouslySetInnerHTML={{
							__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K4KCKZW"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						}}
					/>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
	// Render app and page and get the context of the page with collected side effects.
	const sheets = new ServerStyleSheets()
	const originalRenderPage = ctx.renderPage

	ctx.renderPage = () =>
		originalRenderPage({
			// eslint-disable-next-line react/jsx-props-no-spreading
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		})

	const initialProps = await Document.getInitialProps(ctx)

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [
			...React.Children.toArray(initialProps.styles),
			sheets.getStyleElement(),
		],
	}
}
