import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Box, Container } from '@material-ui/core'
import MemberBox from './MemberBox'

const useStyles = makeStyles((theme) => ({
	titleText: {
		fontFamily: 'JungleLand',
		fontSize: 36,
		color: theme.palette.secondary.main,
	},
}))

export default function index() {
	const classes = useStyles()
	const matches = useMediaQuery('(max-width:960px)')

	const members = [
		{
			imgSrc: '/images/member-1.png',
			name: 'DamienE',
			title: 'Champion Artist',
			desc: 'The Workout Maniac'
		},
		{
			imgSrc: '/images/member-2.jpg',
			name: 'GaryBaby',
			title: 'Creative Director',
			desc: 'YOLO Experimenting'
		},
		{
			imgSrc: '/images/member-3.jpg',
			name: 'BabySage',
			title: 'Crypto Freak',
			desc: 'NFT Enthusiast'
		},
		{
			imgSrc: '/images/member-4.jpg',
			name: 'SandraA',
			title: 'Mad Artist',
			desc: 'Morning Coffee Addict'
		},
		{
			imgSrc: '/images/member-5.jpg',
			name: 'RachelK',
			title: 'The Outreach Gal',
			desc: 'Secretive Closet Hoarder'
		},
	]

	return (
		<Box marginY={15} id="team">
			<Box
				className={classes.titleText}
				display="flex"
				justifyContent="center"
				marginBottom={5}
			>
				The Team
			</Box>
			<Container maxWidth="md">
				<Box display="flex" justifyContent="center" alignItems="flex-start" flexDirection={matches ? 'column' : 'row'}>
					{
						members.map(member => <MemberBox key={member.name} imgSrc={member.imgSrc} name={member.name} title={member.title} desc={member.desc} />)
					}
				</Box>
			</Container>
		</Box>
	)
}
