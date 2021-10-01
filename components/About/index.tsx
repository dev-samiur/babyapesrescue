import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	titleText: {
		fontFamily: 'JungleLand',
		fontSize: 36,
		color: theme.palette.secondary.main,
	},
	subTitleText: {
		fontFamily: 'JungleLand',
		fontSize: 28,
		color: '#FFF',
		marginTop: 15,
		[theme.breakpoints.down('md')]: {
			fontSize: 24,
		},
	},
	paragraph: {
		fontSize: 18,
		color: '#FFF',
		marginTop: 20,
	},
}))

export default function About() {
	const classes = useStyles()
	const matches = useMediaQuery('(max-width:960px)')

	return (
		<Box id="about"
			marginTop={5}
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection={matches ? 'column' : 'row'}
		>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="flex-start"
				flexDirection="column"
			>
				<Typography className={classes.titleText} noWrap>
					What is Baby Apes Rescue?
				</Typography>
				<Typography className={classes.subTitleText}>
					Urgent! Sam and his baby ape friends need <br /> your help!
				</Typography>
				<Typography className={classes.paragraph}>
					Their home at the Timbu Forest is currently on fire and it&apos;s burning
					down fast.
					<br />
					<br />
					They need your urgent help by giving them a new home & saving them
					from extinction. There are a total of 10,000 different breeds and
					species that are at risk of extinction.
					<br />
					<br />
					Will you be willing to provide them a new home & nurture them with
					love?
				</Typography>
			</Box>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="flex-start"
				flexDirection="column"
				marginTop={matches ? 5 : 0}
				marginLeft={matches ? 0: 10}
			>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="flex-start"
				>
					<img src="/images/about-1.jpg" style={{width: 170, height: 170}} alt="" />
					<img src="/images/about-2.png" style={{width: 170, height: 170, marginLeft: 20}} alt="" />
				</Box>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="flex-start"
					marginTop={2}
				>
					<img src="/images/about-3.jpg" style={{width: 170, height: 170}} alt="" />
					<img src="/images/about-4.jpg" style={{width: 170, height: 170, marginLeft: 20}} alt="" />
				</Box>
			</Box>
		</Box>
	)
}
