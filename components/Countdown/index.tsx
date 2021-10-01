import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Typography, Box, Button, Icon } from '@material-ui/core'
import Image from 'next/image'
import TimeBox from './TimeBox'

const useStyles = makeStyles((theme) => ({
	textStyle: {
		color: '#fff',
		fontSize: 18,
		lineHeight: 2,
		marginBottom: 15
	},
	button: {
		fontWeight: 600,
		padding: '10px 20px',
		color: theme.palette.primary.main,
		borderRadius: 20,
	},
}))

const DiscordIcon = () => (
	<Icon style={{ width: 20, height: 20, marginTop: -8 }}>
		<Image alt="discord" src="/icons/discord-black.png" width={20} height={20} />
	</Icon>
)

export default function index() {
	const classes = useStyles()
	const matches = useMediaQuery('(max-width:960px)')

	return (
		<Box marginTop={matches ? 10 : 15} display="flex" flexDirection={matches ? 'column' : 'row'}>
			<TimeBox />
			<Box marginLeft={matches ? 0 : 10} marginTop={matches ? 5 : 0} display="flex" flexDirection="column" justifyContent="center" alignItems={matches ? 'center' : 'flex-start'}>
				<Typography className={classes.textStyle}>
					A special minting page will go live near our launch date. Join our
					discord for the latest updates and announcements!
				</Typography>
				<Button
					variant="contained"
					color="secondary"
					size="large"
					startIcon={<DiscordIcon />}
					className={classes.button}
					href="https://discord.io/BabyApesRescue"
					target="_blank"
				>
					Join Our Discord
				</Button>
			</Box>
		</Box>
	)
}
