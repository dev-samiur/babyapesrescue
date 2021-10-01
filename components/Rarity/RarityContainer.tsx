import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Box, Divider } from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
	titleText: {
		fontFamily: 'JungleLand',
		fontSize: 18,
		color: theme.palette.primary.main,
	},
	container: {
		position: 'relative',
		width: 135,
		padding: 20,
		backgroundColor: '#FFF',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 18,
		fontWeight: 700,
		color: theme.palette.primary.main,
		[theme.breakpoints.down('sm')]: {
			width: '100%'
		},
	},
	dividerContainerStyle: {
		top: '50%', 
		transform: 'translateY(-50%)',
		right: 0,
		[theme.breakpoints.down('sm')]: {
			right: 'auto',
			top: 0
		},
	},
	divider: {
		height: 100,
		right: 0,
		[theme.breakpoints.down('sm')]: {
			width: 100,
			height: 1,
			bottom: 0,
		},
	}
}))

interface RarityContainerProps {
	imgSrc: string
	amount: number
	title: string
}

const RarityContainer: React.FC<RarityContainerProps> = ({imgSrc, amount, title}) => {
	const classes = useStyles()
	const matches = useMediaQuery('(max-width:960px)')

	return (
		<Box className={classes.container}>
			<Box>
				<Image src={imgSrc} width={35} height={35} />
			</Box>
			<Box marginTop={2} style={{fontFamily: 'JungleLand', fontSize: 24}}>{amount}</Box>
			<Box marginTop={2}>{title}</Box>
			<Box position="absolute" className={classes.dividerContainerStyle}>
				<Divider light orientation={matches ? "horizontal" : "vertical" } className={classes.divider} />
			</Box>
		</Box>
	)
}

export default RarityContainer
