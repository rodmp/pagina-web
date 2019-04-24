import React, { memo, useState, useEffect, createElement } from 'react'
import { map, equals, or, prop, assoc } from 'ramda'
import classNames from 'classnames'

import {
	CardNumberElement,
	CardExpiryElement,
	CardCVCElement,
	PostalCodeElement,
	injectStripe,
} from 'react-stripe-elements'

import TitleStrideText from 'root/src/client/web/typography/TitleStrideText'
import { useStyles, elementStyle } from './stripeStyles'

const ccFields = [
	['cardNumber', 'flex-100', 'Credit Card Number', true, '1234 1234 1234 1234', CardNumberElement],
	['cardExpiry', 'flex-45', 'Expiration', false, 'MM / YY', CardExpiryElement],
	['cardCvc', 'flex-45', 'Security Code', false, 'CVC', CardCVCElement],
	['postalCode', 'flex-100', 'Zip Code', false, '90210', PostalCodeElement],
]

const StripeFields = memo(({
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
				<div className={classNames('layout-row', 'layout-wrap', 'layout-align-space-between')}>
					{map(([elementType, flex, labelText, icon, label, element]) => (
						<div className={classNames(flex)} key={elementType}>
							<div className={classes.labelFieldText}>
								<TitleStrideText icon={icon}>{labelText}</TitleStrideText>
							</div>
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
									id: elementType,
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

export default injectStripe(StripeFields)
