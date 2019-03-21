import React from 'react'
import Link from 'root/src/client/web/base/Link'

export default (paragraph, additionalLinks) => {
	if (additionalLinks && additionalLinks.length) {
		return paragraph.map((p, idx) => {
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
		})
	}
	return paragraph
}
