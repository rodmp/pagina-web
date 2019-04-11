import React, { memo, useState, useEffect } from 'react'
import { injectStripe } from 'react-stripe-elements'
import { map, addIndex } from 'ramda'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import TitleStrideText from 'root/src/client/web/typography/TitleStrideText'
import { useStyles } from './stripeStyles'


const mapIndexed = addIndex(map)

const StripeLists = memo(({ stripe, setInput, moduleKey, fieldPath, list, setView }) => {
	const classes = useStyles()
	const [radiovalue = list[0].id, setValue] = useState()
	useEffect(() => {
		setInput(moduleKey, fieldPath, radiovalue)
	}, [radiovalue])
	return (
		<FormControl className={classes.formConrol}>
			<TitleStrideText icon>Credit Card Number:</TitleStrideText>
			<RadioGroup
				onChange={event => setValue(event.target.value)}
				value={radiovalue}
			>
				{mapIndexed(({ lastFour, expMonth, expYear, brand, id }, ind) => (
					<FormControlLabel
						value={id}
						key={ind}
						control={(
							<Radio className={classes.itemList} />
						)}
						label={(
							<div>
								<div className={classes.cardTitle}>{brand}: ********{lastFour}</div>
								<div>Expire: {expMonth}/{expYear} </div>
							</div>
						)}
					/>
				), list)}
			</RadioGroup>
			<Button
				className={classes.addNewPaymentMethod}
				onClick={() => setView(false)}
			>
				Add a new payment method
			</Button>
		</FormControl>
	)
})


export default injectStripe(StripeLists)
