import { is, map, addIndex } from 'ramda'

import React, { memo, Fragment } from 'react'

import Link from 'root/src/client/web/base/Link'

import { ternary } from 'root/src/shared/util/ramdaPlus'

export default memo(({ text = '' }) => (
	<Fragment>
		{ternary(
			is(Array, text),
			addIndex(map)((stringOrLink, i) => {
				if (is(Object, stringOrLink)) {
					return (
						<Fragment key={i}>
							<Link routeId={stringOrLink.routeId}>
								{stringOrLink.text}
							</Link>
							&nbsp;
						</Fragment>
					)
				}
				return <span key={i}>{stringOrLink}&nbsp;</span>
			}, text),
			<span>{text}</span>,
		)}
	</Fragment>
))
