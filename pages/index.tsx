import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Divider } from '@material-ui/core'
import Nav from '../components/Nav'
import About from '../components/About'
import Countdown from '../components/Countdown'
import RescueInfo from '../components/RescueInfo'
import Rarity from '../components/Rarity'
import TreeHouse from '../components/TreeHouse'
import Faq from '../components/Faq'
import Team from '../components/Team'
import Contact from '../components/Contact'
import RoadMap from '../components/RoadMap'
import Banner from '../components/Banner'
import FairDist from '../components/FairDist'

const useStyles = makeStyles(() => ({
	heroBG: {
		height: '100vh',
		background: 'url("/images/hero.png")',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	},
}))

const index: React.FC = () => {
	const classes = useStyles()

	return (
		<div>
			<Nav />
			<div className={classes.heroBG} />
			<Container maxWidth="md" style={{marginBottom: 50, padding: 10, overflow: 'hidden'}}>
				<About />
				<Countdown />
				<FairDist />
				<RescueInfo />
				<Rarity />
			</Container>
			<Banner />
			<RoadMap />
			<TreeHouse />
			<Faq />
			<Team />
			<Divider style={{height: 1, background: '#ddd', opacity: .5}} />
			<Contact />
		</div>
	)
}

export default index
