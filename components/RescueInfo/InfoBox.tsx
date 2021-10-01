import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Box } from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
	imgContainer: {
		background: theme.palette.secondary.main,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
	},
	paraContainer: {
		background: '#FFF',
		color: theme.palette.primary.main,
		fontWeight: 700,
		fontSize: 18,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		[theme.breakpoints.down('md')]: {
			fontSize: 16,
		},
	}
}))

interface InfoBoxProps {
	imgSrc: string
	text: string
}

const InfoBox: React.FC<InfoBoxProps> = ({imgSrc, text}) => {
	const classes = useStyles()
	const matches = useMediaQuery('(max-width:960px)')

	return (
		<Box height={70} width={matches ? '100%' : 500} display="flex" marginTop={2}>
			<Box width={100} padding={1} className={classes.imgContainer} display='flex' justifyContent='center' alignItems='center'>
				<Image src={imgSrc} height={60} width={60} alt="" />
			</Box>
			<Box width={400} padding={1} display="flex" justifyContent="flex-start" alignItems="center" className={classes.paraContainer}>
				{text}
			</Box>
		</Box>
	)
}

export default InfoBox
