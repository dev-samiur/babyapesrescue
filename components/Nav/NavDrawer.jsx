import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import TwitterIcon from '@material-ui/icons/Twitter'
import IconButton from '@material-ui/core/IconButton'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	iconStyle: {
		color: '#CBD320',
		fontSize: 20,
	},
	drawerStyle: {
		height: '100%',
		background: theme.palette.primary.main,
		color: '#CBD320',
	},
	linkStyle: {
		textDecoration: 'none',
		color: '#FFF',
	},
}))

export default function NavDrawer() {
	const classes = useStyles()
	const [state, setState] = React.useState({
		left: false,
	})

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return
		}
		setState({ ...state, [anchor]: open })
	}

	const list = (anchor) => (
		<div
			className={clsx(classes.list, classes.drawerStyle, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom',
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<ListItem>
					<a href="#about" className={classes.linkStyle}>
						<ListItemText primary="About" />
					</a>
				</ListItem>
				<ListItem>
					<a href="#rarity" className={classes.linkStyle}>
						<ListItemText primary="Rarity" />
					</a>
				</ListItem>
				<ListItem>
					<a href="#roadmap" className={classes.linkStyle}>
						<ListItemText primary="Roadmap" />
					</a>
				</ListItem>
				<ListItem>
					<a href="#faq" className={classes.linkStyle}>
						<ListItemText primary="Faq" />
					</a>
				</ListItem>
				<ListItem>
					<a href="#team" className={classes.linkStyle}>
						<ListItemText primary="Team" />
					</a>
				</ListItem>
				<ListItem>
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
				</ListItem>
			</List>
		</div>
	)

	return (
		<div>
			{['left'].map((anchor) => (
				<React.Fragment key={anchor}>
					<IconButton color="inherit" onClick={toggleDrawer(anchor, true)}>
						<MenuIcon fontSize="large" />
					</IconButton>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	)
}
