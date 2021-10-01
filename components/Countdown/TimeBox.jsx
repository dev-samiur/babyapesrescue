import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
	titleText: {
		fontFamily: 'JungleLand',
		fontSize: 36,
		color: theme.palette.primary.main,
	},
	timeBox: {
		width: 100,
		height: 100,
		borderRadius: 25,
		backgroundColor: '#172F26',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'JungleLand',
		fontSize: 54,
		fontWeight: 900,
		color: theme.palette.secondary.main,
	},
	rec: {
		position: 'absolute',
		background: '#C4C4C4',
		height: 2,
		width: 100,
		top: 49,
	},
}))

const convertTZ = (date, tzString) =>
	new Date(
		(typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {
			timeZone: tzString,
		})
	)

const calculateTimeLeft = () => {
	const endDate = convertTZ(new Date(2021, 8, 26, 15, 0, 0), 'America/New_York')
	const currDate = convertTZ(new Date(), 'America/New_York')
	const difference = endDate - currDate
	let timeLeft = {}

	if (difference > 0) {
		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		}
	}

	return timeLeft
}

export default function TimeBox() {
	const classes = useStyles()
	const matches = useMediaQuery('(max-width:960px)')

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft())
		}, 1000)
	})

	return (
		<Box>
			<Box
				padding={3}
				style={{ background: 'white', maxWidth: 500, borderRadius: 5 }}
			>
				<Box>
					<Typography className={classes.titleText} noWrap>
						Minting Starts In
					</Typography>
				</Box>
				<Box
					display="flex"
					marginTop={2}
					flexDirection={matches ? 'column' : 'row'}
				>
					<Box display="flex" justifyContent="center">
						<Box
							display="flex"
							flexDirection="column"
							alignItems="center"
							position="relative"
						>
							<Box className={classes.rec} />
							<Box className={classes.timeBox}>{timeLeft.days}</Box>
							<Box
								marginTop={1}
								style={{ fontSize: 16, fontWeight: 700, color: 'primary' }}
							>
								Days
							</Box>
						</Box>
						<Box
							display="flex"
							flexDirection="column"
							alignItems="center"
							position="relative"
							marginLeft={2}
							marginTop={matches ? 0 : 0}
						>
							<Box className={classes.rec} />
							<Box className={classes.timeBox}>{timeLeft.hours}</Box>
							<Box
								marginTop={1}
								style={{ fontSize: 16, fontWeight: 700, color: 'primary' }}
							>
								Hours
							</Box>
						</Box>
					</Box>
					<Box display="flex" justifyContent="center">
						<Box
							display="flex"
							flexDirection="column"
							alignItems="center"
							position="relative"
							marginLeft={matches ? 0 : 2}
							marginTop={matches ? 1 : 0}
						>
							<Box className={classes.rec} />
							<Box className={classes.timeBox}>{timeLeft.minutes}</Box>
							<Box
								marginTop={1}
								style={{ fontSize: 16, fontWeight: 700, color: 'primary' }}
							>
								Minutes
							</Box>
						</Box>
						<Box
							display="flex"
							flexDirection="column"
							alignItems="center"
							position="relative"
							marginLeft={2}
							marginTop={matches ? 1 : 0}
						>
							<Box className={classes.rec} />
							<Box className={classes.timeBox} suppressHydrationWarning>
								{timeLeft.seconds}
							</Box>
							<Box
								marginTop={1}
								style={{ fontSize: 16, fontWeight: 700, color: 'primary' }}
							>
								Seconds
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
