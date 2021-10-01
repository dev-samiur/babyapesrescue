import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	treehouseBg: {
		height: '100vh',
		background: 'url("/images/treehouse.png")',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		[theme.breakpoints.down('sm')]: {
			backgroundSize: 'contain',
			height: '50vh'
		},
	},
	titleText: {
		fontFamily: 'JungleLand',
		fontSize: 36,
		color: theme.palette.secondary.main,
	},
	textStyle: {
		color: '#fff',
		fontSize: 18,
		lineHeight: 2,
		width: 600,
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
}))

export default function index() {
	const classes = useStyles()
	const matches = useMediaQuery('(max-width:960px)')

	return (
		<Box marginTop={15}>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
			>
				<Box className={classes.titleText} marginBottom={2}>
					Entry Into the Treehouse
				</Box>
				<Box className={classes.textStyle} marginBottom={matches ? 0 : 15}>
					When you adopt a baby ape, you will also get membership access into a
					new Treehouse Home. This is part of our roadmap when 100% of the baby
					apes get adopted!
				</Box>
			</Box>
			<div className={classes.treehouseBg} />
		</Box>
	)
}
