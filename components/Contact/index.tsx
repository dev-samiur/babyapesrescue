import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import Image from 'next/image'

const useStyles = makeStyles(() => ({
	titleText: {
		fontFamily: 'JungleLand',
		fontSize: 36,
		color: '#FFF',
	},
	iconStyle: {
		color: '#CBD320',
		fontSize: 20,
		cursor: 'pointer',
	},
}))

export default function index() {
	const classes = useStyles()

	return (
		<Box marginY={5}>
			<Box
				className={classes.titleText}
				display="flex"
				justifyContent="center"
				marginBottom={1}
			>
				Baby Apes Rescue
			</Box>
			<Box
				display="flex"
				justifyContent="center"
				marginBottom={2}
				style={{ color: '#FFF', fontSize: 18 }}
			>
				Verified Smart Contract
			</Box>
			<Box display="flex" justifyContent="center">
				<div>
					<a
						href="https://twitter.com/babyapesrescue"
						target="_blank"
						rel="noreferrer"
					>
						<TwitterIcon className={classes.iconStyle} />
					</a>
				</div>
				<div style={{ marginLeft: 15 }}>
					<a
						href="https://discord.io/BabyApesRescue"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="/icons/discord.png"
							alt="discord"
							className={classes.iconStyle}
							width={20}
							height={20}
						/>
					</a>
				</div>
			</Box>
		</Box>
	)
}
