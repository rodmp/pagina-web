import React, { memo, useState, useEffect, createElement } from 'react'
import { map, equals, or, prop, assoc, not, all, isNil, values } from 'ramda'
import classNames from 'classnames'

import {
	StripeProvider, Elements, CardNumberElement, CardExpiryElement,
	CardCVCElement, PostalCodeElement, injectStripe,
} from 'react-stripe-elements'

import { stripeClientId } from 'sls-aws/src/shared/constants/stripeClient'
import fieldInputConnector from 'sls-aws/src/client-logic/form/connectors/fieldInputConnector'

import { makeStyles } from '@material-ui/styles'

const primaryColor = '#303f9f'
const errorColor = '#f44336'

const useStyles = makeStyles({
	root: {
		padding: [[6, 0, 7, 0]],
		marginTop: 16,
		position: 'relative',
		'&:before': {
			left: 0,
			right: 0,
			bottom: 0,
			content: '""',
			position: 'absolute',
			transition: [[
				'border-bottom-color', '200ms', 'cubic-bezier(0.4, 0, 0.2, 1)',
				'0ms',
			]],
			borderBottom: [[1, 'solid', 'rgba(0, 0, 0, 0.42)']],
			pointerEvents: 'none',
		},
		'&:after': {
			left: 0,
			right: 0,
			bottom: 0,
			content: '""',
			position: 'absolute',
			transform: 'scaleX(0)',
			transition: [[
				'transform', '200ms', 'cubic-bezier(0.0, 0, 0.2, 1)', '0ms',
			]],
			borderBottom: [[2, 'solid', primaryColor]],
			pointerEvents: 'none',
		},
	},
	underlineFocus: {
		'&:after': {
			transform: 'scaleX(1)',
		},
	},
	underlineError: {
		'&:after': {
			transform: 'scaleX(1)',
			borderBottomColor: errorColor,
		},
	},
	underlineHover: {
		'&:hover': {
			'&:before': {
				borderBottom: [[2, 'solid', 'rgba(0, 0, 0, 0.87)']],
			},
		},
	},
	errors: {
		fontSize: '0.75rem',
		textAlign: 'left',
		marginTop: 8,
		minHeight: '1em',
		fontFamily: [['"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif']],
		lineHeight: '1em',
		color: errorColor,
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
		fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif'],
		lineHeight: 1,
		transformOrigin: [['top', 'left']],
	},
	inputLabelFocus: {
		color: primaryColor,
		transform: [['translate(0, 1.5px)', 'scale(0.75)']],
		transformOrigin: [['top', 'left']],
	},
	inputLabelError: {
		color: errorColor,
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
	['cardNumber', 'flex-55', '1234 1234 1234 1234', CardNumberElement],
	['cardExpiry', 'flex-15', 'MM / YY', CardExpiryElement],
	['cardCvc', 'flex-15', 'CVC', CardCVCElement],
	['postalCode', 'flex-15', '90210', PostalCodeElement],
]

export const StripeFields = memo(({
	stripe, moduleKey, fieldPath, setInput,
}) => {
	const classes = useStyles()
	const [focus, setFocus] = useState()
	const [emptys, setEmptys] = useState()
	const [errors, setErrors] = useState({})
	const hasError = not(all(isNil, values(errors)))
	useEffect(() => {
		setInput(moduleKey, fieldPath, stripe)
	}, [stripe])
	return (
		<div className="layout-column">
			<div
				className={classNames(
					classes.root,
					{
						[classes.underlineFocus]: focus && !hasError,
						[classes.underlineHover]: !focus,
						[classes.underlineError]: hasError,
					},
				)}
			>
				<div className="layout-row">
					{map(([elementType, flex, label, element]) => (
						<div
							key={elementType}
							className={classNames(
								flex,
								classes.elementWrapper,
							)}
						>
							<div
								className={classNames(
									classes.inputLabelBase,
									{
										[classes.inputLabelError]: prop(
											errors, elementType,
										),
										[classes.inputLabelFocus]: or(
											equals(focus, elementType),
											equals(
												prop(
													elementType,
													emptys,
												),
												false,
											),
										),
									},
								)}
							>
								{label}
							</div>
							{createElement(element, {
								style: elementStyle,
								onFocus: () => setFocus(elementType),
								onBlur: () => setFocus(null),
								onChange: (changeObj) => {
									const {
										empty, error = {},
									} = changeObj
									setErrors(
										assoc(
											elementType,
											error.message,
											errors,
										),
									)
									setEmptys(
										assoc(
											elementType, empty, emptys,
										),
									)
								},
							})}
						</div>
					), ccFields)}
				</div>
			</div>
			<div className={classNames('layout-row', classes.errors)}>
				{map(([elementType, flex]) => (
					<div className={flex} key={elementType}>
						{errors[elementType]}
					</div>
				), ccFields)}
			</div>
		</div>
	)
})

const InjectedStripeFields = injectStripe(StripeFields)

export const StripeCardUnconnected = memo(({
	moduleKey, fieldPath, setInput,
}) => (
	<StripeProvider apiKey={stripeClientId}>
		<Elements>
			<InjectedStripeFields
				moduleKey={moduleKey}
				fieldPath={fieldPath}
				setInput={setInput}
			/>
		</Elements>
	</StripeProvider>
))

export default fieldInputConnector(StripeCardUnconnected)
