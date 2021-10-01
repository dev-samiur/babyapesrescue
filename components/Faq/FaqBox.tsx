import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: '100%',
		},
		heading: {
			fontSize: 20,
			fontWeight: 700,
		},
	})
)

interface FaqType {
	title: string
	details: string
}

interface FaqBoxProps {
	faqs: FaqType[]
}

const FaqBox: React.FC<FaqBoxProps> = ({ faqs }) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			{faqs.map((faq) => (
				<Accordion key={faq.title} defaultExpanded>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
						style={{borderBottom: '1px solid #ddd'}}
					>
						<Typography className={classes.heading}>{faq.title}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography style={{fontSize: 18}}>
							{faq.details}
						</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	)
}

export default FaqBox
