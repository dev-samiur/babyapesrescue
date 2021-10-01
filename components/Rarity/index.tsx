import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Box } from '@material-ui/core'
import Image from 'next/image'
import RarityContainer from './RarityContainer'

const useStyles = makeStyles((theme) => ({
	titleText: {
		fontFamily: 'JungleLand',
		fontSize: 36,
		color: theme.palette.secondary.main,
	},
	footer: {
		fontFamily: 'JungleLand',
		fontSize: 28,
		color: '#FFF'
	},
	diamondText: {
		color: theme.palette.secondary.main,
		margin: '0px 15px',
		marginTop: -5,
		fontSize: 36,
		display: 'flex',
		alignItems: 'center'
	}
}))

export default function index() {
	const classes = useStyles()
	const matches = useMediaQuery('(max-width:960px)')

	const rarities = [
		{
			imgSrc: '/images/rarity-1.png',
			amount: 16,
			title: 'Backgrounds',
		},
		{
			imgSrc: '/images/rarity-2.png',
			amount: 21,
			title: 'Skins',
		},
		{
			imgSrc: '/images/rarity-3.png',
			amount: 43,
			title: 'Clothes',
		},
		{
			imgSrc: '/images/rarity-4.png',
			amount: 23,
			title: 'Eyes',
		},
		{
			imgSrc: '/images/rarity-5.png',
			amount: 38,
			title: 'Hats',
		},
		{
			imgSrc: '/images/rarity-6.png',
			amount: 34,
			title: 'Mouths',
		},
		{
			imgSrc: '/images/rarity-7.png',
			amount: 27,
			title: 'Eyewear',
		},
	]

	return (
		<Box marginTop={matches ? 10 : 15} display="flex" flexDirection="column" id="rarity">
			<Box
				className={classes.titleText}
				display="flex"
				justifyContent="center"
				marginBottom={2}
			>
				More Rarity Details
			</Box>
			<Box display="flex" flexDirection={matches ? 'column' : 'row'}>
				{rarities.map((rarity) => (
					<RarityContainer
						imgSrc={rarity.imgSrc}
						amount={rarity.amount}
						title={rarity.title}
						key={rarity.imgSrc}
					/>
				))}
			</Box>
			<Box
				display="flex"
				justifyContent="center"
				marginY={3}
				className={classes.footer}
			>
				and <span className={classes.diamondText}>10 <Image src="/images/diamond.png" width={40} height={40} /></span> super rare baby apes
			</Box>
		</Box>
	)
}
