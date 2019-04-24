import React from 'react'
import Link from 'root/src/client/web/base/Link'
import { map } from 'ramda'

export default (paragraph, additionalLinks) => {
	if (additionalLinks && additionalLinks.length) {
		return map((p, idx) => {
			let text
			additionalLinks.forEach((link) => {
				if (idx === link.linkIndex) {
					text = (
						<Link key={idx} routeId={link.linkRouteId}>{p}</Link>
					)
				} else {
					text = p
				}
			})
			return text
		}, paragraph)
	}
	return paragraph
}
