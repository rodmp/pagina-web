import React, { memo, useState, useEffect, createElement } from 'react'
import { map, equals, or, prop, assoc } from 'ramda'
import classNames from 'classnames'

import {
	StripeProvider, Elements, CardNumberElement, CardExpiryElement,
	CardCVCElement, PostalCodeElement, injectStripe,
} from 'react-stripe-elements'

import { stripeClientId } from 'sls-aws/src/shared/constants/stripeClient'
import fieldInputConnector from 'sls-aws/src/client/logic/form/connectors/fieldInputConnector'
import { useStyles, elementStyle } from './stripeStyles';

const ccFields = [
	['cardNumber', 'flex-100', '1234 1234 1234 1234', CardNumberElement],
	['cardExpiry', 'flex-50', 'MM / YY', CardExpiryElement],
	['cardCvc', 'flex-50', 'CVC', CardCVCElement],
	['postalCode', 'flex-100', '90210', PostalCodeElement],
]

export const StripeFields = memo(({
	stripe, moduleKey, fieldPath, setInput,
}) => {
	const classes = useStyles()
	const [focus, setFocus] = useState()
	const [emptys, setEmptys] = useState()
	const [errors, setErrors] = useState({})
	useEffect(() => {
		setInput(moduleKey, fieldPath, stripe)
	}, [stripe])
	return (
		<div className="layout-column">
			<div
				className={classNames(classes.root)}
			>
				<div className={classNames('layout-row', 'layout-wrap')}>
					{map(([elementType, flex, label, element]) => (
						<div className={classNames(flex)} key={elementType}>
							<div
								className={classNames(
									classes.elementWrapper,
									{
										[classes.elementFocus]: or(
											equals(focus, elementType),
											equals(prop(
												elementType,
												emptys,
											),
											false),
										),
									},
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
							<div className={classNames('layout-column', classes.errors)}>
								<div className={flex} key={elementType}>
									{errors[elementType]}
								</div>
							</div>
						</div>
					), ccFields)}
				</div>
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
