import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Typography, Box } from '@material-ui/core'
import FairCalculator from './FairCalculator'

const useStyles = makeStyles((theme) => ({
	titleText: {
		fontFamily: 'JungleLand',
		fontSize: 36,
		color: theme.palette.secondary.main,
		marginBottom: 15,
	},
	textStyle: {
		color: '#fff',
		fontSize: 18,
		lineHeight: 2,
		marginBottom: 15,
	},
}))

export default function index() {
	const classes = useStyles()
	const matches = useMediaQuery('(max-width:960px)')

	return (
		<Box
			marginTop={matches ? 10 : 15}
			display="flex"
			flexDirection={matches ? 'column' : 'row'}
		>
			<Box flexGrow={2}>
				<FairCalculator />
			</Box>
			<Box
				width={350}
				marginLeft={matches ? 0 : 10}
				marginTop={matches ? 5 : 0}
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems={matches ? 'center' : 'flex-start'}
			>
				<Typography className={classes.titleText} noWrap>
					Fair Distribution
				</Typography>
				<Typography className={classes.textStyle}>
					Baby Apes NFT costs 0.07. ETH There are no price tiers; Baby Ape
					adoption costs the same for everyone.
				</Typography>
			</Box>
		</Box>
	)
}
