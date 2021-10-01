import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
	titleText: {
		fontFamily: 'JungleLand',
		fontSize: 18,
		color: theme.palette.primary.main,
	},
	container: {
		width: '100%',
		maxWidth: 350,
		padding: 10,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 16,
		fontWeight: 700,
		textAlign: 'center',
		color: '#FFF',
	},
}))

interface MemberBoxProps {
	imgSrc: string
	name: string
	title: string
	desc: string
}

const MemberBox: React.FC<MemberBoxProps> = ({ imgSrc, name, title, desc }) => {
	const classes = useStyles()

	return (
		<Box className={classes.container}>
			<Box>
				<Image src={imgSrc} width={200} height={200} />
			</Box>
			<Box marginTop={2}>
				<Typography
					color="secondary"
					style={{ fontFamily: 'JungleLand', fontSize: 24 }}
				>
					{name}
				</Typography>
			</Box>
			<Box marginTop={1}>{title}</Box>
			<Box marginTop={1}>{desc}</Box>
		</Box>
	)
}

export default MemberBox
