import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Box, Container } from '@material-ui/core'
import FaqBox from './FaqBox'

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

	const faqs = [
		{
			title: 'How were the Baby Apes created?',
			details:
				'Each baby ape was intricately hand-drawn by our team. Our champion artist, DamienE, drew the initial concept on paper! Our mad artist, Sandra, drew the other collection of items.',
		},
		{
			title: 'What Baby Ape will I get when I mint?',
			details:
				'Each baby ape is randomly constructed when you mint. You will receive a set of different traits that are unique from other baby apes. The reveal will happen within 24 hour of minting.',
		},
		{
			title: 'Where does my NFT go after I buy a Baby Ape?',
			details:
				'Your baby ape will appear in your connected wallet address that you used to purchase the Baby Ape. You will be able to see your baby ape through viewing them on OpenSea.',
		},
		{
			title: 'Tokenomics?',
			details:
				'200 baby apes are being withheld from the sale. These will be used for contests, giveaways, rewards, quizzes and holder airdrops. The 5 team members behind baby apes will each be given a baby ape (from the reserve pile). The remaining majority are available for sale!',
		},
		{
			title: 'Who is the team behind Baby Apes Rescue?',
			details:
				'We’re a team of 5 who have a great passion for nft art, crypto and creating a metaverse. Our team’s social media is Baby Apes Rescue (twitter.com and instagram.com). You can view some brief info about our team below!',
		},
	]

	return (
		<Box marginTop={matches ? 0 : 15} id="faq">
			<Box
				className={classes.titleText}
				display="flex"
				justifyContent="center"
				marginBottom={5}
			>
				Frequently Asked Questions
			</Box>
			<Container maxWidth="md">
				<FaqBox faqs={faqs} />
			</Container>
		</Box>
	)
}
