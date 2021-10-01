import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Box, Typography } from '@material-ui/core'
import Image from 'next/image'
import InfoBox from './InfoBox'

const useStyles = makeStyles((theme) => ({
	titleText: {
		fontFamily: 'JungleLand',
		fontSize: 40,
		color: theme.palette.secondary.main,
		marginBottom: 15,
	},
}))

export default function index() {
	const classes = useStyles()
	const matches = useMediaQuery('(max-width:960px)')

	const infos = [
		{
			imgSrc: '/images/info-img-1.png',
			text: 'We have discovered and identified a total of 10,000 different baby apes',
		},
		{
			imgSrc: '/images/info-img-2.png',
			text: 'Each baby ape breed is unique and have different behaviours',
		},
		{
			imgSrc: '/images/info-img-3.png',
			text: 'Keep your eyes open as they run out of their burning home',
		},
		{
			imgSrc: '/images/info-img-4.png',
			text: 'You’ll notice different eyes, clothing, expression and more',
		},
		{
			imgSrc: '/images/info-img-5.png',
			text: 'Adopting a baby ape will cost 0.07 ETH',
		},
		{
			imgSrc: '/images/info-img-6.png',
			text: 'You will be able to mint up to 10 per transaction',
		},
	]

	return (
		<Box marginTop={matches ? 5 : 15}>
			<Box>
				<Typography className={classes.titleText} noWrap>
					Baby Apes Rescue Info
				</Typography>
			</Box>
			<Box display="flex" flexDirection={matches ? 'column' : 'row'}>
				<Box>
					{infos.map((info) => (
						<InfoBox imgSrc={info.imgSrc} text={info.text} key={info.imgSrc} />
					))}
				</Box>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					width="100%"
					marginTop={matches ? 10 : 0}
					marginLeft={matches ? 0 : 10}
				>
					<Image
						src="/images/info-img-7.gif"
						width="400px"
						height="400px"
						alt=""
					/>
				</Box>
			</Box>
		</Box>
	)
}
