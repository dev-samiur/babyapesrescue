import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Divider, LinearProgress } from '@material-ui/core'
import Counter from './Counter'

const useStyles = makeStyles((theme) => ({
	root: {
		fontFamily: 'JungleLand',
		fontSize: 20,
	},
	header: {
		background: theme.palette.secondary.main,
		padding: 15,
		fontSize: 36,
		color: theme.palette.primary.main,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
	content: {
		background: '#FFF',
		padding: 15,
		display: 'flex',
		flexDirection: 'column',
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
	button: {
		fontFamily: 'JUngleLand',
		fontWeight: 700,
		fontSize: 16,
		padding: '10px 20px',
		marginTop: -5,
		marginLeft: 5,
		color: theme.palette.primary.main,
		borderRadius: 20,
	},
}))

export default function FairCalculator() {
	const classes = useStyles()
	const [maxQuantity, setMaxQuantity] = useState(false)
	const [totalPrice, setTotalPrice] = useState(0.07)

	const handleTotalPrice = (type: string) => {
		switch (type) {
			case 'inc':
				setTotalPrice((curr) => {
					const temp = parseFloat((curr + .07).toPrecision(2))
					return temp
				})
				break
			case 'desc':
				setTotalPrice((curr) => {
					const temp = parseFloat((curr - .07).toPrecision(2))
					return temp
				})
				break
			case 'max':
				setTotalPrice(.7)
				break
			default:
				break
		}
	}

	return (
		<Box className={classes.root}>
			<Box className={classes.header}>Mint your baby ape</Box>
			<Box className={classes.content}>
				<Box
					display="flex"
					justifyContent="space-between"
					padding={2}
					borderRadius={10}
					style={{ background: '#E5E98F' }}
				>
					<Box>Your ETH Balance</Box>
					<Box>0.00000 ETH</Box>
				</Box>
				<Box
					marginTop={2}
					padding={2}
					display="flex"
					justifyContent="space-between"
				>
					<Box>Quantity</Box>
					<Box display="flex">
						<Box>
							<Counter
								isMaxQuantity={maxQuantity}
								handleMaxQuantity={(e) => setMaxQuantity(e)}
								handleTotalPrice={handleTotalPrice}
							/>
						</Box>
						<Button
							variant="contained"
							color="secondary"
							className={classes.button}
							onClick={() => {
								setMaxQuantity(true)
								handleTotalPrice('max')
							}}
						>
							Max
						</Button>
					</Box>
				</Box>
				<Divider />
				<Box
					display="flex"
					justifyContent="space-between"
					marginTop={1}
					padding={2}
				>
					<Box>Total Price</Box>
					<Box>{totalPrice}ETH</Box>
				</Box>
				<Button
					variant="contained"
					color="secondary"
					className={classes.button}
					style={{ marginTop: 10 }}
				>
					Buy Now!
				</Button>
				<Box
					display="flex"
					justifyContent="space-between"
					marginTop={1}
					padding={2}
				>
					<Box>Progress</Box>
					<Box>45%</Box>
				</Box>
				<Box paddingLeft={2} paddingRight={2} marginBottom={2}>
					<LinearProgress
						variant="determinate"
						value={45}
						color="secondary"
						style={{ height: 20, borderRadius: 10 }}
					/>
				</Box>
			</Box>
		</Box>
	)
}
