import React, { memo, useState, createElement } from 'react'
import { map, equals } from 'ramda'
import classNames from 'classnames'

import {
	StripeProvider, Elements, CardNumberElement, CardExpiryElement,
	CardCVCElement, PostalCodeElement,
} from 'react-stripe-elements'

import { stripeClientId } from 'sls-aws/src/constants/stripeClient'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
	root: {
		padding: [[6, 0, 7, 0]],
	},
	underline: {
		marginTop: 16,
		position: 'relative',
		'&:before': {
			left: '0',
			right: '0',
			bottom: '0',
			content: '""',
			position: 'absolute',
			transition: 'border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
			borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
			pointerEvents: 'none',
		},
		'&:hover': {
			'&:before': {
				borderBottom: '2px solid rgba(0, 0, 0, 0.87)',
			},
		},
		'&:after': {
			left: '0,',
			right: '0,',
			bottom: '0,',
			content: '"",',
			position: 'absolute,',
			// transform: 'scaleX(0),',
			transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
			borderBottom: '2px solid #303f9f,',
			pointerEvents: 'none',
			transform: 'scale(1)',
		},
	},
	elementWrapper: {
		position: 'relative',
	},
	inputLabelBase: {
		transition: [
			['color', '200ms', 'cubic-bezier(0.0, 0, 0.2, 1)', '0ms'],
			['transform', '200ms', 'cubic-bezier(0.0, 0, 0.2, 1)', '0ms'],
		],
		top: -22,
		left: 0,
		position: 'absolute',
		transform: [['translate(0, 24px)', 'scale(1)']],
		color: 'rgba(0, 0, 0, 0.54)',
		padding: 0,
		fontSize: 16,
		fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
		lineHeight: 1,
		transformOrigin: [['top', 'left']],
	},
	inputLabelFocus: {
		color: '#303f9f',
		transform: [['translate(0, 1.5px)', 'scale(0.75)']],
		transformOrigin: [['top', 'left']],
	},
})

const elementStyle = {
	base: {
		fontSize: '16px',
		fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
		'::placeholder': {
			color: 'transparent',
			fontSize: '16px',
		},
	},
}
const ccFields = [
	['flex-55', '1234 1234 1234 1234', CardNumberElement, 'cardNumber'],
	['flex-15', 'MM / YY', CardExpiryElement, 'cardExpiry'],
	['flex-15', 'CVC', CardCVCElement, 'cardCvc'],
	['flex-15', '90210', PostalCodeElement, 'postalCode'],
]

export const StripeCard = memo(() => {
	const classes = useStyles()
	const [focus, setFocus] = useState()
	return (
		<div className={classes.root}>
			<div className={classes.underline}>
			<StripeProvider apiKey={stripeClientId}>
				<Elements>
					<div className="layout-row">
						{map(([flex, label, element, focusString]) => (
							<div
								className={classNames(
									flex,
									classes.elementWrapper,
								)}
							>
								<div
									className={classNames(
										classes.inputLabelBase,
										{
											[classes.inputLabelFocus]: equals(
												focus,
												focusString,
											),
										},
									)}
								>
									{label}
								</div>
								{createElement(element, {
									style: elementStyle,
									onFocus: () => setFocus(focusString),
									onBlur: () => setFocus(null),
								})}
							</div>
						), ccFields)}
					</div>
				</Elements>
			</StripeProvider>
			</div>
		</div>
	)
})

export default StripeCard
