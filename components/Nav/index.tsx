/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import TwitterIcon from '@material-ui/icons/Twitter'
import { Button } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import Image from 'next/image'
import NavDrawer from './NavDrawer'

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	appbar: {
		background: theme.palette.primary.main,
		top: 0,
		paddingTop: 5,
		paddingBottom: 5,
	},
	toolbar: {
		padding: 0,
	},
	navContainer: {
		display: 'flex',
		justifyContent: 'space-around',
		maxWidth: 1600,
		width: '100%',
		margin: 'auto',
		padding: '0px 15px',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'block',
		flexGrow: 1,
		margin: '0px 50px',
		[theme.breakpoints.down('md')]: {
			margin: '0px 0px',
		},
	},
	titleText: {
		fontFamily: 'JungleLand',
		fontSize: 48,
		[theme.breakpoints.down('md')]: {
			fontSize: 28,
		},
	},
	iconStyle: {
		color: '#CBD320',
		fontSize: 20,
		cursor: 'pointer',
	},
	button: {
		marginTop: -5,
		fontWeight: 600,
		padding: '5px 10px',
		color: theme.palette.primary.main,
	},
	sectionDesktop: {
		margin: '0px 50px',
		display: 'none',
		flexGrow: 1,
		color: '#FFF',
		fontSize: 18,
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			justifyContent: 'space-evenly',
			alignItems: 'center',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	linkStyle: {
		textDecoration: 'none',
		color: '#FFF',
	},
}))

const MetamaskIcon = () => (
	<Icon style={{ width: 20, height: 20, marginTop: -5 }}>
		<Image alt="metamask" src="/icons/metamask.png" width={20} height={20} />
	</Icon>
)

export default function NavBar() {
	const classes = useStyles()

	return (
		<Box>
			<Box className={classes.grow}>
				<AppBar position="fixed" elevation={1} className={classes.appbar}>
					<Toolbar className={classes.toolbar}>
						<div className={classes.sectionMobile}>
							<NavDrawer />
						</div>
						<div className={classes.navContainer}>
							<div className={classes.title}>
								<a href="/" className={classes.linkStyle}>
									<Typography className={classes.titleText} noWrap>
										Baby Apes Rescue
									</Typography>
								</a>
							</div>
							<div className={classes.sectionMobile}>
								<Button
									variant="contained"
									color="secondary"
									className={classes.button}
								>
									Connect
								</Button>
							</div>
							<div className={classes.sectionDesktop}>
								<div>
									<a href="#about" className={classes.linkStyle}>
										About
									</a>
								</div>
								<div>
									<a href="#rarity" className={classes.linkStyle}>
										Rarity
									</a>
								</div>
								<div>
									<a href="#roadmap" className={classes.linkStyle}>
										Roadmap
									</a>
								</div>
								<div>
									<a href="#faq" className={classes.linkStyle}>
										Faq
									</a>
								</div>
								<div>
									<a href="#team" className={classes.linkStyle}>
										Team
									</a>
								</div>
								<div style={{ color: '#7A7B74' }}>|</div>
								<div>
									<a
										href="https://twitter.com/babyapesrescue"
										target="_blank"
										rel="noreferrer"
									>
										<TwitterIcon className={classes.iconStyle} />
									</a>
								</div>
								<div>
									<a
										href="https://discord.io/BabyApesRescue"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="/icons/discord.png"
											alt="discord"
											className={classes.iconStyle}
											width={20}
											height={20}
										/>
									</a>
								</div>
								<div>
									<Button
										variant="contained"
										color="secondary"
										size="small"
										startIcon={<MetamaskIcon />}
										className={classes.button}
									>
										Connect MetaMask
									</Button>
								</div>
							</div>
						</div>
					</Toolbar>
				</AppBar>
			</Box>
		</Box>
	)
}
