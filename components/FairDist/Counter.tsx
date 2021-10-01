import React, { useState, useEffect } from 'react'
import { Box } from '@material-ui/core'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

interface CounterProps {
	isMaxQuantity: boolean
	// eslint-disable-next-line no-unused-vars
	handleMaxQuantity: (isMaxQuantity: boolean) => void
	// eslint-disable-next-line no-unused-vars
	handleTotalPrice: (type:string) => void
}
const Counter: React.FC<CounterProps> = ({isMaxQuantity, handleMaxQuantity, handleTotalPrice}) => {
	const [quantity, setQuantity] = useState(1)

	const incrementQuantity = () => {
		if(quantity < 10) {
			handleMaxQuantity(false)
			handleTotalPrice('inc')
			setQuantity((curr) => curr + 1)
		}
	}

	const decrementQuantity = () => {
		if(quantity > 1) {
			handleMaxQuantity(false)
			handleTotalPrice('desc')
			setQuantity((curr) => curr - 1)
		}
	}

	useEffect( () => {
		if(isMaxQuantity)
			setQuantity(10)
	}, [isMaxQuantity])

	return (
		<Box display="flex">
			<Box marginRight={1}>
				<ArrowDropUpIcon
					color="secondary"
					fontSize="large"
					onClick={incrementQuantity}
					style={{ cursor: 'pointer' }}
				/>
			</Box>
			<Box marginTop={0.5}>{quantity}</Box>
			<Box marginLeft={1}>
				<ArrowDropDownIcon
					color="secondary"
					fontSize="large"
					onClick={decrementQuantity}
					style={{ cursor: 'pointer' }}
				/>
			</Box>
		</Box>
	)
}

export default Counter