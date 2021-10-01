import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		flexDirection: 'column',
		fontSize: 18,
	},
	secondaryTail: {
		backgroundColor: theme.palette.secondary.main,
	},
	titleText: {
		fontFamily: 'JungleLand',
		fontSize: 24,
		color: theme.palette.primary.main,
		marginBottom: 10,
	},
	contentText: {
		[theme.breakpoints.down('md')]: {
			width: 150
		},
	}
}))

export default function CustomizedTimeline() {
	const classes = useStyles()

	return (
		<Timeline align="alternate">
			<TimelineItem>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Typography className={classes.titleText}>
							Launch of Baby Apes Rescue
						</Typography>
						<Box display="flex">
							<img
								src="/images/roadmap.png"
								style={{ width: 20, height: 20, marginRight: 10 }}
								alt=""
							/>
							<Typography  className={classes.contentText}>
								On 26th Sept, we go live! 9pm CEST, 3pm EST, 12pm PST
							</Typography>
						</Box>
					</Paper>
				</TimelineContent>
				<TimelineSeparator>
					<TimelineDot
						color="secondary"
						style={{
							height: 50,
							width: 50,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img
							src="/images/roadmap-1.png"
							alt=""
							style={{ width: 30, height: 30 }}
						/>
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineOppositeContent />
			</TimelineItem>
			<TimelineItem>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Typography className={classes.titleText}>
							Once 25% of the baby apes get a new home
						</Typography>
						<Box display="flex">
							<img
								src="/images/roadmap.png"
								style={{ width: 20, height: 20, marginRight: 10 }}
								alt=""
							/>
							<Typography style={{ textAlign: 'start', }} className={classes.contentText}>
								Ramp up marketing efforts to promote the Baby Apes!
							</Typography>
						</Box>
					</Paper>
				</TimelineContent>
				<TimelineSeparator>
					<TimelineDot
						color="secondary"
						style={{
							height: 50,
							width: 50,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img
							src="/images/roadmap-2.png"
							alt=""
							style={{ width: 30, height: 30 }}
						/>
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineOppositeContent />
			</TimelineItem>
			<TimelineItem>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Typography className={classes.titleText}>
							Once 50% of the baby apes get a new home
						</Typography>
						<Box display="flex">
							<img
								src="/images/roadmap.png"
								style={{ width: 20, height: 20, marginRight: 10 }}
								alt=""
							/>
							<Typography className={classes.contentText}>
								Community raffle to win Baby Apes which will be airdropped for
								free
							</Typography>
						</Box>
					</Paper>
				</TimelineContent>
				<TimelineSeparator>
					<TimelineDot
						color="secondary"
						style={{
							height: 50,
							width: 50,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img
							src="/images/roadmap-3.png"
							alt=""
							style={{ width: 30, height: 30 }}
						/>
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineOppositeContent />
			</TimelineItem>
			<TimelineItem>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Typography className={classes.titleText}>
							Once 75% of the baby apes get a new home
						</Typography>
						<Box display="flex">
							<img
								src="/images/roadmap.png"
								style={{ width: 20, height: 20, marginRight: 10 }}
								alt=""
							/>
							<Typography style={{ textAlign: 'start' }}>
								Exclusive merchandise store where you can print your Baby Apes!
							</Typography>
						</Box>
						<Box display="flex">
							<img
								src="/images/roadmap.png"
								style={{ width: 20, height: 20, marginRight: 10 }}
								alt=""
							/>
							<Typography style={{ textAlign: 'start', marginTop: 10 }} className={classes.contentText}>
								We make a donation of 5 ETH to a Global Climate Change
								Initiative
							</Typography>
						</Box>
					</Paper>
				</TimelineContent>
				<TimelineSeparator>
					<TimelineDot
						color="secondary"
						style={{
							height: 50,
							width: 50,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img
							src="/images/roadmap-4.png"
							alt=""
							style={{ width: 30, height: 30 }}
						/>
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineOppositeContent />
			</TimelineItem>
			<TimelineItem>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Typography className={classes.titleText}>
							Once 100% of the baby apes get a new home
						</Typography>
						<Box display="flex">
							<img
								src="/images/roadmap.png"
								style={{ width: 20, height: 20, marginRight: 10 }}
								alt=""
							/>
							<Typography className={classes.contentText}>
								Community raffle amongst baby ape holders to win up to 3 ETH
							</Typography>
						</Box>
						<Box display="flex">
							<img
								src="/images/roadmap.png"
								style={{ width: 20, height: 20, marginRight: 10 }}
								alt=""
							/>
							<Typography style={{ marginTop: 10 }} className={classes.contentText}>
								Treehouse Entry implementation, a new beautiful home for our
								baby apes
							</Typography>
						</Box>
					</Paper>
				</TimelineContent>
				<TimelineSeparator>
					<TimelineDot
						color="secondary"
						style={{
							height: 50,
							width: 50,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img
							src="/images/roadmap-5.png"
							alt=""
							style={{ width: 30, height: 30 }}
						/>
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineOppositeContent />
			</TimelineItem>
			<TimelineItem>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Typography className={classes.titleText}>
							Future evolution plan
						</Typography>
						<Box display="flex">
							<img
								src="/images/roadmap.png"
								style={{ width: 20, height: 20, marginRight: 10 }}
								alt=""
							/>
							<Typography style={{ textAlign: 'start' }} className={classes.contentText}>
								Hodl your baby ape for a future secret apevolution event!!
							</Typography>
						</Box>
					</Paper>
				</TimelineContent>
				<TimelineSeparator>
					<TimelineDot
						color="secondary"
						style={{
							height: 50,
							width: 50,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img
							src="/images/roadmap-6.png"
							alt=""
							style={{ width: 30, height: 30 }}
						/>
					</TimelineDot>
				</TimelineSeparator>
				<TimelineOppositeContent />
			</TimelineItem>
		</Timeline>
	)
}
