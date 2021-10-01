import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container } from '@material-ui/core'
import Timeline from './Timeline'

const useStyles = makeStyles((theme) => ({
	titleText: {
		fontFamily: 'JungleLand',
		fontSize: 36,
		color: theme.palette.secondary.main,
	},
}))

export default function index() {
	const classes = useStyles()

	return (
		<Box marginTop={10} id="roadmap">
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
			>
				<Box className={classes.titleText} marginBottom={5}>
					Roadmap
				</Box>
			</Box>
			<Container maxWidth="md">
				<Timeline />
			</Container>
		</Box>
	)
}
